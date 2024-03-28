"use client";

import { Registrar } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const router = useRouter();
  const [state, dispatch] = useFormState(Registrar, undefined);
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setIsLoading(true)

    try {
      console.log("grabbing data");
      dispatch(formData);
    } catch (error) {
      console.log(error);
    } finally {
        setIsLoading(false)
    }
  };

  useEffect(() => {
    if (state?.startsWith("Authentication success")) router.push("/login");
  }, [state, router]);

  return (
    <div className="flex items-center justify-around">
      <form
        className="flex items-center flex-col justify-center gap-4"
        onSubmit={handleRegister}
      >
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
          <span className="block text-gray-400 text-sm mb-2">
            Meta Address:
          </span>
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

        {
            isLoading && (
                <p>Loading please wait....</p>
            )
        }

        <button className="bg-[#222] text-white px-6 py-2 rounded-md hover:bg-[#333] drop-shadow-lg">
          register
        </button>

      </form>

      <div className="w-[300px] h-[300px] relative bg-[#333]"></div>
    </div>
  );
};

export default RegisterForm;
