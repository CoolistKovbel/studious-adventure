"use client";

import React, { useEffect, useState } from "react";
import { getEthereumAccount } from "@/app/lib/web3";
import { metaLogin } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";

interface LoginMetaFormProps {
  msg: string;
}

const LoginMetaForm = ({ msg }: LoginMetaFormProps) => {
  const router = useRouter();
  const [metaAccount, setMetaAccount] = useState<any>("");
  const [state, dispatch] = useFormState(metaLogin, undefined);
  const mess = msg as string;

  const signInWithMetamask = async () => {
    if (typeof window !== "undefined") {
      const formData = new FormData();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(mess);

      try {
        console.log("working");
        formData.append("signature", signature);
        dispatch(formData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const xx = async () => {
      const ethAccount = await getEthereumAccount();
      setMetaAccount(ethAccount);
    };

    if (state?.startsWith("success")) router.push("/dashboard");

    xx();
  }, [state]);

  return (
    <>
      {metaAccount.length > 0 ? (
        <div className="absolute top-[-60px] right-0 w-[230px] bg-[#222] border-2 p-2 flex gap-2 items-center justify-center flex-col drop-shadow-lg">
          <h2 className="text-[13px] font-bold uppercase">
            🦊 Oh you have metamask ꃕ{" "}
          </h2>
          {state && <p>{state}</p>}
          <button
            className="bg-[#111] p-2 font-bold text-[12px] uppercase rounded-md drop-shadow-lg"
            onClick={signInWithMetamask}
          >
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
