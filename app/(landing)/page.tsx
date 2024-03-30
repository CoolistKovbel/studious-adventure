import Image from "next/image";
import Link from "next/link";
import { ImagesSliderDemo } from "../components/landingPage/image-slider";

export default function Home() {

  return (
    <main className="w-full min-h-screen bg-[#999] text-color dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">

      {/* Stupid header  */}
      <header className="flex items-center justify-between p-4 w-full bg-[#999]">

        <nav className="flex items-center gap-4 w-full justify-between ">
          <div className="w-[15%] flex items-center justify-between">
            <Link href="/about" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">About</Link>
            <Link href="/contact" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">Contact</Link>
            <Link href="/faucet" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">Faucet</Link>
          </div>


          <div className="flex items-center">
            <h1 className="font-bold text-xl">Mindcraft AI</h1>
            <Image src="/test02.png" alt="server ai logo" width={100} height={100} />
           </div>



          <div className="w-[10%] flex items-center justify-between">
            <Link  href="/login"className="p-2 bg-[#333] mr-2 rounded-md font-bold drop-shadow-lg">Login</Link>
            <Link href="/register"className="p-2 bg-[#333] rounded-md font-bold drop-shadow-lg">Register</Link>
          </div>

        </nav>

      </header>

      {/* Hero 1 */}
      <div className="w-full h-[720px] p-3 bg-[#333] flex items-center justify-around my-10 flex-col md:flex-row">

        <div className="text-center w-[30%]"> 
          <h2 className="text-2xl md:text-6xl font-bold capitalize mb-2">Tired of looking when the answer is right in front you?</h2>
          <p className="text-md md:text-lg text-gray-500 mb-4">Get started today with your own bot or assistant</p>
          <Link href="/register" className="p-2 bg-[#111] hover:bg-[#222] rounded-md font-bold drop-shadow-lg inline-block">Get Started now</Link>
        </div>
        
        <div className="w-[50%]">
          <ImagesSliderDemo />
        </div>

      </div>


      {/* hero 2 */}
      <div className="w-full h-[720px] p-3 bg-[#333] flex items-center justify-around my-10">

        <div className="text-center w-[35%]">

          <h2 className="text-2xl md:text-4xl font-bold mb-4">Need an extra hand with your project?</h2>
          <p className="mb-3">
            Get yourself situated with your own bot. That you will be able to use for your next project. Either get more in depth information about a specfic web page, generate images for your next collage, or have an all out conversation about a certain topic. 
          </p>
          <Link href="/register" className="p-2 bg-[#222] hover:bg-[#111] rounded-md font-bold drop-shadow-lg">Get Started</Link>

        </div>


        <div className="bg-[#444] w-[300px] h-[300px]">

        </div>



      </div>


    </main>
  );
}
