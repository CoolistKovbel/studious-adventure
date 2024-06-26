"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import UserEdit from "../auth/user-edit";
import { useModal } from "@/app/hooks/use-modal-store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CreateToggle from "../create-toggle";
import { handleBotUpdate, handleSessionUpdate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

interface ClientWrapperProps {
  currentUser: any;
  currenUserBot: any;
  userBots: any;
  msg: string;
}

const ClientWrapper = ({
  currentUser,
  userBots,
  currenUserBot,
  msg,
}: ClientWrapperProps) => {
  //  used to update baby bot session
  const [state, dispatch] = useFormState(handleSessionUpdate, undefined);

  // Variable set bot id
  const [botId, setBotId] = useState("");
  const selectedBotRef = useRef<any>(null);

  const searchParams = useSearchParams();

  const { onOpen } = useModal();

  const mess = msg as string;
  // current uesr session
  const user = JSON.parse(currentUser);
  // All the current user bots
  const bots = JSON.parse(userBots);

  const currentBot = !!currenUserBot ? JSON.parse(currenUserBot) : [];

  // Give us current bot sessions
  const botSessions =
    currenUserBot === undefined || currenUserBot.length > 0
      ? currentBot[0]?.botSession
      : [];

  // handles setting navigation
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

  // Creates a new bot
  const handleNewBot = async () => {
    try {
      onOpen("createAI");
    } catch (error) {
      console.log(error);
    }
  };

  // handles botSession update
  const handleViewSessions = async (sessionID: string) => {
    try {
      await dispatch(sessionID as string);
    } catch (error) {
      console.log(error);
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

    const currentBot = searchParams.get("currentBot");
    selectedBotRef.current = currentBot;

    const iggy = async () => {
      try {
        console.log("Current bot =", selectedBotRef.current);
        await handleBotUpdate(undefined, currentBot as string);
      } catch (error) {
        console.log(error);
      }
    };

    iggy();
  }, [botId, searchParams]);

  console.log(bots, "bot sesssoins");
  console.log(currentBot, "de current bot sesssoins");

  return (
    <div className="h-[740px] w-full flex items-center justify-center gap-4 flex-col md:flex-row">
      {/* Side bar */}
      <div className="w-full md:w-[20%] h-full bg-[#333] ">
        <h2 className="text-xl font-bold p-2 underline">
          Hello, {user.username}
        </h2>

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
              {user.userImage ? (
                <div className="w-[100px] h-[100px] relative">
                  <Image src={user.userImage} alt="user profile image" fill />
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
              <button
                className="bg-[#333] hover:bg-[#222] font-bold p-1 rounded-md"
                onClick={handleNewBot}
              >
                Create New
              </button>
            </div>
          </div>

          {user.mainBot && (
            <div className="bg-[#111] p-10">
              <div className="flex items-center justify-between w-[80%] mx-auto">
                <div className="w-[100px] h-[100px] relative">
                  <Image src={bots[0].image} alt="fucking stupid" fill />
                </div>

                <div>
                  <h2 className="text-xl font-bold">{bots[0].name}</h2>
                  <p className="text-sm text-gray-500">{bots[0].mainPurpose}</p>
                </div>
              </div>

              <div className="w-[40%] mx-auto flex items-center justify-around">
                <Link
                  href="/sessions"
                  className="p-2 bg-[#222] font-bold rounded-md"
                >
                  Get back to session
                </Link>

                <CreateToggle hasBot={bots[0]} />
              </div>
            </div>
          )}

          <div>
            <h2>Membership</h2>
          </div>
        </div>
      )}

      {botId === "edit" && <UserEdit msg={mess} deUser={user} />}

      {botId === "bot" && (
        <div className="w-full md:w-[60%] h-fit bg-[#333] ">

          <h2 className="p-2 text-2xl font-bold">Edit Bot</h2>

          <div className="w-full bg-[#222] h-[90%] drop-shadow-lg p-4">
            {bots?.length > 0 ? (
              <div className="flex justify-between">
                {/* Bot select */}
                <div className="bg-[#111] font-bold w-[20%] flex flex-col items-center justify-around p-4">
                  <div className="h-[80%] overflow-auto">
                    {bots.map((item: any) => (
                      <Link
                        key={crypto.randomUUID()}
                        className="bg-[#131] p-2 block hover:bg-[#222]  mb-2 rounded-md"
                        href={`/settings/?type=bot&currentBot=${item._id}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <CreateToggle hasBot={bots} />
                </div>

                {currenUserBot === undefined ? (
                  <div className="bg-[#111] p-2 w-[70%] h-[80%] p-10">
                    <h2>Seems like you need to select a bot</h2>
                  </div>
                ) : (
                  <div className="bg-[#111] p-2 w-[70%] h-[80%] p-10">

                    <header className="flex items-center justify-between w-[80%] mx-auto">
                      <div className="w-[70%]">
                        <h2 className="text-2xl font-bold">
                          {currentBot[0]?.name}
                        </h2>
                        <p className="text-md text-gray-500">
                          {currentBot[0]?.mainPurpose}
                        </p>
                      </div>

                      <div className="w-[200px] h-[200px] relative">
                        <Image
                          src={currentBot[0]?.image}
                          alt="bot image"
                          fill
                        />
                      </div>
                    </header>

                    <div className="p-4 ">
                      {/* bot Stats */}
                      <div>
                        <h3 className="text-xl font-bold">Stats</h3>
                        <div className="flex items-center justify-around w-full p-4">
                          <p className="bg-[#000] p-2 rounded-md ">
                            Total Sessions:{" "}
                            <span className="p-1 bg-yellow-500 text-black rounded-sm">
                              {currentBot[0]?.botSession.length}
                            </span>
                          </p>
                          <p className="bg-[#000] p-2 rounded-md ">
                            Total Searches:{" "}
                            <span className="p-1 bg-yellow-500 text-black rounded-sm">
                              {currentBot[0]?.forgeSearch.length}
                            </span>
                          </p>
                          <p className="bg-[#000] p-2 rounded-md ">
                            Total Image Generated:{" "}
                            <span className="p-1 bg-yellow-500 text-black rounded-sm">
                              12
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Bot sessions */}
                      <div className="w-full h-[400px] bg-[#555] p-4">
                        {currentBot[0]?.botSession.length > 0 ? (
                          <div className="w-full h-full">
                            <h3 className="text-xl font-bold mb-2">
                              Recent sessions
                            </h3>

                            <div className="w-full h-[90%] bg-[#111] p-4 overflow-auto flex flex-col gap-2 ">
                              {botSessions.map((item: any) => (
                                <div
                                  key={crypto.randomUUID()}
                                  className="flex items-center justify-around bg-[#444] relative"
                                >
                                  <div className="flex items-center flex-col justify-center w-[20%]">
                                    <Image
                                      src={item.image}
                                      alt="hate my life"
                                      width={100}
                                      height={100}
                                    />
                                    <h2 className="font-bold text-xl">
                                      {item.name}
                                    </h2>
                                  </div>

                                  <p className="w-[80%] text-sm">
                                    {item.mainPurpose}
                                  </p>

                                  <Link
                                    href="/sessions"
                                    className="absolute text-sm p-1 bg-[#222] font-bold  bottom-0 right-0 hover:bg-[#111] rounded-sm"
                                    onClick={() => handleViewSessions(item._id)}
                                  >
                                    view session
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <h2 className="text-2xl font-bold">
                              sorry no sessions?
                            </h2>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

                {/* Bot description */}
              </div>
            ) : (
              <div className="p-2 w-full">
                <h2>No bot?</h2>
                <CreateToggle hasBot={bots} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientWrapper;
