import Image from "next/image";
import React from "react";

const Page = () => {
  const currentBot = true;
  const currentSession = true;

  const currentSessionType = "CHAT"

  return (
    <main className="w-full min-h-screen bg-[#222] flex p-2">
      {currentBot ? (
        <section className="w-full bg-[#111] flex items-start flex-col gap-4 ">
          {/* Current bot */}
          <header className="w-full p-4">
            <h2>Current Bot: </h2>

            <div className="flex items-center justify-between">
              <div className="w-[100px] h-[100px] relative">
                <Image src="/bbS.png" alt="sad ai" fill />
              </div>

              <div className="w-[50%]">
                <h3 className="text-xl font-bold">sadbot</h3>
                <p className="text-sm text-gray-500">
                  trys to make me happy even though we both feel sad
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <button className="p-1 font-bold bg-[#222] rounded-md text-md">
                    new session
                  </button>

                  <form>
                    <select
                      name="recentSession"
                      id="recentSession"
                      className="p-1 rounded-md bg-[#222] font-bold p-1"
                    >
                      <option value="">recent sessions</option>
                      <option value="">recent sessions</option>
                      <option value="">recent sessions</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </header>

          {currentSession ? (
            <article className="w-full bg-[#999] p-4">
              <header className="flex flex-row-reverse w-full items-center justify-center">
                <div className="w-[100px] h-[100px] relative">
                  <Image src="/forged.png" alt="sad session" fill />
                </div>

                <div className="w-[80%]">
                  <h3 className="text-xl font-bold">Session sad</h3>
                  <p className="text-sm text-gray-500">
                    after every conversation give me a good sad quiote
                  </p>
                  <p className="bg-[#000] rounded-md  inline-block p-1">
                    type:{" "}
                    <span className="font-bold  bg-orange-500 p-1 rounded-md">
                      CHAT
                    </span>
                  </p>
                </div>
              </header>
              {/* content */}
              
              {
                currentSessionType === "CHAT" && (
                  <div>
                    {/* Message chat */}
                    {/* input chat */}
                  </div>
                )
              }


            </article>
          ) : (
            <article className="w-full bg-[#999] p-4 flex items-center justify-center flex-col gap-4">
              <h2 className="text-2xl font-bold capitalize">
                No session need to start one?
              </h2>
              <button className="bg-[#111] font-bold p-1 rounded-md">
                Start one now
              </button>
            </article>
          )}
        </section>
      ) : (
        <section className="w-full bg-[#111] h-[400px] flex items-center flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold capitalize">
            Need to create session or bot
          </h2>
          <button className="bg-[#222] font-bold uppercase p-2 rounded-md drop-shadow-lg hover:bg-[#333]">
            start now
          </button>
        </section>
      )}
    </main>
  );
};

export default Page;
