"use client"

import React, { useEffect } from 'react'
import { getEthereumAccount } from "@/app/lib/web3";


const LoginMetaForm = () => {
    const ethereum = typeof window !== 'undefined' ? window.ethereum : null;



    useEffect(() => {
        const xx = async () => {
            const ethAccount = await getEthereumAccount()

            console.log(ethAccount, "nmothing")
        }
        xx()
    },[])
  return (
    <div className="absolute top-[-60px] right-0 w-[230px] bg-[#222] border-2 p-2 flex gap-2 items-center justify-center flex-col drop-shadow-lg">
        <h2 className="text-[13px] font-bold uppercase">🦊 Oh you have metamask ꃕ </h2>
        <button className="bg-[#111] p-2 font-bold text-[12px] uppercase rounded-md drop-shadow-lg">Sign in</button>
    </div>
  )
}

export default LoginMetaForm