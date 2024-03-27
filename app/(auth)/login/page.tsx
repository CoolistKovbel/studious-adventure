
import LoginMetaForm from "@/app/components/auth/login-meta-form";
import Link from "next/link";
import React from "react";


const Page = async () => {




  return (
    <section className="w-[80%] h-[90%] p-8 rounded-lg border-2 border-gray-800 drop-shadow-lg relative">

      <form className="flex items-center flex-col justify-center gap-4">
      
        <label htmlFor="email">
          <span className="block text-gray-400 text-sm mb-2">email:</span>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            id="email "
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </label>

        <label htmlFor="password">
          <span className="block text-gray-400 text-sm mb-2">Password</span>
          <input type="password" name="password" id="password" className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black" />
        </label>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 float-right">Login</button>
      
      </form>

      <div className="flex items-center flex-col justify-center mt-10">
        <p>Do you need to register instead?</p>
        <Link href="/register">Register here</Link>
      </div>


    
    {/* Client MEta */}
    <LoginMetaForm />

    </section>
  );
};

export default Page;
