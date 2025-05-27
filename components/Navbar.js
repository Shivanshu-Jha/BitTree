"use client"
import React from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname();

  const showNavbar = ["/", "/generate"].includes(pathname)



  return (<>
    {showNavbar && <nav className='bg-white flex justify-between w-[80vw] fixed top-10 right-[10vw] px-7 py-3 rounded-full'>
      <div className="logo flex gap-8 items-center">
        <Link href={"/"}>
          <img className='h-8' loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt=""></img>
        </Link>

        <ul className='flex gap-10 text-gray-500 font-semibold px-5 text-md'>
          <Link href={"/"}><li>Templates</li></Link>
          <Link href={"/"}><li>Marketplace</li></Link>
          <Link href={"/"}><li>Discover</li></Link>
          <Link href={"/"}><li>Pricing</li></Link>
          <Link href={"https://linktr.ee/blog"}><li className='text-gray-800 hover:scale-110'>Learn</li></Link>
        </ul>
      </div>

      <div className='flex gap-3'>
        {/* <Page /> */}
        <button className="login bg-[#eff0ec] p-3 rounded-lg font-semibold hover:scale-110">Login</button>
        <button className="signUp bg-gray-900 text-white p-3 rounded-full font-semibold hover:scale-110">SignUp Free</button>
      </div>

    </nav>
    }
  </>)
}

export default Navbar
