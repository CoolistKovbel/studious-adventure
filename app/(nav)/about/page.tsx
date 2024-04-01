import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#111] text-color p-10">
      <header className="flex justify-around w-full">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            Project: MindCraft AI
          </h1>
          <p className="text-md text-gray-500">
            The service for your every day needs
          </p>
        </div>

        <Link href="/" className="w-[100px] h-[100px] relative">
          <Image src="/forged.png" alt="temp logo" fill />
        </Link>
      </header>

      <hr className="my-5" />

      <section className="w-full bg-[#222] h-[720px] p-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">De Begining</h2>

        <div className="flex items-center flex-col gap-4">
          <p>
            Started with a small dream, trying to turn it into a reality. With
            many things going on in the world I feel as a human we fall behind.
            Yes there are a few people who are smart and can create awesome
            inventions. Thats only a few out of the 7 billion.
          </p>

          <p>
            As time goes by there seems to be different layers of education and
            yet not everyone knows everything. Most people use search engines to
            get their answers and hope to get the result they are looking for. Yet
            with AI you can search and solve you issue with just a few quicks. As
            long as you know how to communicate you will be able to get the
            correct answers you are looking for.
          </p>

          <p>
            To make life easier and make sure people are able to educate them
            selves as well as open up their creative eye to help create a life
            fill with love.
          </p>

          <p>
            By setting up and creating your own account you will be able to have
            access to your own bot. You will be able to have up at least 3 bots
            where you will be able to create many different types of sessions.
            From Chat sessions where you can setup the bot to converse about
            certain topics or certain ways. All the way to images, from generating
            from a prompt or from an upload.
          </p>

          <p>
            As thinks continue to update you can also connect your account to a
            specfic wallet with just a click, just be sure to keep your wallet
            keys secured. As well as support us through our community NFT collection.
          </p>
        </div>

      </section>
    </main>
  );
};

export default Page;
