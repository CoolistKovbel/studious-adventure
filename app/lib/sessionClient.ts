import { SessionOptions } from "iron-session";

export interface SessionData {
    isLoggedIn?: boolean;
    isPro?: boolean;
    membership?: boolean;
    userId?: string;
    username?: string;
    email?: string;
    userImage?: string;
    mainBot?: string;
    currentBotSession?: string;
    metaAccount?: string;
    metaSignSignature?: string;
    tokens?: Number;
    count?: Number;
    role?: string;
  }

export const defaultSession:SessionData =  {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET!,
    cookieName: "ai-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV  === "production"
    }
}  