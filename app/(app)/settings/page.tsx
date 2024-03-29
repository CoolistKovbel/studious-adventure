import ClientWrapper from "@/app/components/settings/client-wrapper";
import { getSession } from "@/app/lib/actions";
import { grabSpecificBot, grabUserBots } from "@/app/lib/botAction";

const Page = async () => {
  const session = await getSession();
  const userBot = await grabUserBots(session?.userId as string);
  const secretMessage = process.env.SIGNMESSAGE as string;

  let currenUserBot;

  if (session.mainBot) {
    currenUserBot = await grabSpecificBot(session.mainBot);
  }

  return (
    <main className="w-full min-h-screen bg-[#212] flex items-center justify-center">
      {/* Possible client wrapper */}
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
