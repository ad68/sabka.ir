"use client";
import React, { useRef, useState } from "react";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import MostViewsSectionItem from "@/features/landing/components/MostViewsSection/components/item/Item";
import { MostViewItem } from "@/features/landing/components/MostViewsSection/types";
import Link from "next/link";

const eventItems: MostViewItem[] = [
    {
        img: "/assets/img/landing/MostViewImg2.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی1",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "11",
    },
    {
        img: "/assets/img/landing/MostViewImg3.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی2",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "22",
    },
    {
        img: "/assets/img/landing/MostViewImg3.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی3",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "همراه با دوستان جدید،در جشن ها شرکت کنید و لحظاتی آرام، پرانرژی و به‌یادماندنی را تجربه کنید.",
    },
    {
        img: "/assets/img/landing/MostViewImg2.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی4",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "33",
    },
    {
        img: "/assets/img/landing/MostViewImg3.png",
        title: "حضور نمایندگان سازمان برنامه و بودجه کشور در صندوق بیمه کشاورزی5",
        date: "۲۳ اردیبهشت، ۱۴۰۳",
        link: "/",
        desc: "444",
    },
];

export default function Index() {
    const isMobile = useIsMobile();
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    const onMouseUp = () => setIsDragging(false);
    const onMouseLeave = () => setIsDragging(false);
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // For touch devices
    const onTouchStart = (e: React.TouchEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !scrollRef.current) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    const onTouchEnd = () => setIsDragging(false);

    const onScroll = () => {
        if (!scrollRef.current) return;
        const children = scrollRef.current.children;
        let closestIndex = 0;
        let closestDistance = Infinity;

        Array.from(children).forEach((child, idx) => {
            const el = child as HTMLElement;
            const distance = Math.abs(el.offsetLeft - scrollRef.current!.scrollLeft);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = idx;
            }
        });

        setSelectedIndex(closestIndex);
    };

    const otherEvents = eventItems.filter((_, i) => i !== selectedIndex);

    return (
        <section className="relative w-full md:max-w-5xl xl:max-w-6xl m-auto flex flex-col md:flex-row  justify-center md:justify-between items-center py-50 md:py-5 mb-[100px] overflow-x-hidden">
            <section
                className="bg-cover bg-no-repeat z-10 w-full bg-opacity-10 xl:max-w-3xl h-[320px] md:h-[380px] 2xl:h-[500px] flex flex-col justify-start md:justify-start md:pt-10 xl:justify-center xl:pt-0 items-center md:items-start md:pr-10 gap-3 md:rounded-2xl"
                style={{ backgroundImage: `url(/assets/img/landing/MostViewImg1.png)` }}
            >
                <section className="flex flex-col justify-start items-center md:items-start gap-3 md:gap-3 max-w-lg mt-10 md:mt-0">
                    <p className="font-bold text-md md:text-2xl xl:max-w-3xl text-white max-w-[320px]">
                        پربازدیدترین تصاویر و ویدئوها
                    </p>
                    <p className="text-white text-md md:text-md ">تصاویر نشست‌ها و جلسات نمایندگان</p>
                    <Link href={"/"} className="flex items-center justify-center">
                        <button className="group-hover:bg-white py-2 px-3 w-fit flex flex-row justify-center items-center gap-2 text-xs border-2 border-neutral-200 text-white rounded-lg transition-all duration-300 z-10">
                            مشاهده همه
                        </button>
                    </Link>
                </section>
            </section>

            <section
                ref={scrollRef}
                className="w-full flex md:mr-[-200px] lg:translate-x-[100px] md:translate-x-[20px] overflow-x-auto gap-5 px-4 mt-[-100px] md:mt-[250px] no-scrollbar cursor-grab active:cursor-grabbing z-20"
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onScroll={onScroll}
            >
                {otherEvents.map((item, i) => (
                    <section key={i} className="flex-shrink-0 transition-transform duration-300 ease-in-out w-[250px] sm:w-[200px] xs:w-[150px]">
                        <MostViewsSectionItem {...item} />
                    </section>
                ))}
            </section>
        </section>
    );
}
