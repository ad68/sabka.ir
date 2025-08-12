"use client"
import React, {useState} from "react";
import {ArrowDownIcon} from "@/assets/icons/ArrowDownIcon";
import Link from "next/link";
import {Assist} from "@/features/landing/components/assist/types";
import {AcademyBackground} from "../../../../../../public/assets/img/assist/AssistBackground";
import Image from "next/image";
import {AcademyBackgroundTwo} from "../../../../../../public/assets/img/assist/AssistBackgroundTwo";
import {AcademyLight} from "../../../../../../public/assets/img/assist/AssistLight";
const items :Assist[]= [
    {title:'مسیر تازه‌ای برای مشارکت، درآمد و ارتباط' , description:'در این بخش، افراد باتجربه می‌توانند مهارت‌ها و خدمات خود را معرفی کنند، به فرصت‌های شغلی مناسب دسترسی داشته باشند و یا از میان دیگر متخصصان، فرد مورد نیازشان را بیابند. جایی برای توانمندی، همکاری و خلق ارزش‌های جدید—همه در بستری امن و ساده.' , link:''},
    {title:'دریافت وام، ساده و مطمئن' , description:'' , link:''},
]
export default function Index() {
    const [openItemIndex , setOpenItemIndex] = useState(0);
    return (
        <section className='relative w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl  m-auto mt-20 min-h-[400px] px-5 py-2 flex flex-col md:flex-row shadow-[0px_74px_74px_-60px_#00000030] my-4 justify-start items-center rounded-3xl gap-2 text-white bg-[linear-gradient(180deg,_#FDF6F3_0%,_rgba(253,_246,_243,_0)_100%)] '>

            <section className="absolute h-full left-20 w-auto z-0 bg-opacity-5 opacity-50 overflow-hidden pointer-events-none">
                <section className="h-full">
                    <AcademyLight />
                </section>
            </section> <section className='flex-grow min-w-max rounded-2xl'>
            <section className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                <AcademyBackground />
            </section>
            <Image
                width={300}
                height={300}
                src='/assets/img/homepage/assist.png'
                alt='zhavr'
                objectFit="cover"
            />
        </section>
            <section className=' flex-grow z-20 opacity-100  max-w-sm md:max-w-3xl xl:max-w-7xl'>
                <ul className='relative flex flex-col gap-3 max-w-lg xl:max-w-3xl   z-20'>
                    {items.map((item, i) => (
                        <li key={i} className="p-5   shadow-[0px_1.41px_4.24px_0px_#0002301A] overflow-hidden transition-transform duration-500 rounded-2xl ease-in-out bg-white border border-solid [border-image-source:linear-gradient(136.14deg,_rgba(255,_255,_255,_0.18)_3.44%,_#BB4733_13.72%,_rgba(255,_255,_255,_0.14)_43.9%,_rgba(255,_255,_255,_0.06)_66.77%)] [border-image-slice:1]">
                            <section className="flex flex-row justify-between items-center">
                                <p className="text-[#151516] font-bold">{item.title}</p>
                                <ArrowDownIcon
                                    className="cursor-pointer"
                                    onClick={() => setOpenItemIndex(i === openItemIndex ? -1 : i)}
                                />
                            </section>
                            <section
                                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                                    openItemIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <span className="text-[#151516] text-xs tracking-wide">{item.description}</span>
                                <Link href={item.link} className="flex flex-row items-center mt-5 mb-2 justify-end">
                                    <button className="w-fit h-8 justify-center items-center p-4 flex flex-row text-sm rounded-full shadow-lg shadow-[#72814E73]

  bg-[#72814E] border-b-2 border-white text-white transition-all duration-300">
                                        مشاهده
                                    </button>
                                </Link>
                            </section>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="absolute left-0 top-0 h-full w-auto z-0 bg-opacity-5 opacity-50 overflow-hidden pointer-events-none">
                <section className="h-full">
                    <AcademyBackgroundTwo />
                </section>
            </section>
        </section>
    )
}

