"use client";

import { login } from "@/app/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [state, dispatch] = useFormState(login, undefined);

  const handleLoginSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      console.log("signing in user");
      dispatch(formData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (state?.startsWith("success")) router.push("/dashboard");
  }, [state, router]);

  return (
    <div className="flex items-center justify-around">
      <form
        className="flex items-center flex-col justify-center gap-4"
        onSubmit={handleLoginSubmition}
      >
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
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400  text-black"
          />
        </label>

        {isLoading || state && (<p>Loading ....</p> || <p>{state}</p>)}

        <button className="bg-[#222] text-white px-6 py-2 rounded-md hover:bg-[#333] drop-shadow-lg">
          Login
        </button>
      </form>

      <div className="flex items-center flex-col justify-center mt-10">
        <p className="text-xl mb-4 font-bold">
          Do you need to register instead?
        </p>
        <Link
          href="/register"
          className="bg-[#222] text-white px-6 py-2 rounded-md hover:bg-[#333] drop-shadow-lg"
        >
          Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
