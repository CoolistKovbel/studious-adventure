"use client";
import React from "react";
import { useModal } from "../hooks/use-modal-store";

interface CreateToggleProps {
  hasBot?: any;
  botId?: any;
}
 
const CreateToggle = ({ hasBot, botId }: CreateToggleProps) => {
  const { onOpen } = useModal();

  const handleCreateBot = async () => {
    try {
      console.log("Creating bot");
      onOpen("createAI");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateSession = async () => {
    try {
      console.log("Creating session");
      onOpen("createAISession", botId as string);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="bg-[#333] hover:bg-[#222] p-2 font-bold rounded-md drop-shadow-lg"
      onClick={typeof hasBot === "object" ? handleCreateSession : handleCreateBot}
    >
      {typeof hasBot === "object" ? "create session" : "create bot"}
    </button>
  );
};

export default CreateToggle;
