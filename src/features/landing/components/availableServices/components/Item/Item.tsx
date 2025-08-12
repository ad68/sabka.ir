import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Index(item: { image: string; title: string; description: string; buttonLink: string }) {
    const { image, title, description, buttonLink } = item;

    return (
            <section
                className="w-[150px] md:w-fit relative  max-w-[200px] md:max-w-xs  min-h-auto md:min-h-[240px] flex flex-col justify-between items-center gap-2 rounded-lg shadow-lg bg-[#F8F8F6] hover:bg-[#72814E] hover:text-white group">
                <section className=''>
                    <section className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-all duration-300 z-0"
                        style={{ backgroundImage: `url(${image})` }}
                    ></section>
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

                    <section className="mt-16 px-4 pb-2 md:px-6 md:pb-4">
                        <h3 className="flex text-xs md:text-sm font-bold">{title}</h3>
                        <p className="hidden md:flex font-normal text-[#151516] mt-0 md:mt-3 text-sm max-w-[150px] group-hover:text-white">{description}</p>
                    </section>
                </section>

                <section className='mb-4'>
                    <Link href={buttonLink} className="flex items-center justify-center">
                        <button className="group-hover:bg-white p-[6px] text-xs bg-[#E3E6DC] font-semibold text-[#72814E] rounded-full transition-all duration-300 z-10">
                            مشاهده بیشتر
                        </button>
                    </Link>
                </section>
            </section>
    )
}