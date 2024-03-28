import mongoose, { Document, Schema, Types } from "mongoose";
import { ConversationDocument } from "./Conversation";

interface IBotBabe {
  name: string;
  mainPurpose: string;
  image: string;
  botParent: any;
  conversations: Types.ObjectId[] | ConversationDocument[];
  botType: string;
  botUrl: string;
  emmbeding: [];
}

export interface BotBabyDocument extends IBotBabe, Document {}

const BotBabySchema: Schema<BotBabyDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mainPurpose: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    botParent: {
      type: Schema.Types.ObjectId,
      ref: "Bot",
    },
    conversations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Conversation",
      },
    ],
    botType: {
      type: String,
      default: "CHAT",
    },
    botUrl: {
      type: String,
    },
    emmbeding:[
      {
        type: Schema.Types.ObjectId,
        ref: "Conversation",
      },
    ],
  },
  { timestamps: true }
);

let BotBabyModel: mongoose.Model<BotBabyDocument>;

try {
  // Try to retrieve an existing model
  BotBabyModel = mongoose.model<BotBabyDocument>("BotBaby");
} catch (e) {
  // If the model doesn't exist, define it
  BotBabyModel = mongoose.model<BotBabyDocument>("BotBaby", BotBabySchema);
}

export const BotBaby = BotBabyModel;
