import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-[#111] text-color p-10">
      <header className='flex justify-around w-full'>

        <div>
          <h1 className='text-xl md:text-2xl font-bold'>Project: AI Service Page</h1>
          <p className='text-md text-gray-500'>The service for your every day needs</p>
        </div>

        <Link href="/" className='w-[100px] h-[100px] relative'>
          <Image src="/forged.png" alt='temp logo' fill />
        </Link>

      </header>

      <hr className='my-5' />

      <section>
        <p>
          Tired of trying to find something on a web page to make sense.
        </p>
      </section>

    </main>
  )
}

export default Page