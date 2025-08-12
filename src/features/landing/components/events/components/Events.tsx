"use client";
import {CurveArrowIconTwo} from "@/assets/icons/CurveArrowIconTwo";
import Link from "next/link";
import {ArrowTLIcon} from "@/assets/icons/ArrowTLIcon";
import {LeftArrowIcon} from "@/assets/icons/LeftArrowIcon";
import {RightArrowIcon} from "@/assets/icons/RightArrowIcon";
import EventItem from "@/features/landing/components/events/components/item/Item";
import {Event} from "@/features/landing/components/events/types";
import React, {useRef, useState} from "react";
import Slider from "react-slick";
import {useIsMobile} from "@/features/products/hooks/useIsMobile";

const eventItems: Event[] = [
    {
        img: "/assets/img/events/event-one.jpg",
        title: "تهران‌گردی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "",
        isFavorite: false,
    },
    {
        img: "/assets/img/events/event-two.jpg",
        title: "دورهمی و مهمونی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "",
        isFavorite: false,
    },
    {
        img: "/assets/img/events/event-three.png",
        title: "تهران‌گردی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "",
        isFavorite: false,
    },
    {
        img: "/assets/img/events/event-four.png",
        title: "تهران‌گردی",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "همراه با دوستان جدید،در جشن ها شرکت کنید و لحظاتی آرام، پرانرژی و به‌یادماندنی را تجربه کنید.",
        isFavorite: false,
    },
];

export default function Index() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const isMobile =useIsMobile();

    const prevEvent = () => {
        setSelectedIndex((prev) => (prev === 0 ? eventItems.length - 1 : prev - 1));
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const nextEvent = () => {
        setSelectedIndex((prev) => (prev === eventItems.length - 1 ? 0 : prev + 1));
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const otherEvents = eventItems.filter((_, i) => i !== selectedIndex);

    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: Math.min(3, otherEvents.length),
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: false,
        draggable: isMobile,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section
            className="relative w-full max-w-sm md:max-w-5xl m-auto mt-[260px] flex flex-row justify-center h-[400px] overflow-hidden">
            <section className="w-full flex flex-col justify-between gap-1  items-center">
                <section className="w-full flex flex-col gap-1 p-5">
                    <section className="w-full  flex flex-row justify-between items-center text-sm">
                      <span className="flex flex-row gap-2 justify-center md:justify-start items-center ">
                          <span className="text-black "> رویدادها و دورهمی‌های ژوار</span>
                            <CurveArrowIconTwo className="w-8 h-8" color="#4EB301"/>
                       </span>
                        <Link href={"/"} className="flex items-center justify-center">
                            <button
                                className="group-hover:bg-white p-2 w-fit h-6 flex flex-row justify-center items-center gap-2 text-xs bg-[#E3E6DC] text-[#72814E] rounded-lg transition-all duration-300 z-10">
                                مشاهده همه <ArrowTLIcon className="w-5 h-5" fill="#72814E"/>
                            </button>
                        </Link>
                    </section>
                    <section className="relative flex flex-col gap-2 tracking-wider ">
                        <span className="text-black">
                         <span className="font-bold ">رویدادهای شاد</span> <span>؛ دورهمی‌های جذاب</span>
                       </span>
                        {!isMobile && (
                            <section>
                                <button
                                    onClick={prevEvent}
                                    className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full z-10 bg-[#00000029]"
                                >
                                    <LeftArrowIcon className="w-3 h-3" color="white"/>
                                </button>
                                <button
                                    onClick={nextEvent}
                                    className="absolute top-1/2 left-10 transform -translate-y-1/2 p-2 rounded-full z-10 bg-[#72814E]"
                                >
                                    <RightArrowIcon className="w-3 h-3" color="white"/>
                                </button>
                            </section>
                        )}

                    </section>
                </section>

                <section className="max-w-2xl ">
                    <Slider {...settings} ref={sliderRef}>
                        {otherEvents.map((item, i) => (
                            <section key={i} className='px-2'>
                                <EventItem {...item} isSelected={false}/>
                            </section>
                        ))}
                    </Slider>
                </section>
            </section>

            <section className='mr-5'>
                <EventItem {...eventItems[selectedIndex]} isSelected={true}/>
            </section>
        </section>
    );
}
