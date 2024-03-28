"use server";

import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions } from "./sessionClient";
import { compare, hash } from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import dbConnect from "./db";
import { User } from "../models/User";
import { ethers } from "ethers";
import { sendMail } from "./mail";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { Bot } from "../models/Bot";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (state: string | undefined, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);
  const session = await getSession();

  try {
    await dbConnect();

    const userExist = await User.findOne({ email: email as string }).exec();
    if (!userExist) return "sorry user doesnt exist wtf";

    const authUser = await compare(password as string, userExist.password);
    if (!authUser) return "Sorry password dont seem to work";

    session.userId = userExist._id.toString();
    session.username = userExist.username;
    session.email = userExist.email;
    session.isPro = userExist.isPro;
    session.role = userExist.role;
    session.metaAccount = userExist.metaAddress;
    session.tokens = Number(userExist.tokens);
    session.count = Number(userExist.count);

    session.isLoggedIn = true;

    await session.save();

    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// Todo: fix this login
export const metaLogin = async (
  state: string | undefined,
  formData: FormData
) => {
  const { signature } = Object.fromEntries(formData);

  try {
    await dbConnect();

    const userAddress = ethers.utils.verifyMessage(
      process.env.SIGNMESSAGE!,
      signature as string
    );

    const userExist = await User.findOne({ metaAddress: userAddress });

    if (!userExist) return "sorry metaccount not connected";
    if (userAddress !== userExist.metaAddress) return "Sorry address not right";

    // verify signature dumbass

    return "success";
  } catch (error) {
    console.log(error);
    return "Error signing user in with meta";
  }
};

export const Registrar = async (
  state: string | undefined,
  formData: FormData
) => {
  const { username, email, password, metaAddress } =
    Object.fromEntries(formData);

  try {
    await dbConnect();

    const hashedPassword = await hash(password as string, 10);

    const payload = {
      username: username as string,
      email: email as string,
      password: hashedPassword,
      metaAddress: (metaAddress as string) || null,
    };

    const newUser = new User(payload);
    await newUser.save();

    return "Authentication success";
  } catch (error) {
    console.log(error);

    return "notnoice";
  }
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const { name, subject, content } = Object.fromEntries(formData);

  try {
    await dbConnect();

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: name as string,
      subject: subject as string,
      content: content as string,
    });

    return "success";
  } catch (error) {
    console.log(error);
    return "fail";
  }
}

export async function HandleUserUpdate(
  prevState: string | object | undefined,
  formData: FormData
) {
  const sessionUser = await getSession();

  const { username, password, metaAddress, email } =
    Object.fromEntries(formData);

  const imageBan = (formData.get("image") as File) || null;

  const updateFields: Record<string, any> = {};

  try {
    await dbConnect();

    let rest;

    if (username && username !== sessionUser.username) {
      sessionUser.username = username as string;
      updateFields.username = username;
    }

    if (email && email !== sessionUser.email) {
      sessionUser.email = email as string;
      updateFields.email = email;
    }

    if (metaAddress && metaAddress !== sessionUser.metaAccount) {
      sessionUser.metaAccount = metaAddress as string;
      updateFields.metaAddress = metaAddress as string;
    }

    if (imageBan !== null && imageBan.size !== 0) {
      const fileBuffer = await (imageBan as File).arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      // set path
      const path = `${process.cwd()}/public/profileImage/${
        crypto.randomUUID() + imageBan.name
      }`;
      // Write image
      await writeFile(path, buffer);
      rest = path.split(`${process.cwd()}/public`)[1];

      sessionUser.image = rest;
      updateFields.image = rest;
    }

    let newPassword;

    if (password && password !== "") {
      newPassword = await hash(password as string, 10);
      updateFields.password = newPassword;
    }

    updateFields.updatedAt = new Date();

    await User.findByIdAndUpdate(sessionUser.userId as string, updateFields, {
      runValidators: true,
    });

    await sessionUser.save();

    revalidatePath(`/dashboard/settings?type=edit`);

    return "success";
  } catch (error) {
    console.log(error);
    return "Sorry there is an error updating account";
  }
}

export async function createAIBOT(
  prevState: string | object | undefined,
  formData: FormData
) {
  const currentSession = await getSession();
  const { botName, botPurpose, sessoinUrl } = Object.fromEntries(formData);
  const botImage = formData.get("botImage") as File;
  let rest;

  try {
    await dbConnect();

    if (botImage !== null && botImage.size !== 0) {
      const fileBuffer = await (botImage as File).arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      // set path
      const path = `${process.cwd()}/public/profileImage/${
        crypto.randomUUID() + botImage.name
      }`;
      // Write image
      await writeFile(path, buffer);
      rest = path.split(`${process.cwd()}/public`)[1];

      currentSession.image = rest;
    }

    const payload = {
      name: botName as string,
      mainPurpose: botPurpose as string,
      image: rest,
      botParent: currentSession.userId as string
    }

    const newBot = new Bot(payload)

    await newBot.save()

    await User.findByIdAndUpdate(currentSession.userId as string, {mainBot: newBot._id}, {
      runValidators: true,
    });

    currentSession.mainBot = newBot._id as string

    await currentSession.save()

    revalidatePath(sessoinUrl as string)


    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
}
