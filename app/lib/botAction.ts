import { Bot } from "../models/Bot";
import dbConnect from "./db";

export const grabUserBots = async (userId: any) => {
  try {
    await dbConnect();

    const userBot = await Bot.find({ botParent: userId });

    return userBot;
  } catch (error) {
    console.log(error);
    return "sorry can grab user bot";
  }
};

export const grabSpecificBot = async (currentBotId: any) => {
  try {
    await dbConnect();

    // Maybe populate
    const mainBot = await Bot.find({ _id: currentBotId as string });

    return mainBot;
  } catch (error) {
    console.log(error);
    return "sorry error grabbing specific bot";
  }
};

export const grabSpecificBotSession = async (mainBotId: any) => {
  try {
    console.log(mainBotId);

    return [];
  } catch (error) {
    console.log(error);
    return "sorry cant seem to grab bot session";
  }
};
