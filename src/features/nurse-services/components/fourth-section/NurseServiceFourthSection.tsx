"use client"
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {CurveArrowIconTwo} from "@/assets/icons/CurveArrowIconTwo";
import {ArrowTLIcon} from "@/assets/icons/ArrowTLIcon";

export default function NurseServiceFourthSection(){
    const [gradient, setGradient] = useState(
        "linear-gradient(80.69deg, rgba(123, 215, 19, 0.8) 18.63%, rgba(11, 175, 175, 0.8) 43.13%, rgba(11, 175, 175, 0) 57.48%)"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setGradient(
                    "linear-gradient(180.69deg, rgba(123, 215, 19, 0.8) 18.63%, rgba(11, 175, 175, 0.8) 43.13%, rgba(11, 175, 175, 0) 57.48%)"
                );
            } else {
                setGradient(
                    "linear-gradient(80.69deg, rgba(123, 215, 19, 0.8) 18.63%, rgba(11, 175, 175, 0.8) 43.13%, rgba(11, 175, 175, 0) 57.48%)"
                );
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className="w-full rounded-2xl  overflow-hidden p-2 md:p-0  border-l-[1px]">
            <section
                className="w-full flex flex-col md:flex-row justify-between items-center border-solid border-t-[1px] border-l-[2px] border-b-0 md:border-b-[1px] border-r-[1px] md:border-r-0 px-4 py-2"
                style={{
                    borderImageSlice: 1,
                    borderImageSource:gradient}}
            >
                <section className="flex-shrink-0 flex-grow-0 basis-[350px]">
                    <Image
                        src="/assets/img/nurse-services/nurse-fourth-section.png"
                        alt="zhavar"
                        priority
                        layout="responsive"
                        width={350}
                        height={300}
                        objectFit="cover"
                        className="rounded-none"
                    />
                </section>
                <section className="flex flex-col justify-center max-w-sm">
      <span className="flex flex-row gap-2 justify-center md:justify-start items-center ">
        <span className="text-black ">پرستار همراه</span>
        <CurveArrowIconTwo className="w-8 h-8" color="#4EB301" />
      </span>
                    <p className="text-lg md:text-xl tracking-wide mt-2">
                        <span className="font-bold">پرستار همراه</span>  برای لحظات روزمره و قرارهای مهم
                    </p>
                    <p className="font-normal text-sm mt-4 md:mt-2">
                        گاهی حضور یک همراه مهربان، فراتر از مراقبت جسمی، امنیت و دلگرمی می‌آورد. پرستار همراه، در کنار عزیزان شماست؛ برای رفت‌وآمدهای روزمره، قرارهای پزشکی، پیاده‌روی، یا حتی صرف یک فنجان چای. با تجربه و آموزش‌دیده، اما مهم‌تر از همه، انسانی و قابل اعتماد.
                    </p>
                    <section className="flex flex-col gap-4 items-start my-4">
                        <button className="bg-[#72814E] text-white hover:bg-[#72814E] w-[200px] h-[44px] flex justify-center rounded-3xl px-2 border-b-2 border-white items-center shadow-[#72814E73] shadow-xl text-sm">
                            درخواست پرستار همراه
                            <ArrowTLIcon className='w-5 h-5 text-white' />

                        </button>
                    </section>
                </section>
            </section>
        </section>

    );
}
