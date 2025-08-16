"use client"
import { LeafIcon } from "@/assets/icons/LeafIcon";
import { NewsIcon } from "@/assets/icons/NewsIcon";
import { ImageIcon } from "@/assets/icons/ImageIcon";
import { FilmIcon } from "@/assets/icons/FilmIcon";
import { MagazineIcon } from "@/assets/icons/MagazineIcon";
import ForthSec1 from "@/assets/img/landing/FourthSec1.png";
import ForthSec2 from "@/assets/img/landing/FourthSec2.png";
import ForthSec3 from "@/assets/img/landing/FourthSec3.png";
import ForthSec5 from "@/assets/img/landing/FourthSec5.png";
import ForthSec6 from "@/assets/img/landing/FourthSec6.png";
import FourthSectionBg from "@/assets/img/landing/FourthSectionBg.png";
import FourthSectionItem from "./components/FourthSectionItem";
import React, {useEffect, useState} from "react";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import Slider from "react-slick";

const newsChildren = [
    { key: 1, title: 'اصلاح ساختار و توسعه كسب و كار در دستور كار صندوق بیمه كشاورزی', img: ForthSec1, link: '' },
    { key: 2, title: 'اصلاح ساختار و توسعه كسب و كار در دستور كار صندوق بیمه كشاورزی', img: ForthSec2, link: '' },
    { key: 3, title: 'اصلاح ساختار و توسعه كسب و كار در دستور كار صندوق بیمه كشاورزی', img: ForthSec3, link: '' },
    { key: 4, title: 'اصلاح ساختار و توسعه كسب و كار در دستور كار صندوق بیمه كشاورزی', img: ForthSec3, link: '' },
    { key: 5, title: 'اصلاح ساختار و توسعه كسب و كار در دستور كار صندوق بیمه كشاورزی', img: ForthSec5, link: '' },
    { key: 6, title: 'اصلاح ساختار و توسعه كسب و كار در دستور كار صندوق بیمه كشاورزی', img: ForthSec6, link: '' },
];

const tabSection = [
    { key: 1, title: 'اخبار', icon: <NewsIcon />, children: newsChildren },
    { key: 2, title: 'تصاویر', icon: <ImageIcon />, children: [] },
    { key: 3, title: 'فیلم ها', icon: <FilmIcon />, children: [] },
    { key: 4, title: 'نشریات خبری', icon: <MagazineIcon />, children: [] },
];

export default function Index() {
    const [selectedItem, setSelectedItem] = useState(tabSection[0]);
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = useIsMobile();
    const [centerPadding, setCenterPadding] = useState("0px");
    useEffect(() => {
        function updateCenterPadding() {
            const width = window.innerWidth;
            if (width <= 550) {
                setCenterPadding("80px");
            }else if (width <= 600) {
                setCenterPadding("20px");
            }else if (width <= 670) {
                setCenterPadding("20px");
            } else {
                setCenterPadding("50px");
            }
        }

        updateCenterPadding();

        window.addEventListener("resize", updateCenterPadding);
        return () => window.removeEventListener("resize", updateCenterPadding);
    }, []);
    const settings = {
        className: 'center',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:centerPadding,
        centerMode: true,
        rtl: true,
        arrows: false,
        dots: false,
        autoplay: false,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <section
            className="w-full bg-contain bg-no-repeat flex flex-row flex-wrap gap-10 justify-center items-center min-h-screen p-2 md:p-10 overflow-x-hidden"
        >
            <section className="w-full mt-8 flex flex-col justify-center items-center md:justify-center md:items-center gap-3">
                <span className="flex flex-row gap-2">
                    کشاورزی، ستون خودکفایی ملی
                    <LeafIcon />
                </span>
                <p className="text-center text-xl md:text-3xl font-bold">دسترسی سریع به خدمات و اطلاعات</p>
                <section className="text-center max-w-2xl">با استفاده از تب‌های زیر، به آسانی به بخش‌های مختلف سامانه دسترسی پیدا کنید.</section>
            </section>

            <section className="w-[96%] mx-auto p-6 flex flex-col justify-center items-center gap-6">
                {isMobile ? (
                    <section className='bg-[#F5F5F5] w-full h-auto p-2' >
                        <Slider {...settings}>
                            {tabSection.map((item, idx) => (
                                <section
                                    key={idx}
                                    className={` transition-all duration-300 ease-in-out ${
                                        idx === currentSlide ? 'scale-95 z-20' : 'scale-95 z-10'
                                    }`}
                                >
                                    <li
                                        onClick={() => {
                                            setActiveTab(idx);
                                            setSelectedItem(item);
                                        }}
                                        className={`relative flex group flex-row gap-1 justify-center items-center w-40  rounded-md h-[40px] cursor-pointer ${
                                            activeTab === idx ? 'bg-[#35663A] text-white' : 'bg-white'
                                        }`}
                                        key={item.key}
                                    >
                                        {React.cloneElement(item.icon, {
                                            color: 'black',
                                            className: `${
                                                activeTab === idx ? 'bg-[#35663A] text-white' : 'bg-white'
                                            } hover:text-white`,
                                        })}
                                        {item.title}
                                    </li>
                                </section>
                            ))}
                        </Slider>
                    </section>
                ) : (
                    <ul className="flex flex-row justify-center items-center bg-[#F5F5F5] rounded-xl p-4 gap-6">
                        {tabSection.map((tabItem, idx) => (
                            <li
                                onClick={() => {
                                    setActiveTab(idx);
                                    setSelectedItem(tabItem);
                                }}
                                className={`relative flex group flex-row gap-1 justify-center items-center p-5 min-w-44 rounded-md h-[40px] cursor-pointer ${
                                    activeTab === idx ? 'bg-[#35663A] text-white' : 'bg-white'
                                }`}
                                key={tabItem.key}
                            >
                                {React.cloneElement(tabItem.icon, {
                                    color: 'black',
                                    className: `${
                                        activeTab === idx ? 'bg-[#35663A] text-white' : 'bg-white'
                                    } hover:text-white`,
                                })}
                                {tabItem.title}
                            </li>
                        ))}
                    </ul>
                )}

                <section className="w-full  max-w-6xl mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-center md:items-center md:flex-wrap gap-3 md:gap-4">
                    {selectedItem.children.map((child, index) => (
                        <FourthSectionItem {...child} key={index} />
                    ))}
                </section>
            </section>

            <section className="flex justify-center items-center">
                <button className="bg-[#35663A] rounded-2xl text-white h-[40px] px-3 text-center">مشاهده بیشتر</button>
            </section>
        </section>
    );
}
