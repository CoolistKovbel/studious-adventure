"use client";

import Link from "next/link";
import { useState } from "react";

const Droppings = () => {
  const [handleToggle, setHandleToggle] = useState(false);
  return (
    <div className="relative">
      <h2 onClick={() => setHandleToggle((prev) => !prev)}>help ⚡️</h2>

      {handleToggle && (
        <ul className="absolute w-[200px] top-[30px] right-0 bg-[#333] border-2 z-[60]">
      
          <li className="p-2 bg-[#111] hover:bg-[#333]">
            <Link
              href="/login"
              
            >
              Login
            </Link>
          </li>

          <li className="p-2 bg-[#111] hover:bg-[#333]">
            <Link
              href="/register"
              
            >
              Register
            </Link>
          </li>

        </ul>
      )}
    </div>
  );
};

export default Droppings;
