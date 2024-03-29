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

    const mainBot = await Bot.findOne({ _id: mainBotId as string }).populate("botSession");

    const latestSession = mainBot?.botSession.sort((a:any, b:any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())[0];

    return [latestSession];
  } catch (error) {
    console.log(error);
    return "sorry cant seem to grab bot session";
  }
};

export const grabAllBotSessions = async (mainBotId: string) => {
  try {

    await dbConnect()

    const mainbotSessions  = await Bot.findOne({ _id: mainBotId as string }).populate("botSession");

    return mainbotSessions?.botSession
    
  } catch (error) {
    console.log(error)
    return "Error grabbing users"
  }
}
