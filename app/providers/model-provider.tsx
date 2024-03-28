"use client";

import { useEffect, useState } from "react";
import CreateAIModel from "../components/modals/CreateAiModel";
import CreateAIModelSession from "../components/modals/CreateAiModelSession";




export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateAIModel />
      <CreateAIModelSession />
    </>
  );
};
