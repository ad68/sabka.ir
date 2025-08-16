"use client";
import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import {useIsMobile} from "@/features/products/hooks/useIsMobile";
import MostViewsSectionItem from "@/features/landing/components/MostViewsSection/components/item/Item";
import {MostViewItem} from "@/features/landing/components/MostViewsSection/types";
import Link from "next/link";


const eventItems: MostViewItem[] = [
    {
        img: "/assets/img/landing/MostViewImg1.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "",
    },
    {
        img: "/assets/img/landing/MostViewImg2.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "",
    },
    {
        img: "/assets/img/landing/MostViewImg3.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "",
    },
    {
        img: "/assets/img/landing/MostViewImg3.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "همراه با دوستان جدید،در جشن ها شرکت کنید و لحظاتی آرام، پرانرژی و به‌یادماندنی را تجربه کنید.",
    },
];

export default function Index() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const isMobile =useIsMobile();
    const [centerPadding, setCenterPadding] = useState("0px");
    useEffect(() => {
        function updateCenterPadding() {
            const width = window.innerWidth;
            if (width <= 550) {
                setCenterPadding("60px");
            }else  {
                setCenterPadding("20px");
            }
        }

        updateCenterPadding();

        window.addEventListener("resize", updateCenterPadding);
        return () => window.removeEventListener("resize", updateCenterPadding);
    }, []);

    const otherEvents = eventItems.filter((_, i) => i !== selectedIndex);

    const settings = {
        className:'center',
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:centerPadding,
        arrows: false,
        swipeToSlide: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    // relative w-full flex flex-row justify-between items-center  overflow-hidden
    return (
        <section
            className="relative w-full max-w-sm md:max-w-5xl xl:max-w-6xl m-auto flex flex-col md:flex-row h-[420px] md:h-[400px] xl:h-[500px]
                justify-center md:justify-between items-center py-5 md:py-5 overflow-hidden
            ">
                <section className='bg-cover bg-no-repeat  w-full max-w-2xl xl:max-w-3xl h-full   flex flex-col justify-start md:justify-center items-center  md:items-start md:pr-10 gap-3 rounded-2xl'
                         style={{backgroundImage:`url(/assets/img/landing/MostViewImg1.png)`}}>
                    <section className='flex flex-col justify-start items-center md:items-start gap-2 md:gap-3  max-w-lg mt-4 md:mt-0'>
                        <p className='font-bold text-sm md:text-2xl xl:max-w-3xl text-white max-w-[200px] '>پربازدیدترین
                            تصاویر و ویدئوها</p>
                        <p className='text-white text-sm md:text-md'>تصاویر نشست‌ها و جلسات نمایندگان</p>
                        <Link href={"/"} className="flex items-center justify-center">
                            <button
                                className="group-hover:bg-white py-2 px-3 w-fit  flex flex-row justify-center items-center gap-2 text-xs border-2 border-neutral-200  text-white rounded-lg transition-all duration-300 z-10">
                                مشاهده همه
                            </button>
                        </Link>
                    </section>
                </section>
                <section className="absolute left-[50px] md:left-0 bottom-[-30px] md:bottom-0 py-10 ">
                    <section className="max-w-2xl ">
                        <Slider {...settings} ref={sliderRef}>
                            {otherEvents.map((item, i) => (
                                <section key={i} className='px-2'>
                                    <MostViewsSectionItem {...item} isSelected={false}/>
                                </section>
                            ))}
                        </Slider>
                    </section>
                </section>

        </section>
    );
}
