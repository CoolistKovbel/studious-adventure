"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ClientWrapper = () => {
  const [botId, setBotId] = useState("");

  const handleLinkClick = (type: string) => {
    if (type === "settings") {
      if (typeof window !== "undefined") {
        const newUrl = `/settings`;
        window.history.pushState({}, "", newUrl);
        setBotId("");
      }
    } else {
      if (typeof window !== "undefined") {
        const newUrl = `/settings?type=${type}`;
        window.history.pushState({}, "", newUrl);
        setBotId(type);
      }
    }
  };

  useEffect(() => {
    const gg = () => {
      if (typeof window !== "undefined") {
        const pathname = window.location.href;
        const burl = new URL(pathname);
        const bbotId = burl.searchParams.get("type") as string;
        setBotId(bbotId);
      }
    };
    gg();
  }, [botId]);

  return (
    <div className="h-[720px] w-full overflow-auto flex items-center justify-center gap-4 flex-col md:flex-row">
      {/* Side bar */}
      <div className="w-full md:w-[25%] h-full bg-[#333] ">
        <h2 className="text-xl font-bold p-2 underline">lyubTHEBEST1</h2>
        <div className="flex items-center flex-col">
          <button
            onClick={() => handleLinkClick("settings")}
            className="bg-[#111] hover:bg-[#222] p-2 w-full text-center text-md"
          >
            profile
          </button>
          <button
            onClick={() => handleLinkClick("edit")}
            className="bg-[#111] hover:bg-[#222] p-2 w-full text-center text-md"
          >
            edit
          </button>
          <button
            onClick={() => handleLinkClick("bot")}
            className="bg-[#111] hover:bg-[#222] p-2 w-full text-center text-md"
          >
            bot
          </button>
        </div>
      </div>

      {/* Content */}

      {!botId && (
        <div className="w-full md:w-[60%] h-full bg-[#333]">
          <div className="flex">
            <div className="bg-[#113] p-3 w-[300px] flex items-center justify-center flex-col gap-4 drop-shadow-lg">
              <div className="w-[100px] h-[100px] relative">
                <Image src="/TestConflict.png" alt="user profile image" fill />
              </div>

              <h2 className="text-xl font-bold">lyubTHEBEST1</h2>
              <p>Member: USER</p>
            </div>

            <div className="flex-grow bg-[#111] border-2 flex items-center justify-center flex-col gap-3">
              <h2 className="text-xl font-bold">Need a bot?</h2>
              <button className="bg-[#333] hover:bg-[#222] font-bold p-1 rounded-md">
                Create New
              </button>
            </div>
          </div>

          <div className="bg-[#111] p-2">
            <div className="flex items-center justify-between">
              <div className="w-[100px] h-[100px] relative">
                <Image src="/bbS.png" alt="fucking stupid" fill />
              </div>

              <div>
                <h2 className="text-xl font-bold">Botty</h2>
                <p className="text-sm text-gray-500">
                  Be able to explain and translate context in simplicit terms
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-around">
              <button className="p-2 bg-[#222] font-bold rounded-md">
                Get back to session
              </button>
              <button className="p-2 bg-[#222] font-bold rounded-md">
                Create new session
              </button>
            </div>
          </div>
        </div>
      )}

      {botId === "edit" && (
        <div className="w-full md:w-[60%] h-full bg-[#333]">
          <h2>edit user</h2>
          <form className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md">
            <div>
              <label className="block text-white mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              />
            </div>

            <div>
              <label className="block text-white mb-2" htmlFor="metaAccount">
                metaAccount
              </label>
              <input
                type="text"
                id="metaAccount"
                name="metaAccount"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              />
            </div>

            <div>
              <label className="block text-white mb-2" htmlFor="image">
                Image URL
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-white mb-2" htmlFor="password">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Update Settings
            </button>
          </form>
        </div>
      )}

      {botId === "bot" && (
        <div className="w-full md:w-[60%] h-full bg-[#333]">
          <h2>edit bot</h2>
        </div>
      )}
    </div>
  );
};

export default ClientWrapper;
