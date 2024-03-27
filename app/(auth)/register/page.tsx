import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="w-[80%] h-[90%] p-8 rounded-lg border-2 border-gray-800 drop-shadow-lg relative">
    <div className="flex items-center justify-around">
      <form className="flex items-center flex-col justify-center gap-4">
        <label htmlFor="email">
          <span className="block text-gray-400 text-sm mb-2">Email:</span>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            id="email "
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </label>

        <label htmlFor="username">
          <span className="block text-gray-400 text-sm mb-2">Username:</span>
          <input
            placeholder="enter username"
            name="username"
            id="username "
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </label>

        <label htmlFor="metaAddress">
          <span className="block text-gray-400 text-sm mb-2">Meta Address:</span>
          <input
            placeholder="enter metaAddress"
            name="metaAddress"
            id="metaAddress "
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </label>

        <label htmlFor="password">
          <span className="block text-gray-400 text-sm mb-2">Password</span>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </label>

        <button className="bg-[#222] text-white px-6 py-2 rounded-md hover:bg-[#333] drop-shadow-lg">
          register
        </button>
      </form>

        <div className="w-[300px] h-[300px] relative bg-[#333]">

        </div>
    </div>

      <div className="flex items-center flex-col justify-center mt-10 drop-shadow-lg">
        <p className="text-xl mb-4 font-bold">
          Do you need to login instead?
        </p>
        <Link
          href="/login"
          className="bg-[#222] text-white px-6 py-2 rounded-md hover:bg-[#333] drop-shadow-lg"
        >
          login here
        </Link>
      </div>

    </section>
  );
};

export default Page;
