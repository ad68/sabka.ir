"use client";

import { CurveArrowIcon } from "@/assets/icons/CurveArrowIcon";
import { StarIcon } from "@/assets/icons/StarIcon";
import { ArrowTLIcon } from "@/assets/icons/ArrowTLIcon";
import React from "react";
import { SectionSecondBackground } from "../../../../../../public/assets/img/homepage/SectionSecondBackground";
import Image from "next/image";

export default function Index() {
    return (
        <section className='w-full max-w-5xl m-auto h-svh flex flex-col justify-center items-center'>
            <section className="flex flex-col items-center justify-center gap-3 mt-20 mb-10 text-center px-4 sm:px-6 md:px-10 lg:px-20">
                <p className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-medium ">
                    ژوار؛ همراهی که فرق می‌کند <StarIcon />
                </p>
                <span className="text-lg sm:text-xl md:text-2xl">
                    <b className="font-bold">چرا ژوار،</b> انتخابی متفاوت است؟
                </span>
            </section>
            <section className='relative shadow-[0px_44px_44px_-26px_#02005B2E] '>
                <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-6  bg-white rounded-3xl shadow-[inset_0px_0px_250px_0px_#35F66826]  overflow-hidden">

                    <section className="absolute inset-0 z-0">
                        <SectionSecondBackground />
                    </section>

                    <section className="relative z-10 flex flex-col gap-4 w-full px-5 md:px-0 md:w-2/3 py-5 max-w-xl md:max-w-2xl lg:max-w-5xl ">
                        <section className="flex flex-col text-sm sm:text-base md:text-lg  text-gray-800 px-10">
                            <section className="flex flex-row items-center">
                            <span className=" bg-gradient-text bg-clip-text text-transparent font-bold text-2xl sm:text-xl md:text-xl lg:text-3xl">
                                آرامش خاطر خانواده
                            </span>
                                <span className="font-semibold text-2xl sm:text-base md:text-xl lg:text-2xl">، با نظارت</span>
                                <CurveArrowIcon className='w-12 h-12 lg:w-20 lg:h-20'  />
                            </section>
                            <p className="font-semibold text-2xl sm:text-base md:text-xl lg:text-2xl">دقیق و شفاف</p>
                            <p className="flex text-sm sm:text-sm max-w-sm md:max-w-fit md:text-lg lg:text-xl font-normal my-2 leading-relaxed">
                                با نصب دوربین و بازدیدهای دوره‌ای، بر کیفیت عملکرد پرسنل نظارت می‌کنیم تا شما با خیالی آسوده، سلامت عزیزانتان را به ژوار بسپارید.
                            </p>
                        </section>

                        <section className='px-10'>
                            <button className="bg-gradient-to-tr  from-[#4EB301] via-[#01532F] to-[#4EB301] text-white text-sm rounded-full flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 border-b-4 border-white  shadow-[#72814E73] shadow-2xl transition-all duration-200 hover:opacity-90">
                                <span>دریافت مشاوره رایگان</span>
                                <ArrowTLIcon className="w-4 h-4 sm:w-5 sm:h-5" fill="white" />
                            </button>
                        </section>
                    </section>

                    <section className="relative w-1/2 md:w-1/2 max-w-xl z-10 flex items-center justify-center">
                        <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10]">
                            <Image
                                src="/assets/img/homepage/HomePageTwo.png"
                                alt="ژوار خدمات"
                                fill
                                className="object-contain rounded-xl"
                                priority
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                        </div>
                    </section>

                </section>
            </section>
        </section>
    );
}
