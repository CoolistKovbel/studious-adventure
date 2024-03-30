import Image from "next/image";
import Link from "next/link";
import { GlobeDemo } from "../components/landingPage/ggloble";
import { ThreeDCard } from "../components/landingPage/3d-card";

export default function Home() {
  return (
<main className="w-full min-h-screen bg-[#999] text-color dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      {/* Stupid header */}
      <header className="flex items-center justify-between p-4 w-full bg-[#999]">
        <nav className="flex items-center gap-4 w-full justify-between">
          <div className="w-[15%] flex items-center justify-between ">
            <Link
              href="/about"
              className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg"
            >
              Contact
            </Link>
            <Link
              href="/faucet"
              className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg"
            >
              Faucet
            </Link>
          </div>
          <div className="flex items-center">
            <h1 className="font-bold text-xl md:text-2xl">Mindcraft AI</h1>
            <div className="hidden md:block">
              <Image
                src="/test02.png"
                alt="server ai logo"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-[10%] flex items-center justify-between">
            <Link
              href="/login"
              className="p-2 bg-[#333] mr-2 rounded-md font-bold drop-shadow-lg"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="p-2 bg-[#333] rounded-md font-bold drop-shadow-lg"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero 1 */}
      <div className="w-full h-[720px] p-3 bg-[#333] flex items-center justify-around my-10 flex-col md:flex-row">

        <div className="text-center w-full md:w-[30%]">
          <h2 className="text-2xl md:text-6xl font-bold capitalize mb-2">
            Tired of looking when the answer is right in front you?
          </h2>
          <p className="text-md md:text-lg text-gray-500 mb-4">
            Get started today with your own bot or assistant
          </p>
          <Link
            href="/register"
            className="p-2 bg-[#111] hover:bg-[#222] rounded-md font-bold drop-shadow-lg inline-block"
          >
            Get Started now
          </Link>
        </div>

        <GlobeDemo />
      </div>

      {/* hero 2 */}
      <div className="w-full h-full md:h-[420px] p-10 md:p-3 bg-[#333] flex items-center justify-center my-10 gap-10 flex-col md:flex-row">

        <div className="text-center w-full md:w-[35%]">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            The perfect tool for those who want to be more studius
          </h2>
          <p className="mb-3">
            Simple and easy to use, getting you closer to your objective, slow
            and steady
          </p>
        </div>

        <div className="flex flex-wrap justify-around w-full md:w-[50%]">
          <div className="w-full md:w-[45%] mb-4 flex flex-col items-start justify-center">
            <i className="text-2xl">🧑🏽‍💻</i>
            <h2 className="font-bold text-[1.4rem]">Research</h2>
            <p className="text-sm text-gray-500">
              Get AI help with understand your latest study session
            </p>
          </div>
          <div className="w-full md:w-[45%] mb-4 flex flex-col items-start justify-center">
            <i className="text-2xl">🧑🏽</i>
            <h2 className="font-bold text-[1.4rem]">Content</h2>
            <p className="text-sm text-gray-500">
              Genereate buetiful content for your buisness or next project
            </p>
          </div>
          <div className="w-full md:w-[45%] mb-4 flex flex-col items-start justify-center">
            <i className="text-2xl">🕵🏾</i>
            <h2 className="font-bold text-[1.4rem]">Query</h2>
            <p className="text-sm text-gray-500">
              Use AI to answer questions about a certain webpage
            </p>
          </div>
          <div className="w-full md:w-[45%] mb-4 flex flex-col items-start justify-center">
            <i className="text-2xl">🕋</i>
            <h2 className="font-bold text-[1.4rem]">Buisness</h2>
            <p className="text-sm text-gray-500">
              Generate a whole buisness plan where all you have to do is apply
              action once you completed
            </p>
          </div>
        </div>

      </div>

      {/* Features */}
      <section className="w-full mb-10 p-10 md:p-0">
        <ThreeDCard />

        <article className="flex flex-col md:flex-row items-center justify-center gap-10 mb-4">
          <header className="w-full md:w-[60%]">
            <h3 className="text-2xl md:text-4xl font-bold mb-2">Chat Bot</h3>
            <p className="text-sm leading-5">
              Using the Chat Bot feature you are able to communicate with the
              specfic bot session you create. You can ask it anything and it
              will respond with what it know in its knowledge base. Get help
              from any topic just remeber each bot you create to introduce
              yourself and explain what you will be doing with it.
            </p>
          </header>
          <div className="w-full md:w-[300px] h-[300px] bg-[#141]"></div>
        </article>

        <article className="flex flex-col md:flex-row-reverse items-center justify-center gap-10  mb-4">
          <header className="w-full md:w-[60%]">
            <h3 className="text-2xl md:text-4xl font-bold mb-2">Photo Bot</h3>
            <p className="text-sm leading-5">
              Using the Photo Bot is quite use, use prompts to generate a single
              HQ image or multiple ai generated images, dont worry you are free
              to use them for whatever. You can also find yourself editing
              images as well by provide a cut out of what you want to edit.
            </p>
          </header>
          <div className="w-full md:w-[300px] h-[300px] bg-[#141]"></div>
        </article>

        <article className="flex flex-col md:flex-row items-center justify-center gap-10">
          <header className="w-full md:w-[60%]">
            <h3 className="text-2xl md:text-4xl font-bold mb-2">Scrape Bot</h3>
            <p className="text-sm leading-5">
              Using the Scrape Bot feature you will be able to ask questions
              about certain website you provide.
            </p>
          </header>
          <div className="w-full md:w-[300px] h-[300px] bg-[#141]"></div>
        </article>

      </section>

      <footer className="w-full bg-[#111] text-white pt-4 border-t border-gray-200">
        <div className="container mx-auto p-4">
          {/* Footer content */}
          <div className="flex items-center flex-col md:flex-row justify-between">
            {/* Website title and description */}
            <div className="mb-4 md:mb-0">
              <div className="flex items-center ">
                <h1 className="font-bold text-xl">Mindcraft AI</h1>
                <Image
                  src="/test02.png"
                  alt="server ai logo"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-sm">
                The perfect tool for those who want to be more studius
              </p>
            </div>
            {/* Links to resources */}
            <div>
              <h4 className="font-bold mb-2">Resources</h4>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-300 hover:text-gray-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-300 hover:text-gray-100"
                  >
                    Contact
                  </Link>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
          </div>
          {/* Horizontal line */}
          <hr className="my-4 border-t border-gray-200 max-w-xs mx-auto" />
          {/* Copy right text */}
          <p className="text-xs text-gray-300 text-center">
            &copy; {new Date().getFullYear()} MindCraft AI. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
