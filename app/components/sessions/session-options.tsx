"use client";

import CreateToggle from "../create-toggle";

interface SessionOptionsProps {
  hasBot: any;
}

const SessionOptions = ({ hasBot }: SessionOptionsProps) => {

  const recentSessions = JSON.parse(hasBot)

  console.log(recentSessions[0].botSession, "in the sessoins options")
  console.log(Array.isArray(recentSessions[0].botSession), "in the sessoins options")


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
            <option value="">recent sessions</option>
            <option value="">recent sessions</option>
            <option value="">recent sessions</option>
          </select>
        </form>
      )
    }
    
    </div>
  );
};

export default SessionOptions;
