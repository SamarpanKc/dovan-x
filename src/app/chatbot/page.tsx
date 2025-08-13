'use client'
import React from 'react'
import { BotMessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'

  const Chatbot = () => {
    const router = useRouter()
  return (
    <div onClick={()=>{
      router.push('/about')
    }} className='bg-secondary text-background rounded-full flex items-center text'  style={{height: '50px'}}>
        <BotMessageSquare width={60} />
    </div>
  )
}

export default Chatbot;
