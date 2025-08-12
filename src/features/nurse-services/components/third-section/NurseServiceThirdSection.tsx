"use client"
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
import {ArrowTLIcon} from "@/assets/icons/ArrowTLIcon";
import {CurveArrowIconTwo} from "@/assets/icons/CurveArrowIconTwo";

export default function NurseServiceThirdSection(){
    const [gradient, setGradient] = useState(
        "linear-gradient(250.69deg, rgba(123, 215, 19, 0.8) 18.63%, rgba(11, 175, 175, 0.8) 43.13%, rgba(11, 175, 175, 0) 57.48%)",
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setGradient(
                    "linear-gradient(180.69deg, rgba(123, 215, 19, 0.8) 18.63%, rgba(11, 175, 175, 0.8) 43.13%, rgba(11, 175, 175, 0) 57.48%)",
                );
            } else {
                setGradient(
                    "linear-gradient(250.69deg, rgba(123, 215, 19, 0.8) 18.63%, rgba(11, 175, 175, 0.8) 43.13%, rgba(11, 175, 175, 0) 57.48%)",
                );
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className='w-full rounded-2xl  overflow-hidden  border-r-[1px] p-2 md:p-0'>
            <section
                className="w-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center border-solid border-t-[1px] border-r-[2px] border-b-0 md:border-b-[1px] border-l-[1px] md:border-l-0 px-4 py-2"
                style={{
                    borderImageSlice: 1,
                    borderImageSource:gradient }}
            >
                <section className="flex flex-col justify-center max-w-sm">
                <span className="flex flex-row gap-2 justify-center md:justify-start items-center ">
                          <span className="text-black ">پرستار در منزل</span>
                            <StarTwoIcon className='w-5 h-5' color={'#FF7700'}/>
                       </span>
                    <p className="text-lg md:text-xl tracking-wide mt-2">
                       مراقبت حرفه‌ای، <span className='font-bold'>در خانه‌ای که عزیزان‌تان دوستش دارند</span>
                    </p>
                    <p className='font-normal text-sm mt-4 md:mt-2'>پرستار در منزل، یعنی آسایش، امنیت و مراقبت حرفه‌ای، درست همان‌جایی که عزیزان شما بیشترین احساس آرامش را دارند: خانه. با تیمی آموزش‌دیده و دلسوز، خدمات پرستاری را متناسب با نیاز هر فرد، به خانه می‌آوریم. از مراقبت‌های پایه تا همراهی تخصصی در دوره‌های درمانی.</p>
                    <section className="flex flex-col gap-4 items-start my-4">
                        <button className="bg-[#72814E] text-white hover:bg-[#72814E] w-[200px] h-[44px] flex justify-center rounded-3xl px-2 border-b-2 border-white items-center shadow-[#72814E73] shadow-xl text-sm">
                            درخواست پرستار در منزل
                            <ArrowTLIcon className='w-5 h-5 text-white' />

                        </button>
                    </section>
                </section>
                <section className="flex-shrink-0 flex-grow-0 basis-[350px]">
                    <Image
                        src="/assets/img/nurse-services/nurse-third-section.png"
                        alt="zhavar"
                        priority
                        layout="responsive"
                        width={350}
                        height={300}
                        objectFit="cover"
                        className="rounded-none"
                    />
                </section>

            </section>
        </section>

    );
}
