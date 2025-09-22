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
                        <Image width={600} height={600} alt='' src="/assets/img/landing/slide-1.jpg" />
                        <span className='absolute bottom-9 w-full right-0 text-white font-bold'>بیمه كشاورزی ایران به دنبال گسترش همكاری های بین المللی با فائو</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <Image width={600} height={600} alt='' src="/assets/img/landing/slide-2.jpg" />
                        <span className='absolute bottom-9 w-full right-0 text-white font-bold'>بیمه كشاورزی ایران به دنبال گسترش همكاری های بین المللی با فائو</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-full w-full'>
                        <Image width={600} height={600} alt='' src="/assets/img/landing/slide-3.jpg" />
                        <span className='absolute bottom-9 w-full right-0 text-white font-bold'>بیمه كشاورزی ایران به دنبال گسترش همكاری های بین المللی با فائو</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}