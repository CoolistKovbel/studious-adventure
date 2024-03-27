"use client";

import Link from "next/link";
import { useState } from "react";

const AuthNav = () => {
  const [handleToggle, setHandleToggle] = useState(false);

  return (
    <header className="w-full flex items-center justify-between p-4">
      <h1>
        <Link href="/dashboard">AI Service</Link>
      </h1>

      <nav className="relative">

        <span onClick={() => setHandleToggle((prev) => !prev)} className="p-2 bg-[#222] rounded-md">
          lyubTHEBEST1
        </span>

        {handleToggle && (
          <ul className="absolute w-[200px] top-[30px] right-0 bg-[#333] border-2">
            <li className="p-2 bg-[#111] hover:bg-[#333]">
              <Link href="/service">Service</Link>
            </li>
            <li className="p-2 bg-[#111] hover:bg-[#333]">
              <Link href="/sessions">Session</Link>
            </li>
            <li className="p-2 bg-[#111] hover:bg-[#333]">
              <Link href="/faucet">Faucet</Link>
            </li>
            <li className="p-2 bg-[#111] hover:bg-[#333]">
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        )}
      </nav>

    </header>
  );
};

export default AuthNav;
