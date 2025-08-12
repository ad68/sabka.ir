"use client"
import {ArrowTLIcon} from "@/assets/icons/ArrowTLIcon";
import React from "react";
import Image from "next/image";

export default function Index() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row items-start xl:items-center justify-between xl:justify-center gap-10 p-5 ">
            <section className="w-full md:w-1/2 xl:w-full  flex flex-col gap-6 mt-5 xl:mt-10 md:mt-10 px-5">
                <section className="text-2xl md:text-4xl font-bold flex flex-col gap-6">
                    <section className="relative inline-block ">
                        <span className="underline-clip relative inline-block  text-[#BB4733]">آسایش امروز</span>
                        <span>حق کسانیست</span>
                    </section>
                    <p> که زندگی را به ما آموختند</p>
                </section>

                <p className="flex justify-start text-lg text-[#151516] font-semibold mt-5 ">
                    خدمات مراقبتی، درمانی و رفاهی برای سالمندان عزیز، با اطمینان، احترام و همراهی همیشگی
                </p>
                <section className='mt-10 flex flex-col justify-between gap-2 md:flex-row md:gap-3' >
                    <button className='bg-[#72814E] md:w-[251px] md:h-[55px] text-sm text-white text-bold rounded-full flex flex-row gap-2 p-2 items-center justify-center border-b-2 border-white hover:none
                          shadow-[#72814E73] shadow-2xl'
                            onClick={() => {}}>
                        درخواست پرستار در منزل
                        <ArrowTLIcon className='w-5 h-5 text-white' />
                    </button>
                    <button  className='bg-[#E3E6DC]  md:w-[251px] md:h-[55px] font-semibold text-sm text-[#72814E] rounded-full flex flex-row gap-2 p-2 items-center justify-center shadow-sm shadow-[#72814E73] hover:none hover:bg-[#72814E73]' onClick={() => {}}>
                        <span>ارسال آزمایش برای بررسی</span>
                        <ArrowTLIcon className='w-5 h-5 ' fill='#72814E' />
                    </button>
                </section>
            </section>
            <section className="w-full md:w-1/2 xl:w-full flex justify-center mt-0 md:mt-[-80px] lg:mt-[-180px] xl:mt-[-80px]">
                <section className="w-full max-w-md">
                    <Image
                        src="/assets/img/homepage/MainImg.png"
                        alt="zhavar"
                        width={800}
                        height={640}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </section>
            </section>
        </section>
    )
}