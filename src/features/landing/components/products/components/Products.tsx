'use client'
import React, { useRef, useState } from "react";
import ProductCardItem from "@/features/landing/components/products/components/item/Item";
import {CurveArrowIconTwo} from "@/assets/icons/CurveArrowIconTwo";
import Link from "next/link";
import {ArrowTLIcon} from "@/assets/icons/ArrowTLIcon";
import Slider from "react-slick";

const products = [
    { title: 'دستگاه تست قندخون', isSpecialOffer: true, isFavourite: false, image: '/assets/img/products/product-one.png', offerPercent: 50, category: '', originalAmount: 0, stars: 0, id: 1 },
    { title: 'دستگاه تست قندخون', isSpecialOffer: false, isFavourite: false, image: '/assets/img/products/product-one.png', offerPercent: 10, category: 'پزشکی و سلامت', originalAmount: 125000, stars: 5, id: 2 },
    { title: 'دستگاه تست قندخون', isSpecialOffer: false, isFavourite: false, image: '/assets/img/products/product-two.png', offerPercent: 10, category: 'پزشکی و سلامت', originalAmount: 125000, stars: 5, id: 3 },
    { title: 'دستگاه تست قندخون', isSpecialOffer: false, isFavourite: false, image: '/assets/img/products/product-one.png', offerPercent: 10, category: 'پزشکی و سلامت', originalAmount: 125000, stars: 4, id: 4 },
    { title: 'دستگاه تست قندخون', isSpecialOffer: false, isFavourite: false, image: '/assets/img/products/product-one.png', offerPercent: 20, category: 'پزشکی و سلامت', originalAmount: 150000, stars: 2, id: 5 },
    { title: 'دستگاه تست قندخون', isSpecialOffer: false, isFavourite: false, image: '/assets/img/products/product-one.png', offerPercent: 20, category: 'پزشکی و سلامت', originalAmount: 150000, stars: 4, id: 6 },
];

export default function Index() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: true,
        draggable: true,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };
    return (
        <section className="w-full max-w-md md:max-w-5xl m-auto mt-20 p-2 rounded-2xl border-t border-r border-b border-l-0 border-[#E4B984] bg-gradient-to-b from-transparent to-[#E4B984]">
            <section className="flex flex-col md:flex-row justify-between mb-4 p-2">
                <section className="mb-4 md:mb-0">
                    <p className="flex flex-col text-sm md:flex-row gap-2 justify-start items-center">
                        <span>محصولات منتخب و پرفروش</span>
                        <span><CurveArrowIconTwo className='w-10 h-10'/></span>
                    </p>
                    <p className="text-center md:text-left">
                        <span className="font-bold text-xl">پیشنهادهای مطمئن</span>
                        <span className='text-lg'>؛ انتخاب‌های محبوب</span>
                    </p>
                </section>

                <section className="flex justify-center md:justify-start">
                    <Link href={'/'} className="flex items-center justify-center mt-5">
                        <button className="group-hover:bg-white p-2 justify-center items-center w-fit h-6 flex flex-row gap-2 text-sm bg-[#E3E6DC] text-[#72814E] rounded-full transition-all duration-300 z-10">
                            مشاهده همه <ArrowTLIcon className='w-5 h-5' fill='#72814E'/>
                        </button>
                    </Link>
                </section>
            </section>
            <div className="slider-container">
                <Slider {...settings}>
                    {products.map(product => (
                        <div key={product.id} className="px-1">
                            <ProductCardItem {...product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
