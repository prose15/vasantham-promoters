'use client';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <div className=' h-[586px]'>
    <div className='absolute top-0 z-0 w-full mx-auto'>
    <Swiper modules={[Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }} loop>   
    <SwiperSlide>
      <Image src={'/images/project1.avif'} alt='avathar' width={1000} height={1000} className='w-full h-[650px]'/>
    </SwiperSlide>
    <SwiperSlide><Image src={'/images/project2.jpg'} alt='avathar' width={1000} height={1000} className='w-full h-[650px]'/></SwiperSlide>
    <SwiperSlide><Image src={'/images/project3.jpeg'} alt='avathar' width={1000} height={1000} className='w-full h-[650px]'/></SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}

export default Hero