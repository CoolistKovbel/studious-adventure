"use client";

import Link from "next/link";
import { useState } from "react";
import LogoutButton from "./logoutbutton";
import TokenFaucet from "./token-faucet";

interface AuthNavProps{
  currrentSession: any;
}

const AuthNav = ({currrentSession}:AuthNavProps) => {
  const [handleToggle, setHandleToggle] = useState(false);
  const currentSess = JSON.parse(currrentSession)
  

  return (
    <header className="w-full  p-4 bg-[#000]">

      <div className="flex items-center justify-between mb-10">
        <h1>
          <Link href="/dashboard">MindCraft AI</Link>
        </h1>

        <nav className="relative">

          <span onClick={() => setHandleToggle((prev) => !prev)} className="p-2 bg-[#222] rounded-md">
            {currentSess.username}
          </span>

          

          {handleToggle && (
            <ul className="absolute w-[200px] top-[30px] right-0 bg-[#333] border-2 z-[60]">
              <li className="p-2 bg-[#111] hover:bg-[#333]">
                <Link href="/service">Service</Link>
              </li>
              <li className="p-2 bg-[#111] hover:bg-[#333]">
                <Link href="/sessions">Session</Link>
              </li>
              <li className="p-2 bg-[#111] hover:bg-[#333]">
                <Link href="/assistant">Assistant</Link>
              </li>
              <li className="p-2 bg-[#111] hover:bg-[#333]">
                <Link href="/faucet">Faucet</Link>
              </li>
              <li className="p-2 bg-[#111] hover:bg-[#333]">
                <Link href="/settings">Settings</Link>
              </li>
              <li className="p-2 bg-[#111] hover:bg-[#333]">
                <LogoutButton />
              </li>
            </ul>
          )}

        </nav>
      </div>
    
      <div className="flex items-center justify-between w-[300px] float-right">
        <span>tokens: 0</span>
        <span>calls: 0</span>

        <TokenFaucet />

      </div>

      
    </header>
  );
};

export default AuthNav;
