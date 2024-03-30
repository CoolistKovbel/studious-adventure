import mongoose, { Schema, Types } from "mongoose";
import { BotDocument } from "./Bot";

interface IUser {
  username: string;
  email: string;
  password: string;
  userImage: string;
  role: string;
  isPro: boolean;
  metaAddress: string;
  membership: boolean;
  tokens: Number;
  count: Number;
  signature: string;
  mainBot: Types.ObjectId | BotDocument;
}

export interface UserDocument extends IUser, Document {}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      min: 4,
      max: 24,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    membership: {
      type: Boolean,
      default: false
    },
    tokens: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    userImage: {
      type: String,
    },
    metaAddress: {
      type: String,
    },
    signature: {
      type: String,
    },
    mainBot: {
      type: Schema.Types.ObjectId,
      ref: "Bot",
    },
    role: {
      type: String,
      default: "USER",
      enum: ["USER","MEMBER", "ADMIN", "CAPTAIN"],
    },
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
