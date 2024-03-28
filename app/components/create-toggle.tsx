"use client";
import React from "react";
import { useModal } from "../hooks/use-modal-store";

interface CreateToggleProps {
  hasBot: any;
  botId?: any;
}

const CreateToggle = ({ hasBot, botId }: CreateToggleProps) => {
  const currentBot = JSON.parse(hasBot);
  const hasBo = Array.isArray(currentBot);

  console.log(Array.isArray(currentBot), "sad life");

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
      className="bg-[#333] hover:bg-[#111] p-2 font-bold"
      onClick={hasBo ? handleCreateSession : handleCreateBot}
    >
      {hasBo ? "create session" : "create bot"}
    </button>
  );
};

export default CreateToggle;
