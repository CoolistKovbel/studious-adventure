import ClientWrapper from "@/app/components/settings/client-wrapper";
import { getSession } from "@/app/lib/actions";
import { grabUserBots } from "@/app/lib/botAction";

const Page = async () => {
  const session = await getSession();
  const userBot = await grabUserBots(session?.userId as string);
  
  console.log(session);

  return (
    <main className="w-full min-h-screen bg-[#222] flex items-center justify-center">
      {/* Possible client wrapper */}
      <ClientWrapper
        currentUser={JSON.stringify(session)}
        userBots={JSON.stringify(userBot)}
      />
    </main>
  );
};

export default Page;
