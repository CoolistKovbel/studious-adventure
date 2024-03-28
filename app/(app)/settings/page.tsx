import ClientWrapper from "@/app/components/settings/client-wrapper";
import { getSession } from "@/app/lib/actions";


const Page = async () => {
  
  const session = await getSession()

  return (
    <main className="w-full min-h-screen bg-[#222] flex items-center justify-center">
      {/* Possible client wrapper */}
      <ClientWrapper currentUser={JSON.stringify(session)} />
    </main>
  );
};

export default Page;
