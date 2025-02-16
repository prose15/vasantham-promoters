import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky z-10 left-0 right-0 bg-white shadow-md shadow-gray-500 text-foreground font-liter max-w-screen-xl mx-auto flex justify-between items-center p-4'>
        <Image src={'/images/logo-bg-removed.png'} alt='logo' width={1000} height={1000} className='w-20'/>

        <div className='flex gap-10 text-sm font-bold'>
            <Link href=''>About Us</Link>
            <Link href=''>Services</Link>
            <Link href=''>Projects</Link>
            <Link href=''>Meet Our Team</Link>
            <Link href=''>Testimonial</Link>
            <Link href=''>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar