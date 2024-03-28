import RegisterForm from "@/app/components/auth/register-form";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="w-[80%] h-[90%] p-8 rounded-lg border-2 border-gray-800 drop-shadow-lg relative">
      <h1 className="text-4xl mb-4 font-bold capitalize">Register now</h1>

      <RegisterForm />

      <div className="flex items-center flex-col justify-center mt-10 drop-shadow-lg">
        <p className="text-xl mb-4 font-bold">Do you need to login instead?</p>
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
