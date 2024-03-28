"use client";

import { useModal } from "@/app/hooks/use-modal-store";
import { handleSessionCreate } from "@/app/lib/actions";
import Image from "next/image";
import { useFormState } from "react-dom";


const CreateAIModelSession = () => {
  const { isOpen, onClose, type, signature } = useModal();

  const urlParts = window.location.href.split("/");
  const desiredUrl = "/" + urlParts.slice(3).join("/");

  const isModalOpen = isOpen && type === "createAISession";

  const [state, dispatch] = useFormState(handleSessionCreate, undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("sessoinUrl", desiredUrl);
    formData.append("botId", signature as string)

    try {
      dispatch(formData);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-[#222] rounded-md p-4 w-[300px] md:w-[600px] overflow-auto h-[50%]">
        {/* close button */}
        <button className="absolute top-10 right-10" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#f4f4f4]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full h-full text-white flex justify-between flex-col ">
          <h2 className="text-2xl md:text-4xl text-center font-bold">
            Create AI Session
          </h2>

          <div>
            <div className="w-[240px] h-[240px] mx-auto relative">
              <Image src="/bbS.png" alt="future minting piece" fill />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-lg "
          >
            <label htmlFor="botName" className="text-white text-lg mb-2">
              Bot Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter bot name"
              name="botName"
              id="botName"
            />

            <label htmlFor="mainPurpose" className="text-white text-lg mb-2">
              Bot Purpose
            </label>
            <textarea
              placeholder="Enter bot purpose"
              name="mainPurpose"
              id="mainPurpose"
              className="w-full h-32 bg-gray-800 text-white rounded-md py-2 px-4 mb-4 resize-none focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>

            <label htmlFor="image" className="text-white text-lg mb-2">
              Bot Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300"
            />

            <label htmlFor="botType" className="text-white text-lg mb-2">
              Bot Type
            </label>
            <select name="botType" id="botType" className="w-full bg-gray-800 text-white rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-300">
              <option value="----">TYPE</option>
              <option value="CHAT">CHAT</option>
              <option value="PHOTO">PHOTO</option>
              <option value="SCRAPE">SCRAPE</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-3 px-6 font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>

            {state && (
              <div className="text-white mt-4">{JSON.stringify(state)}</div>
            )}
          </form>
        </div>

        {state && <div>{state}</div>}
      </div>
    </div>
  );
};

export default CreateAIModelSession;
