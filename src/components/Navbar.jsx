'use client'
import { navItems } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const[isOpen,setIsOpen] = useState(false)

  const handleToggle = () =>{
    setIsOpen((prev)=>!prev)
  }

  return (
    <div className='sticky z-10 left-0 right-0 bg-white shadow-md shadow-gray-500 text-foreground font-liter max-w-screen-xl mx-auto '>

      <div className='flex justify-between items-center p-4 cursor-pointer'>
        <Image src={'/images/logo-bg-removed.png'} alt='logo' width={1000} height={1000} className='w-20'/>

        <div className='max-md:hidden flex gap-10 text-sm font-bold text-gray-600'>
            {navItems.map((item,index)=><Link key={index} href={item.href}>{item.name}</Link>)}
            {/* <Link href=''>Contact Us</Link> */}
        </div>

        <div className='lg:hidden flex items-end justify-end w-full' onClick={handleToggle}>
          <Image src={'/images/menu.png'} width={100} height={100} className='w-12 cursor-pointer'/>
        </div>
      </div>

      <div>
      {isOpen && <MobileRes isOpen={isOpen} setIsOpen={setIsOpen}/>}    
      </div>
    </div>
  )
}

export default Navbar

const MobileRes = () =>{
  return(
    <div className='fixed bg-background w-full h-screen'>
      <div className='flex flex-col gap-4 items-center my-24 h-full'>
      {navItems.map((item,index)=><Link key={index} href={item.href} className='font-semibold text-lg'>{item.name}</Link>)}
      </div>
    </div>   
  )
}