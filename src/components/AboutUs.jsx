'use client';

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { aboutUs } from '@/utils/constants';

const AboutUs = () => {

  return (
    <section id='about-us'>
        <div className='relative'>
        <div className=' max-w-screen-xl mx-auto pt-16 text-foreground'>
            <div className='text-center flex flex-col gap-4'>
            <h1 className='text-4xl font-bold uppercase font-playfair'>Welcome to Vasantham Promoters</h1>
            <p>At Vasantham Promoters, we are committed to building a brighter future by delivering quality homes and high-value plots in Tindivanam, Pondicherry, and Villupuram. With years of expertise in real estate and construction, we ensure our customers receive the best investment opportunities and dream homes at competitive prices.</p>
            </div>

            <div className='my-16 flex gap-12 w-full justify-center'>
            <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      loop={true}
      navigation={false}
      spaceBetween={20} // Space between slides
      slidesPerView={1} // Show 3 slides at a time
      breakpoints={{
        640: { slidesPerView: 1 }, // 1 slide on small screens
        768: { slidesPerView: 4 }, // 2 slides on tablets
        1024: { slidesPerView: 6 }, // 3 slides on large screens
      }}>
              {aboutUs.map((content,index)=>
              <SwiperSlide><div key={index} className='flex flex-col gap-4 items-center'>
              <div  className='w-32 flex flex-col gap-4'>
              <div className='bg-background p-6 rounded-full'><Image src={content?.img_url} width={1000} height={1000} className=' w-32 '/></div>
              </div>
                <div className='flex flex-col gap-1 text-center'>
                <h1 className='font-bold text-base'>{content?.title}</h1>
                <p className='text-sm'>{content?.desc}</p>
                </div>
              </div>
              </SwiperSlide>
              )}
              </Swiper>
            </div>
        </div>
        </div>
    </section>
  )
}

export default AboutUs