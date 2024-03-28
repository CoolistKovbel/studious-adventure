"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import UserEdit from "../auth/user-edit";
import { useModal } from "@/app/hooks/use-modal-store";

interface ClientWrapperProps {
  currentUser: any;
}

const ClientWrapper = ({ currentUser }: ClientWrapperProps) => {
  const user = JSON.parse(currentUser);
  const { onOpen } = useModal();

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

  const handleNewBot = async () =>{
    try {
      onOpen("createAI")
    } catch (error) {
      console.log(error)
    }
  }


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
        <h2 className="text-xl font-bold p-2 underline">{user.username}</h2>
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
              {user.image || user.image.length > 0 ? (
                <div className="w-[100px] h-[100px] relative">
                  <Image
                    src={user.image}
                    alt="user profile image"
                    fill
                  />
                </div>
              ) : (
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <h2 className="text-xl font-bold text-center">
                    Sorry no image
                  </h2>
                </div>
              )}

              <h2 className="text-xl font-bold">{user.username}</h2>
              <p>Member: {user.role}</p>
            </div>

            <div className="flex-grow bg-[#111] border-2 flex items-center justify-center flex-col gap-3">
              <h2 className="text-xl font-bold">Need a bot?</h2>
              <button className="bg-[#333] hover:bg-[#222] font-bold p-1 rounded-md" onClick={handleNewBot}>
                Create New
              </button>
            </div>
          </div>

          {user.mainBot && (
            <div className="bg-[#111] p-2">
              <div className="flex items-center justify-between w-[80%] mx-auto">
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

              <div className="w-[40%] mx-auto flex items-center justify-around">
                <button className="p-2 bg-[#222] font-bold rounded-md">
                  Get back to session
                </button>
                <button className="p-2 bg-[#222] font-bold rounded-md">
                  Create new session
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {botId === "edit" && (
        <UserEdit />
      )}

      {botId === "bot" && (
        <div className="w-full md:w-[60%] h-full bg-[#333]">
          <h2>edit bot</h2>


          <div className="w-full bg-[#222] h-[98%] drop-shadow-lg flex justify-between p-4">
        {/* Bot select */}
        <div className="bg-[#111] font-bold w-[20%] p-4">
          <h2>select bot</h2>
        </div>

        {/* Bot description */}
        <div className="bg-[#111] p-2 w-[70%]">
          <h2>bot description</h2>
        </div>

      </div>


        </div>
      )}
    </div>
  );
};

export default ClientWrapper;
