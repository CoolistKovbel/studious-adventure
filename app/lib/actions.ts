"use server"

import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOptions } from "./sessionClient";
import { compare, hash } from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import dbConnect from "./db";
import { User } from "../models/User";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (
  state: "error wrong credentials" | "success" | "error" | undefined,
  formData: FormData
) => {
  const {email, password} = Object.fromEntries(formData)
  const session = await getSession();

  try {


    await dbConnect()


    const userExist = await User.findOne({email: email as string}).exec()

    if(!userExist) return "sorry user doesnt exist wtf"

    console.log(password)
    console.log(userExist.password)

    const authUser = await compare(userExist.password, password as string)

    console.log(authUser)


    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const Registrar = async (
  state: string | undefined,
  formData: FormData
) => {
  const { username, email, password, metaAddress } =
    Object.fromEntries(formData);

  try {

    await dbConnect()

    const hashedPassword = await hash(password as string, 10);

    const payload = {
      username: username as string,
      email: email as string,
      password: hashedPassword,
      metaAddress: metaAddress as string || null
    }

    const newUser = new User(payload)
    await newUser.save()

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
