import Image from 'next/image'
import React from 'react'
import { Navbar } from '@/components/Navbar'
const page = () => {
  return (
    <>
    <Navbar />
    <Image src = "/img/WhatsappScan.jpg" alt = "" width={1000} height = {700} className='mx-auto'/>
    </>
  )
}

export default page