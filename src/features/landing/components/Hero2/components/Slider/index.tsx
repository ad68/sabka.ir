"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                /*   navigation={true} */
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='relative h-full w-full'>
                        <Image width={1920} height={1080} alt='' src="/assets/img/landing/hero-slider-1.png" />
                        <span className='absolute bottom-9 w-full right-0 text-white font-bold'>سال سرمایه گذاری برای تولید</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <Image width={1920} height={1080} alt='' src="/assets/img/landing/hero-slider-2.png" />
                        <span className='absolute bottom-9 w-full right-0 text-white font-bold'>چهل و یکمین سالگرد بیمه کشاورزی گرامی باد</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <Image width={1920} height={1080} alt='' src="/assets/img/landing/hero-slider-312.jpg" />
                        <span className='absolute bottom-9 w-full right-0 text-white font-bold'>هفته دفاع مقدس گرامی باد</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}