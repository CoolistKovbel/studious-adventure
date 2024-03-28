"use client";

import { useEffect, useState } from "react";
import CreateAIModel from "../components/modals/CreateAiModel";




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
    </>
  );
};
