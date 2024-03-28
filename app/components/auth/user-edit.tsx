"use client";

import { HandleUserUpdate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const UserEdit = () => {
  const [state, dispatch] = useFormState(HandleUserUpdate, undefined);

  const handleUserUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      console.log("UPDATING USER");
      dispatch(formData);
    } catch (error) {
      console.log(error);
    } finally {
      e.currentTarget.reset();
    }
  };

  const handleMetaSignature = async () => {
    try {

      console.log("handle signature")
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full md:w-[60%] h-full bg-[#333]">
      <h2 className="p-2 text-2xl capitalize">edit user account</h2>

      <div className="flex items-center bg-[#111] p-2 justify-between">
        <h2>Sign to login with metamask</h2>
        <button className="bg-[#222] text-yellow-500 p-1 rounded-md" onClick={handleMetaSignature}>Sign with meta account</button>
      </div>

      <div className="flex items-center justify-center w-full h-[90%]">
        <form
          className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md"
          onSubmit={handleUserUpdate}
        >
          <div>
            <label className="block text-white mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
            />
          </div>

          <div>
            <label className="block text-white mb-2" htmlFor="metaAccount">
              metaAccount
            </label>
            <input
              type="text"
              id="metaAccount"
              name="metaAccount"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
            />
          </div>

          <div>
            <label className="block text-white mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-white mb-2" htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Update Settings
          </button>
        </form>

        {state && (
          <p className="text-sm text-gray-500 font-bold text-center">{state}</p>
        )}
      </div>

    </div>
  );
};

export default UserEdit;
