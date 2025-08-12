"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import AcademyCardItem from "@/features/landing/components/academy/components/item/Item";
import { Academy } from "@/features/landing/components/academy/types";
import { LeftArrowIcon } from "@/assets/icons/LeftArrowIcon";
import { RightArrowIcon } from "@/assets/icons/RightArrowIcon";

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 p-2 bg-white rounded-full z-50"
        >
            <LeftArrowIcon className="w-3 h-3" color="#151516" />
        </button>
    );
};

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 p-2 bg-white rounded-full z-50"
        >
            <RightArrowIcon className="w-3 h-3" color="#151516" />
        </button>
    );
};

export default function AcademySlider({ academySlideItem }: { academySlideItem: Academy[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        rtl: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    rtl: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    rtl: true,
                },
            },
        ],
    };

    return (
        <section className="relative w-full max-w-5xl mx-auto px-10 py-2" dir="rtl">
            <Slider {...settings}>
                {academySlideItem.map((item, idx) => (
                    <section
                        key={idx}
                        className={`px-5 transition-all duration-300 ease-in-out 
              ${idx === currentSlide ? "scale-100 z-20" : "scale-95 z-10"} `}
                    >
                        <AcademyCardItem {...item} />
                    </section>
                ))}
            </Slider>
        </section>
    );
}
