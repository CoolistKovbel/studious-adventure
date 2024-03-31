// Api limit api call librarry.

import { User } from "../models/User";
import { getSession } from "./actions";
import dbConnect from "./db";

export async function increaseAPILimit() {
  try {
    const user = await getSession();
    await dbConnect();

    if (!user) return "Are you even logged";

    user.tokens = Number(user.tokens) - 4;
    user.count = Number(user?.count) + 1;

    await User.findOneAndUpdate(
      { id: user.userId as string }, // Find the document by ID
      {
        $set: { tokens: Number(user.tokens) - 4 }, // Set new value for tokens
        $inc: { count: 1 }, // Increment count by 1
      }
    );

    await user.save();
    
    return "success";
  } catch (error) {
    console.log(error);
    return "There is an error in api limit";
  }
}

export const userApiCheck = async () => {
  try {
    const user = await getSession();
    await dbConnect();

    if (!user) return "Are you even logg";

    const apiLimit = await User.findOne({ id: user.userId as string });

    if (!apiLimit || apiLimit === null) return "Are you even logged";

    if (Number(apiLimit.count) === 40) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return "eror in de api limit for check";
  }
};
