"use client"
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {CurveArrowIconTwo} from "@/assets/icons/CurveArrowIconTwo";

export default function PetServiceFourthSection(){
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
                        src="/assets/img/pet-services/fourth-section-f.png"
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
        <span className="text-black ">چرا ما را انتخاب می‌کنید؟</span>
        <CurveArrowIconTwo className="w-8 h-8" color="#4EB301" />
      </span>
                    <p className="text-lg md:text-xl tracking-wide mt-2">
                        <span className="font-bold">چرا خدمات حیوانات ژوار،</span> انتخاب درست  و دل‌گرم‌کننده‌ای‌ هست؟
                    </p>
                    <p className="font-normal text-sm mt-4 md:mt-2">
                        وقتی پای حیوان خانگی عزیزتان در میان است، فقط به‌دنبال یک سرویس ساده نیستید؛
                        به‌دنبال آرامش خاطری هستید که از همراهی افراد آگاه، دلسوز و قابل اعتماد می‌آید.
                        خدمات ما طوری طراحی شده‌اند که با شناخت دقیق از نیازهای افراد پرتجربه و سبک زندگی‌شان،
                        بهترین مراقبت و همراهی را برای حیوانات خانگی‌شان فراهم کنند. با ژوار،
                        عشق به حیوانات با تخصص در هم می‌آمیزد.
                    </p>
                </section>
            </section>
        </section>

    );
    }
