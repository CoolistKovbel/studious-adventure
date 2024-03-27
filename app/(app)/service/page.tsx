import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#222] flex items-center justify-center">
      <div className="w-[70%] h-[300px] mx-auto p-3 bg-[#111] rounded-md drop-shadow-lg flex items-center justify-around flex-col gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">AI Service</h1>

        <form className="flex items-center justify-center gap-4 w-full">
          <textarea
            placeholder="search"
            className="p-1 bg-[#222] text-white overflow-auto resize-none w-[60%] rounded-md"
          ></textarea>
          <button className="bg-[#222] font-bold p-2 rounded-md drop-shadow-lg">
            search
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;
