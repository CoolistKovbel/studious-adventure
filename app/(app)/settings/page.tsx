"use server";

import ClientWrapper from "@/app/components/settings/client-wrapper";
import { getSession } from "@/app/lib/actions";
import { grabSpecificBot, grabUserBots } from "@/app/lib/botAction";

const Page = async () => {

  // ccurent user
  const session = await getSession();

  // Grabbing all the bots
  const userBot = await grabUserBots(session?.userId as string);

  // using the secre meesage
  const secretMessage = process.env.SIGNMESSAGE as string;

  // Create variable to get specific bot
  let currenUserBot: any;

  if (session.mainBot) {
    currenUserBot = await grabSpecificBot(session.mainBot);
  }

  // Plan a
  // Create a function that will update once a botid is passed pop drill

  const updateMainBot = async (currentBot: string) => {
    try {
      const currenUserBot = await grabSpecificBot(currentBot);
      const bot = JSON.stringify(currenUserBot);
      return bot;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currenUserBot, "Current bot")
  console.log("user sessions", userBot)
  console.log("user session", session)


  return (
    <main className="w-full min-h-screen bg-[#212] flex items-center justify-center">
      <ClientWrapper
        currentUser={JSON.stringify(session)}
        userBots={JSON.stringify(userBot)}
        currenUserBot={JSON.stringify(currenUserBot)}
        msg={secretMessage as string}
      />
    </main>
  );
};

export default Page;
