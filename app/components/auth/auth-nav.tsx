"use client";

import Link from "next/link";
import { useState } from "react";
import LogoutButton from "./logoutbutton";

interface AuthNavProps{
  currrentSession: any;
}

const AuthNav = ({currrentSession}:AuthNavProps) => {
  const [handleToggle, setHandleToggle] = useState(false);
  const currentSess = JSON.parse(currrentSession)
  

  return (
    <header className="w-full flex items-center justify-between p-4 bg-[#000]">

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

    </header>
  );
};

export default AuthNav;
