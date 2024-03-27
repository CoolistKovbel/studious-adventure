import ClientWrapper from "@/app/components/settings/client-wrapper";
import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#222] flex items-center justify-center">
      {/* Possible client wrapper */}
      <ClientWrapper />
    </main>
  );
};

export default Page;
