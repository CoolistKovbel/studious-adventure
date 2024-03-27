import Image from "next/image";
import React from "react";

const Page = () => {
  const currentBot = true;
  const currentSession = true;

  const currentSessionType = "SCRAPE";

  const messageData = [
    {
      question: "what is life",
      answer: "i dont knw you tell me",
      from: {
        username: "lyub12",
        image: "/TestConflict.png",
      },
      to: {
        name: "deBotlyub12",
        image: "/moon.png",
      },
    },
    {
      question: "what is life",
      answer: "i dont knw you tell me",
      from: {
        username: "lyub12",
        image: "/TestConflict.png",
      },
      to: {
        name: "deBotlyub12",
        image: "/moon.png",
      },
    },
    {
      question: "what is life",
      answer: "i dont knw you tell me",
      from: {
        username: "lyub12",
        image: "/TestConflict.png",
      },
      to: {
        name: "deBotlyub12",
        image: "/moon.png",
      },
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#222] flex p-2">
      {currentBot ? (
        <section className="w-full bg-[#111] flex items-start flex-col gap-4 ">
          <header className="w-full p-4">
            <h2>Current Bot: </h2>

            {/* Current bot */}
            <div className="flex items-center justify-between">
              <div className="w-[100px] h-[100px] relative">
                <Image src="/bbS.png" alt="sad ai" fill />
              </div>

              <div className="w-[50%]">
                <h3 className="text-xl font-bold">sadbot</h3>
                <p className="text-sm text-gray-500">
                  trys to make me happy even though we both feel sad
                </p>

                {/* change session */}
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
            <article className="w-full bg-[#999]">
              {/* Current session */}
              <header className="flex flex-row-reverse w-full items-center justify-center p-4">
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
              {/* CHAT CLIENT */}
              {currentSessionType === "CHAT" && (
                <div className="p-4">
                  {/* Message chat */}
                  <div className="flex w-full h-[410px] bg-[#222] p-2 flex-col space-y-4 drop-shadow-lg  mb-2 overflow-auto">
                    {messageData.length !== 0 ? (
                      <div>
                        {messageData.map((item: any) => (
                          <div key={crypto.randomUUID()}>
                            {/* Sender 1 message */}
                            <div className="flex items-end justify-end w-full">
                              <div className="bg-[#000] text-white py-2 px-4 rounded-lg min-w-[30%] max-w-[60%] self-end">
                                <div className="flex justify-between">
                                  <p className="text-sm font-bold">
                                    {item.from.username as string}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    10:00 AM
                                  </p>
                                </div>

                                <p className="text-base">{item.question}</p>
                              </div>

                              <Image
                                src={item.from.image}
                                alt="Avatar 1"
                                width={80}
                                height={80}
                                className="rounded-full ml-2"
                              />
                            </div>

                            {/* Sender 2 message */}
                            <div className="flex items-end  w-full">
                              <Image
                                src={item.to.image}
                                alt="Avatar 2"
                                width={80}
                                height={80}
                                className="rounded-full mr-2"
                              />
                              <div className="bg-white text-black py-2 px-4 rounded-lg min-w-[30%] max-w-[60%]">
                                <div className="flex justify-between">
                                  <p className="text-sm font-bold">
                                    {item.to.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    10:05 AM
                                  </p>
                                </div>
                                <p className="text-base">{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center flex-col justify-center">
                        <h2>no chat please chat to make conversation</h2>
                      </div>
                    )}
                  </div>

                  {/* input chat */}
                  <form>
                    <textarea
                      name="userQuery"
                      id="userQuery"
                      className="w-full h-full bg-transparent border border-white rounded-md p-2 focus:outline-none resize-none"
                      placeholder="Type your message..."
                    ></textarea>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-md mt-2">
                      submit
                    </button>
                  </form>
                </div>
              )}

              {/* PHOTO CLIENT */}
              {currentSessionType === "PHOTO" && (
                <div className="bg-[#222] p-4">
                  <h2>Photo Client</h2>

                  {/* Single photo */}
                  <div className="mb-5">
                    <header className="mb-4">
                      <h3 className="text-xl font-bold">Single HD Image Gen</h3>
                      <p className="text-md text-gray-500">
                        Generate a high quality image suitable for any type of
                        event
                      </p>
                    </header>

                    <div className="flex items-center justify-around">
                      <form className="flex items-center flex-col gap-3 w-[40%]">
                        <input
                          type="text"
                          placeholder="enter description of an image"
                          id="userImageDescription"
                          name="userImageDescription"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        />

                        <select
                          name="quality"
                          id="quality"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        >
                          <option value="">Choose quality</option>
                          <option value="hd">HD</option>
                          <option value="standard">standard</option>
                        </select>

                        <select
                          name="style"
                          id="style"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        >
                          <option value="">Choose style</option>
                          <option value="vivid">vivid</option>
                          <option value="natural">natural</option>
                        </select>

                        <select name="sizes" id="sizes">
                          <option value="">Choose size</option>
                          <option value="1024x1024">1024x1024</option>
                          <option value="1792x1024">1792x1024</option>
                          <option value="1024x1792">1024x1792</option>
                        </select>

                        <button className="bg-black text-white font-bold py-2 px-4 rounded-md mt-2">
                          submit
                        </button>
                      </form>

                      {/* Result? */}
                      <div className="w-[300px] h-[300px] bg-[#444] drop-shadow-lg rounded-md"></div>
                    </div>
                  </div>

                  {/* Multiple photo */}
                  <div className="mb-5">
                    <header className="mb-4">
                      <h3 className="text-xl font-bold">
                        Multiple HD Image Gen
                      </h3>
                      <p className="text-md text-gray-500">
                        Generate a high quality image suitable for any type of
                        event
                      </p>
                    </header>

                    <div className="flex items-center justify-around flex-row-reverse">
                      <form className="flex items-center flex-col gap-3 w-[40%]">
                        <input
                          type="text"
                          placeholder="enter description of an image"
                          id="userImageDescription"
                          name="userImageDescription"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        />

                        <select
                          name="quality"
                          id="quality"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        >
                          <option value="">Choose quality</option>
                          <option value="hd">HD</option>
                          <option value="standard">standard</option>
                        </select>

                        <select
                          name="amount"
                          id="amount"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        >
                          <option value="">Choose amount</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>

                        <select
                          name="sizes"
                          id="sizes"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        >
                          <option value="">Choose size</option>
                          <option value="256x256">256x256</option>
                          <option value="512x512">512x512</option>
                          <option value="1024x1024">1024x1024</option>
                        </select>

                        <button className="bg-black text-white font-bold py-2 px-4 rounded-md mt-2">
                          submit
                        </button>
                      </form>

                      {/* Result? */}
                      <div className="w-[300px] h-[300px] bg-[#444] drop-shadow-lg rounded-md"></div>
                    </div>
                  </div>

                  {/* Edit photo */}
                  <div className="mb-5">
                    <header className="mb-4">
                      <h3 className="text-xl font-bold">
                        Multiple HD Image Gen
                      </h3>
                      <p className="text-md text-gray-500">
                        Generate a high quality image suitable for any type of
                        event
                      </p>
                    </header>

                    <div className="flex items-center justify-around ">
                      <form className="flex items-center flex-col gap-3 w-[40%]">
                        <label
                          htmlFor="image"
                          className="flex items-center gap-3 text-sm"
                        >
                          <span className="w-[50%]">Starting Image:</span>
                          <input type="file" id="image" name="image" />
                        </label>

                        <label
                          htmlFor="maskedImage"
                          className="flex items-center gap-3 text-sm"
                        >
                          <span className="w-[50%]">Masked Image:</span>
                          <input
                            type="file"
                            id="maskedImage"
                            name="maskedImage"
                          />
                        </label>

                        <label htmlFor="prompt" className="w-full">
                          <textarea
                            className="w-full h-full bg-transparent border border-white rounded-md p-2 focus:outline-none resize-none"
                            placeholder="enter description of what you want to do"
                          ></textarea>
                        </label>

                        <select
                          name="amount"
                          id="amount"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        >
                          <option value="">Choose amount</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>

                        <select
                          name="sizes"
                          id="sizes"
                          className="w-full bg-[#000] text-gray-500 p-2"
                        >
                          <option value="">Choose size</option>
                          <option value="256x256">256x256</option>
                          <option value="512x512">512x512</option>
                          <option value="1024x1024">1024x1024</option>
                        </select>

                        <button className="bg-black text-white font-bold py-2 px-4 rounded-md mt-2">
                          submit
                        </button>
                      </form>

                      <div className="w-[300px] h-[300px] bg-[#444] drop-shadow-lg rounded-md"></div>
                    </div>
                  </div>
                </div>
              )}

              {currentSessionType === "SCRAPE" && (
                <div className="bg-[#222] p-4">
                  <h2>Scrape Client</h2>
                </div>
              )}
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
