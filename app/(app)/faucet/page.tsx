import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#222] flex items-center justify-center">
      <div className="w-[70%] h-[300px] mx-auto p-1 bg-[#111] rounded-md drop-shadow-lg flex items-center justify-center gap-8 flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-bold">AI Facet</h1>

        <div className="text-center">
          <h3 className="text-2xl font-bold">countdown</h3>
          <h2 className="text-4xl font-bold">04:00:00</h2>
          <p className="text-sm text-gray-500 font-bold">
            Every 4 hours get 50 tokens
          </p>
          <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md mt-2">
            claim now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
