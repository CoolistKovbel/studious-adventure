"use client";

import React, { useEffect, useState } from "react";
import { getEthereumAccount } from "@/app/lib/web3";

const LoginMetaForm = () => {
  const [metaAccount, setMetaAccount] = useState<any>("");

  const ethereum = typeof window !== "undefined" ? window.ethereum : null;


  const signInWithMetamask = async () => {
    try {
        console.log("working")
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const xx = async () => {
      const ethAccount = await getEthereumAccount();

      console.log(ethAccount, "nmothing");
      setMetaAccount(ethAccount);
    };
    xx();
  }, []);


  return (
    <>
      {metaAccount.length > 0 ? (
        <div className="absolute top-[-60px] right-0 w-[230px] bg-[#222] border-2 p-2 flex gap-2 items-center justify-center flex-col drop-shadow-lg">
          <h2 className="text-[13px] font-bold uppercase">
            🦊 Oh you have metamask ꃕ{" "}
          </h2>
          <button className="bg-[#111] p-2 font-bold text-[12px] uppercase rounded-md drop-shadow-lg" onClick={signInWithMetamask}>
            Sign in
          </button>
        </div>
      ) : (
        <div className="absolute top-[-40px] right-0 w-[230px] bg-[#222] border-2 p-2 flex gap-2 items-center justify-center flex-col drop-shadow-lg">
          <h2 className="text-[12px] font-bold uppercase">
            🦊 Setup Metamask to sign in
          </h2>
        </div>
      )}
    </>
  );
};

export default LoginMetaForm;
