"use client";

import { useFormState } from "react-dom";
import CreateToggle from "../create-toggle";
import { handleSessionUpdate } from "@/app/lib/actions";

interface SessionOptionsProps {
  hasBot: any;
  botSessions: any;
}

const SessionOptions = ({ hasBot, botSessions }: SessionOptionsProps) => {
  const recentSessions = JSON.parse(hasBot);
  const botSession = JSON.parse(botSessions);

  const [state, dispatch] = useFormState(handleSessionUpdate, undefined);

  const handleSessionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSessionId = event.target.value;
    try {
      dispatch(selectedSessionId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-4">
      <CreateToggle hasBot={hasBot} />

      {recentSessions[0].botSession.length > 0 && (
        <select
          name="recentSession"
          id="recentSession"
          className="p-1 rounded-md bg-[#222] font-bold p-1"
          onChange={handleSessionChange}
        >
          <option value="">Choose session</option>
          {botSession.map((item: any) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SessionOptions;
