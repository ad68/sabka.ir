"use client"
import React from "react";
import Link from "next/link";
import {ArrowTLIcon} from "@/assets/icons/ArrowTLIcon";
import {Academy} from "@/features/landing/components/academy/types";
import Image from "next/image";

export default function Index({ img, title, description, isTopPost, hrefLink, category }:Academy)  {
    return (
        <section className="max-w-[280px] rounded-xl overflow-hidden bg-white p-2
        shadow-[0px_6px_10px_0px_#0000000A] text-right">
            <section className='relative w-[100%] h-[240px]'>
                <Image
                    src={img}
                    alt={description}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover rounded-2xl pt-2"
                />
            </section>
            <section className="my-4 text-xs">
                <section className="flex flex-row justify-end gap-2">
                    {isTopPost && (
                        <span className="w-fit h-6 flex justify-center items-center  p-2 rounded-full text-white bg-[#72814E]">
              پست برتر
            </span>
                    )}
                    <span className="w-fit h-6   leading-6 px-2 rounded-full text-[#72814E] bg-[#F1F3EE]">
            {category}
          </span>
                </section>

                <p className="text-[#151516] font-bold text-xs my-2">{title}</p>
                <p className="text-[#72814E] text-xs my-2">{description}</p>

                <Link
                    href={hrefLink || "#"}
                    className="flex flex-row justify-center items-center p-2 text-sm shadow-lg bg-white border-[1px] border-t-[1px] border-r-[2px] border-b-[1px] border-l-[1px] border-solid border-[#72814E] text-[#72814E] font-semibold rounded-full hover:bg-[#72814E] hover:text-white transition-all group"
                >
                    <ArrowTLIcon className="w-3 h-3 text-[#72814E] group-hover:text-white" />
                    مشاهده بیشتر

                </Link>
            </section>
        </section>
    );
};
