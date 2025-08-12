import { StarTwoIcon } from "@/assets/icons/StarTwoIcon";
import { ArrowTLIcon } from "@/assets/icons/ArrowTLIcon";
import React from "react";
import Image from "next/image";

export default function NurseServiceFirstSection() {
    return (
        <section className='w-full flex flex-col-reverse md:flex-row justify-between items-center  min-h-screen'>
            <section className='w-full flex flex-col justify-start items-start gap-2 p-6 md:p-1 '>
                <p className='flex flex-row justify-start items-center gap-2'>
                    درخواست پرستار{" "}
                    <span>
            <StarTwoIcon className='w-5 h-5' color={'#FF7700'} />
          </span>
                </p>
                <p className='text-xl tracking-wide'>
                    <span>نها یک قدم تا آرامشی که </span>{" "}
                    <span className='font-bold'>عزیزانتان شایسته‌اش هستند</span>
                </p>
                <section className='w-full max-w-xl'>
                    پرستارانی آموزش‌دیده، مهربان و قابل اطمینان برای مراقبت در خانه، همراهی در رفت‌وآمد یا رسیدگی‌های روزمره. ما همراهی انسانی و حرفه‌ای را به خانه‌تان می‌آوریم.
                </section>
                <section className="w-full flex flex-col gap-4 items-center justify-center md:items-start mb-4">
                    <button className="bg-[#72814E] text-white hover:bg-[#72814E] w-[240px] h-[44px] flex justify-center rounded-3xl px-2 border-b-2 border-white items-center shadow-[#72814E73] shadow-xl text-sm my-2">
                        درخواست پرستار دارم<span><ArrowTLIcon /></span>
                    </button>
                </section>
            </section>
            <section className="relative w-full md:w-1/2 max-w-lg z-10 flex justify-center items-center">
                <section className="relative w-full aspect-[1/1] md:aspect-[1/1] lg:aspect-[1/1]">
                    <Image
                        layout='fill'
                        objectFit='contain'
                        src={'/assets/img/nurse-services/nurse-s-first-section.png'}
                        alt='zhavar-nurse'
                    />
                </section>
            </section>
        </section>
    );
}
