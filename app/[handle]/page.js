import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle;

    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // if the handle already exists, return an error
    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }


    return <div className="flex items-start justify-center py-10 min-h-screen bg-[#4c113a]">
        {item && <div className="photo flex flex-col justify-center items-center ">
            <Link href={item.pic}><img width={200} height={200} className="rounded-t-full rounded-lg shadow-xl transition delay-100 duration-300 transition:ease-in-out  hover:scale-110" src={item.pic} alt="profile picture" /></Link>
            <span className="font-bold text-2xl text-[#A7C2CC]">@{item.handle}</span>
            <span className="desc w-80 text-center my-3 text-xl underline text-[#c69674] font-semibold">Your Link Tree is ready!</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}><div className="py-4 px-4 text-xl font-semibold flex justify-center items-center min-w-96 bg-[#c69674] rounded-lg my-3 shadow-lg transition delay-100 duration-300 transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99), border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99), transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99), background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99); hover:-translate-y-1 hover:scale-110 hover:bg-[#f4b080]" >
                        {item.linktext}

                    </div>
                    </Link>
                })}
            </div>



            <button className="bg-amber-800 text-white p-4 rounded-3xl font-semibold shadow-2xl absolute bottom-4 transition delay-100 duration-300 transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99), border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99), transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99), background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99); hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 "><Link href="/">Home</Link></button>

        </div>}
    </div>
}