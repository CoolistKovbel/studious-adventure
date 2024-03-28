import { Bot } from "../models/Bot";
import dbConnect from "./db";

export const grabUserBots = async (userId: any) => {
  try {
    console.log("grabbing bot for", userId);
    await dbConnect();

    const userBot = await Bot.find({ botParent: userId });

    return userBot;
  } catch (error) {
    console.log(error);
    return "sorry can grab user bot";
  }
};
