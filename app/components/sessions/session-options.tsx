"use client";

import CreateToggle from "../create-toggle";

interface SessionOptionsProps {
  hasBot: any;
  botSessions: any;
}

const SessionOptions = ({ hasBot, botSessions }: SessionOptionsProps) => {

  const recentSessions = JSON.parse(hasBot)
  const botSession = JSON.parse(botSessions)

  console.log(botSession, "in session")


  return (
    <div className="flex items-center gap-3 mt-4">
      
      <CreateToggle hasBot={hasBot} />

    {
      recentSessions[0].botSession.length > 0 && (
        <form>
          <select
            name="recentSession"
            id="recentSession"
            className="p-1 rounded-md bg-[#222] font-bold p-1"
          >
            <option value="">Choose session</option>
            {
              botSession.map((item:any) => (
                <option key={crypto.randomUUID()} value={item._id as string}>
                  {item.name}
                </option>
              ))
            }
          </select>
        </form>
      )
    }
    
    </div>
  );
};

export default SessionOptions;
