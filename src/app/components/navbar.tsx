import Image from 'next/image'
import React from 'react'
import Logo from '../assets/images/logoskillmatch.png'
import CTAButton from './CTAButton'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className=' h-auto px-20 p-4 bg-transparent flex justify-between'>
            <div className='Logo z-10 flex items-center gap-3'>
                <Image src={Logo} width={32} alt="SkillMatch Logo"/>
                <h1 className='text-2xl font-Manrope font-bold'>Skill Match</h1>
            </div>
            <div className=''>
                <ul className='flex gap-6 items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <CTAButton />
                </ul>
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Navbar