import Image from "next/image";
import Link from "next/link";

export default function Home() {



  return (
    <main className="w-full min-h-screen bg-[#111] text-color">

      <header>

        <h1>deLeftHand</h1>

        <nav>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Faucet</Link>
          <div>
            <Link  href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </nav>

      </header>

    </main>
  );
}
