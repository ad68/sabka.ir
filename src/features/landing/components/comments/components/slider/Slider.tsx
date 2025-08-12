"use client";
import React from "react";
import Slider from "react-slick";
import CommentItem from "@/features/landing/components/comments/components/item/Item";
import { Comment } from "@/features/landing/components/comments/types";
import { LeftArrowIcon } from "@/assets/icons/LeftArrowIcon";
import { RightArrowIcon } from "@/assets/icons/RightArrowIcon";

interface Props {
    slideItem: Comment[];
}

export default function CommentSlider({ slideItem }: Props) {
    if (!slideItem || slideItem.length === 0) return null;

    const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
        <button
            onClick={onClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#72814E] rounded-full"
        >
            <LeftArrowIcon className="w-3 h-3" color="white" />
        </button>
    );

    const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
        <button
            onClick={onClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#72814E] rounded-full"
        >
            <RightArrowIcon className="w-3 h-3" color="white" />
        </button>
    );

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(3, slideItem.length),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        rtl:true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="relative w-full max-w-6xl mx-auto mt-10 px-5">
            <Slider {...settings}>
                {slideItem.map((comment, i) => (
                    <section key={i} className="px-3">
                        <CommentItem {...comment} />
                    </section>
                ))}
            </Slider>
        </section>
    );
}
