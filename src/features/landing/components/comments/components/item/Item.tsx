import React from "react";
import {Comment} from "@/features/landing/components/comments/types";
import Image from "next/image";

export default function Index({ name, rate, comment, img }:Comment){
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} style={{ color: i <= rate ? "gold" : "lightgray", fontSize: "20px" }}>
        ★
      </span>
        );
    }
    return (
        <section dir='rtl' className='max-w-[380px] h-[200px] w-full p-4 rounded-tl-[5px] rounded-tr-[30px] rounded-br-[5px] rounded-bl-[30px] bg-white text-black flex flex-col justify-start items-start gap-2 text-right direction-rtl'>
            <section className='w-full flex flex-row justify-start items-center gap-2 mt-2'>
                <section className="h-[50px] w-[50px] overflow-hidden rounded-full ">
                    <Image width={50} height={50} src={img} alt={name} className="w-full h-full object-cover" />
                </section>
                <section className='flex flex-col justify-center text-right'>
                    <p className='font-semibold text-sm'>{name}</p>
                    <p>{stars}</p>
                </section>
            </section>
            <p className="text-sm leading-relaxed font-normal mt-1">{comment}</p>
        </section>

    );
}