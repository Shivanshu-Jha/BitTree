"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")


  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }
  const showTree = () => {
    router.push(`/${text}`)
  }

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">

        <div className="flex flex-col justify-center ml-[10vw] mt-[8vw] gap-4">
          <p className="text-[#d2e823] font-bold font-serif text-7xl">Everything you
            <span className="text-[#d2e823] font-bold font-serif text-7xl"> are. In one,</span>
            <span className="text-[#d2e823] font-bold font-serif text-7xl"> simple link in bio.</span> <span className="text-sm">(without Logging In)</span>
          </p>
          <p className="text-white my-4">
            Join 70M+ people using Bittree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input2 flex gap-3">
            <input value={text} onChange={(e) => { setText(e.target.value) }} className="bg-white text-slate-900 p-3 rounded-lg focus:outline-green-800 dark:placeholder-gray-500" type="text" placeholder="Enter your handle" />
            <button onClick={() => createTree()} className="bg-[#e9c0e9] rounded-full p-2 w-40 font-semibold transition delay-100 duration-300 transition:ease-in-out hover:scale-110 hover:bg-[#fda1fd]">Claim your BitTree</button>
          </div>
          <div className="input flex gap-3">
            <input value={text} onChange={(e) => { setText(e.target.value) }} className="bg-white text-slate-900 p-3 rounded-lg focus:outline-green-800 dark:placeholder-gray-500" type="text" placeholder="Enter existing handle" />
            <button onClick={() => showTree()} className="bg-[#e9c0e9] rounded-full p-1 w-40 font-semibold transition delay-100 duration-300 transition:ease-in-out hover:scale-110 hover:bg-[#fda1fd]">Show My Tree</button>
          </div>


        </div>

        <div className="flex flex-col justify-center items-center mr-[10vw]">
          <Image width={700} height={700} src="/home.png" alt="homePageImage" />

        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">
        <div>
          <Image className="h-full absolute left-36 object-contain" src="/section2.png" alt="homePageImage2" width={400} height={400}  />
        </div>
        <div className="flex flex-col justify-center ml-[5vw] gap-4">
          <p className="text-[#502274] font-bold font-serif text-7xl pr-5">
            <span>Create and customize</span>
            <span> your Linktree in minutes</span>

          </p>
          <p className="my-4 pr-5">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <button onClick={() => { createTree() }} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-96 ml-auto rounded-full hover:scale-110 transition duration-300 ease-in-out">
            Get started for free
          </button>
        </div>
      </section>
    </main>
  );
}
