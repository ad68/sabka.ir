"use client";

import MenuItem, { MenuItemType, PicType } from "./components/MenuItem";
import { ShopIcon } from "@/assets/icons/ShopIcon";
import React, { useState } from "react";
import { Logo } from "@/assets/icons/Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeaderMobile } from "../../../../../public/assets/img/header/HeaderMobile";
import { NavbarMobile } from "../../../../../public/assets/img/header/NavbarMobile";
import { HamburgerMenuIcon } from "@/assets/icons/HamburgerMenuIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";

const menuItemsServices: MenuItemType[] = [
    { title: "خدمات", onClick: () => { } },
    { title: "درخواست پرستار در منزل", onClick: () => { } },
    { title: "درخواست همراه", onClick: () => { } },
    { title: "درخواست آمبولانس", onClick: () => { } },
    { title: "درخواست خرید روزانه", onClick: () => { } },
    { title: "ارسال نتیجه آزمایش جهت بررسی", onClick: () => { } },
    { title: "درخواست مشاوره", onClick: () => { } },
];

const picArrayServices: PicType[] = [
    { src: "/assets/img/navbar/khadamat-one.png", description: "پرستاران مهربان ، همدم عزیزان شما" },
    { src: "/assets/img/navbar/khadamat-two.png", description: "کیفیت بالای خدمات پرستاری زیر نظر ما" },
];

const menuItemsContract: MenuItemType[] = [
    { title: "ارتباط با ما", onClick: () => { } },
    { title: "همکاری با ما", onClick: () => { } },
    { title: "تماس با ما", onClick: () => { } },
];

const picArrayContract: PicType[] = [
    { src: "/assets/img/navbar/contact-one.png", description: "پرستاران خوش ذوق و مهربان" },
    { src: "/assets/img/navbar/contact-two.png", description: "ارگانهای ارائه دهنده خدمات پرستاری" },
];

const links = [
    { title: "خانه", href: "/", hasChildren: false, hasIcon: false },
    { title: "فروشگاه", href: "/shop", hasChildren: false, hasIcon: true, icon: <ShopIcon /> },
    {
        title: "خدمات",
        href: "/",
        hasChildren: true,
        hasIcon: true,
        icon: <ShopIcon />,
        children: <MenuItem menuItems={menuItemsServices} picArray={picArrayServices} />,
    },
    { title: "رویدادها", href: "/", hasChildren: false, hasIcon: false },
    { title: "درباره ما", href: "/", hasChildren: false, hasIcon: false },
    {
        title: "ارتباط با ما",
        href: "/",
        hasChildren: true,
        hasIcon: false,
        children: <MenuItem menuItems={menuItemsContract} picArray={picArrayContract} />,
    },
];

export default function Index() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const renderLinkItems = () => (
        <ul className={`w-full flex flex-col md:flex-row md:gap-4 ${isMobile ? 'items-start' : 'items-center'}`}>
            {links.map((link, i) => (
                <li key={i} className={` group relative ${isMobile ? 'w-full' : ''}`} onMouseEnter={() => link.hasChildren ? setHoveredIndex(i) : setHoveredIndex(null)}>
                    <Link
                        href={link.href}
                        className={cn(
                            `text-sm font-medium  flex ${isMobile ? 'w-full  justify-between' : 'justify-start'} items-center p-2 gap-1 hover:bg-orange-50 rounded-2xl hover:text-[#DDA865]`
                        )}
                    >
                        <section className='flex flex-row justify-center items-center gap-1'>
                            {isMobile && link.hasIcon && <span className='text-[#B8B9BF] group-hover:text-[#DDA865]'>{link.icon}</span>}
                            <span>{link.title}</span>
                        </section>

                        <section>
                            {link.hasChildren && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </section>
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {isMobile ? (
                <section className="w-full h-auto relative bg-gradient-to-b from-[#72814E] to-[#181B10] overflow-hidden">
                    <section className="relative flex justify-between p-2 z-30">
                        <Logo color="white" className="flex items-center" />
                        {!isMenuOpen ? (
                            <HamburgerMenuIcon onClick={() => setIsMenuOpen(true)} className="cursor-pointer" color="white" />
                        ) : (
                            <section onClick={() => setIsMenuOpen(false)} className='rounded-full bg-white h-8 w-8 flex justify-center items-center z-20 cursor-pointer'>
                                <CloseIcon className="cursor-pointer" color="black" />
                            </section>
                        )}
                    </section>

                    {isMenuOpen && (
                        <section className="relative top-0 left-0 w-full h-full z-30 bg-white flex flex-col p-4">
                            <section className="flex flex-col gap-4 items-start mb-4">
                                <button className="bg-[#72814E] text-white hover:bg-[#72814E] w-[141px] h-[44px] flex justify-center rounded-3xl px-2 border-b-2 border-white items-center shadow-[#72814E73] shadow-xl text-sm">
                                    به ما بپیوندید
                                </button>
                            </section>
                            {renderLinkItems()}
                        </section>
                    )}

                    <section className="absolute inset-0 z-0 overflow-hidden opacity-100">
                        <HeaderMobile />
                    </section>
                    <section className="absolute inset-0 z-0 overflow-hidden opacity-20">
                        <NavbarMobile />
                    </section>
                </section>
            ) : (
                <header className="w-full bg-background max-w-6xl xl:max-w-full m-auto px-4 md:px-6">
                    <section className="relative w-full z-50" onMouseLeave={() => setHoveredIndex(null)}>
                        <nav className="flex flex-wrap justify-between items-center bg-white rounded-full px-4 py-3 md:px-6 md:py-4 shadow-[0px_14px_24px_0px_#72814E3D]">
                            <section className="flex items-center gap-4">
                                <section className="text-lg font-bold mx-10">
                                    <Logo />
                                </section>
                                {renderLinkItems()}
                            </section>
                            <section className="flex flex-col md:flex-row items-center gap-2 ml-10 mr-auto">
                                <Link href='/login'>
                                    <button className="text-[#72814E] px-3 py-2 text-sm">ورود/ثبت نام</button>
                                </Link>
                                <button className="bg-[#72814E] text-white hover:bg-[#72814E] w-[141px] h-[44px] flex justify-center rounded-3xl px-2 border-b-2 border-white items-center shadow-[#72814E73] shadow-xl text-sm">
                                    به ما بپیوندید
                                </button>
                            </section>
                        </nav>
                        {hoveredIndex !== null && links[hoveredIndex].hasChildren && (
                            <section className=" w-full left-0 mt-0 px-2 md:px-4 py-6 bg-white shadow-lg rounded-b-xl z-40 overflow-hidden animate-fall-down">
                                {links[hoveredIndex].children}
                            </section>
                        )}
                    </section>
                </header>
            )}
        </>
    );
}