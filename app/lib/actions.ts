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

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (
  state: string | undefined,
  formData: FormData
) => {
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

  const {signature} = Object.fromEntries(formData)

  try {
 
    await dbConnect()

    const userAddress = ethers.utils.verifyMessage(
      process.env.SIGNMESSAGE!,
      signature as string
    );
    
    const userExist = await User.findOne({metaAddress: userAddress})
    
    if(!userExist) return "sorry metaccount not connected"
    if(userAddress !== userExist.metaAddress) return "Sorry address not right"




    return "success"
  } catch (error) {
    console.log(error)
    return "Error signing user in with meta"
  }
}

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
  const {name, subject, content} = Object.fromEntries(formData)
  
  try {
    await dbConnect();

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: name as string,
      subject: subject as string,
      content: content as string,
    });

    return "success"
  } catch (error) {
    console.log(error);
    return "fail"
  }
}