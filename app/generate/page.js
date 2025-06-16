"use client";
import React, { Suspense, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';

export const dynamic = "force-dynamic";

const GenerateContent = () => {


    const searchParams = useSearchParams()


    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    // const [handle, sethandle] = useState(searchParams.get("handle"))
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            sethandle(searchParams.get("handle"));
        }
    }, [searchParams]);

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                } else {
                    return item
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }



    const submitLink = async () => {
        const myHeaders = new Headers();
        myHeaders.append("conte", "application/json");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic
        });


        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        }
        else {
            toast.error(result.message)
        }

    }

    return (
        <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>


            <div className="col1 text-gray-800 flex flex-col justify-center items-center">
                <div className='flex flex-col gap-4 my-8'>
                    <h1 className='font-bold text-4xl'>Create your Bittree</h1>

                    <div className="item">
                        <h2 className='font-semibold'>Step1: Claim your handle</h2>
                        <div className='mx-4'>
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='bg-white text-slate-900 dark:placeholder-gray-500 rounded-lg px-4 py-2 foucus:outline-gray-600 mx-2 my-2' type="text" placeholder='Choose handle' />
                        </div>
                    </div>

                    <div className="item">

                        <h2 className='font-semibold'>Step2: Add links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className='mx-4'>

                                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='bg-white text-slate-900 dark:placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-gray-600 mx-2 my-2' type="text" placeholder='Enter link text' />
                                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='bg-white text-slate-900 dark:placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-gray-600 mx-2 my-2' type="text" placeholder='Enter link' />
                                <button onClick={() => addLink()} className='bg-slate-700 text-white p-3 py-2 rounded-3xl font-semibold'>+ Add Link</button>
                            </div>
                        })}

                    </div>

                    <div className="item">

                        <h2 className='font-semibold'>Step3: Add picture and finalize</h2>
                        <div className='mx-4'>
                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='bg-white text-slate-900 dark:placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-gray-600 mx-2 my-2' type="text" placeholder='Enter link of your picture' />
                            <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() => submitLink()} className='disabled:bg-slate-500 bg-slate-700 text-white p-3 py-2 rounded-3xl font-semibold'>Create your BitLink</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#e9c0e9]">
                <Image width={500} height={500} className='h-full object-contain' src="/generate.png" alt="Generate your links" />
            </div>

            <ToastContainer />
        </div>

    )
}

const Generate = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GenerateContent />
        </Suspense>
    );
};

export default Generate



