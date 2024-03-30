import Image from "next/image";
import Link from "next/link";
import { Carousel } from "../components/carosal";

export default function Home() {

  const aiImages = [
    {
      url: "/bbS.png"
    },
    {
      url: "/forged.png"
    },
    {
      url: "/pp.jpg"
    }
  ]


  return (
    <main className="w-full min-h-screen bg-[#999] text-color">

      {/* Stupid header  */}
      <header className="flex items-center justify-between p-4">

        <nav className="flex items-center gap-4 w-full justify-between ">
          <div className="w-[15%] flex items-center justify-between">
            <Link href="/about" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">About</Link>
            <Link href="/contact" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">Contact</Link>
            <Link href="/faucet" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">Faucet</Link>
          </div>


          <div className="flex items-center">
            <h1 className="font-bold text-xl">deLeftHand</h1>
            <Image src="/ai-server-logo.png" alt="server ai logo" width={100} height={100} />
           </div>



          <div className="w-[10%] flex items-center justify-between">
            <Link  href="/login"className="p-2 bg-[#333] mr-2 rounded-md font-bold drop-shadow-lg">Login</Link>
            <Link href="/register"className="p-2 bg-[#333] rounded-md font-bold drop-shadow-lg">Register</Link>
          </div>

        </nav>

      </header>


      <div className="w-full h-[720px] p-3 bg-[#333] flex items-center justify-around my-10">

        <div className="text-center"> 
          <h2 className="text-2xl md:text-4xl font-bold capitalize mb-2">Tired of looking when the answer is right in front you?</h2>
          <p className="text-md text-gray-500 mb-4">Get started today with your own bot or assistant</p>
          <Link href="/register" className="p-2 bg-[#111] hover:bg-[#222] rounded-md font-bold drop-shadow-lg inline-block">Get Started now</Link>
        </div>

        <Carousel images={aiImages} />

      </div>


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
