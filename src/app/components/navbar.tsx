import Image from 'next/image'
import React from 'react'
import Logo from '../assets/images/DovanX.png'
import CTAButton from './CTAButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className=' h-auto px-20 py-4 bg-transparent flex justify-between'>
            <div className='Logo z-10 flex items-center gap-3 cursor-pointer'>
                <Link href="/">
                    <Image src={Logo} width={108} alt="SkillMatch Logo"/>
                {/* <h1 className='text-2xl font-Manrope font-bold '>DovanX</h1> */}
                </Link>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex gap-6 items-center font-semibold font-Manrope'>
                    {/* <li>
                        <Link href="/">Home</Link>
                    </li> */}
                    {/* <li>
                        <Link href="/pages/about">About</Link>
                    </li>
                    <li>
                        <Link href="/pages/contact">Contact</Link>
                    </li> */}
                    <li>
                        <Link href="/pages/contact">DovanX AI</Link>
                    </li>
            <div className="button flex gap-4">
                <button className='px-4 py-1 cursor-pointer hover:text-background hover:bg-[#797270] font-semibold rounded-md font-Manrope'>Login</button>
                    <CTAButton />
            </div>
                </ul>
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Navbar