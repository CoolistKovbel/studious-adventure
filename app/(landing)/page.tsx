import Image from "next/image";
import Link from "next/link";

export default function Home() {



  return (
    <main className="w-full min-h-screen bg-[#111] text-color">

      <header className="flex items-center justify-between p-4">

        <div className="flex items-center">
          <h1 className="font-bold text-xl">deLeftHand</h1>
          <Image src="/ai-server-logo.png" alt="server ai logo" width={100} height={100} />
        </div>

        <nav className="flex items-center gap-4 ">
          <Link href="/" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">About</Link>
          <Link href="/" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">Contact</Link>
          <Link href="/" className="p-2 bg-[#222] rounded-md font-bold drop-shadow-lg">Faucet</Link>
          <div>
            <Link  href="/login"className="p-2 bg-[#333] mr-2 rounded-md font-bold drop-shadow-lg">Login</Link>
            <Link href="/register"className="p-2 bg-[#333] rounded-md font-bold drop-shadow-lg">Register</Link>
          </div>
        </nav>

      </header>


      <div className="w-full h-[320px] p-3 bg-[#333] flex items-center justify-center">
        <div className="text-center"> 
          <h2 className="text-2xl font-bold capitalize">Tired of Looking for thing?</h2>
          <p className="text-sm text-gray-500">Get started today with your own assistant</p>
        </div>
      </div>

      <section className="p-4">
        <p className="text-center text-sm">Get your situated with web3 quick and easy. Once connected you will be able connect to the app seemsly and use your bot easily.</p>
      </section>
      

    </main>
  );
}
