import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Index(item: { image: string; title: string; buttonLink: string }) {
    const { image, title, buttonLink } = item;

    return (
        <section
            className="w-[150px] md:w-[180px] relative mt-20 min-h-auto md:min-h-[180px] flex flex-col justify-center items-center gap-2 rounded-lg bg-transparent hover:bg-[#F8F8F6] hover:shadow-[#72814E73] hover:shadow-xl hover:border-b-2 hover:border-[#72814E] group">
            <section className=''>
                <section className="absolute -top-12 left-1/2 transform -translate-x-1/2 ">
                    <section className="relative w-24 h-24 border-[1px] border-[#72814E] border-opacity-30 p-1 rounded-full">
                        <section className= 'relative rounded-full flex justify-center items-center w-[100%] h-[100%] m-auto p-1'>
                            <Image
                                layout='fill'
                                objectFit='contain'
                                src={image}
                                alt={title}
                                className="rounded-full border-[1px] border-[#72814E] shadow-lg p-1 group-hover:bg-white"
                            /></section>

                    </section>
                </section>
                <section className="mt-16 px-4 pb-2 md:px-6 md:pb-4 text-center">
                    <h3 className="flex text-xs md:text-sm font-bold">{title}</h3>
                </section>
            </section>

            <section className='mb-4'>
                <Link href={buttonLink} className="flex items-center justify-center">
                    <button className="group-hover:bg-[#72814E] group-hover:text-white w-[120px] p-[6px] text-xs bg-[#E3E6DC] font-semibold text-[#72814E] rounded-full transition-all duration-300 z-10">
                       دریافت خدمات
                    </button>
                </Link>
            </section>
        </section>
    )
}