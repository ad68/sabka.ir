"use client";

import MenuItem, { MenuItemType } from "./components/MenuItem";
import { useState } from "react";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeaderBg from '@/assets/img/landing/HeaderBg.png';
import { HamburgerMenuIcon } from "@/assets/icons/HamburgerMenuIcon";

const menuItemsProducts: MenuItemType[] = [
    {
        title: "اطلاعات بیمه ای",
        children: [
            { title: "بیمه محصولات زراعی", onClick: () => { } },
            { title: "بیمه محصولات باغی و طبیعی", onClick: () => { } },
            { title: "معرفی بیمه منابع طبیعی", onClick: () => { } },
            { title: "بیمه عوامل تولید کشاورزی", onClick: () => { } },
            { title: "بیمه محصولات زراعی", onClick: () => { } },
        ],
        onClick: () => { },
    },
    { title: "آئین نامه و دستورالمل ها", onClick: () => { } },
    { title: "تعرفه های بیمه گری", onClick: () => { } },
    { title: "فرآیندهای بیمه و خساریت", onClick: () => { } },
];

const links = [
    { title: "خانه", href: "/", hasChildren: false, hasIcon: false },
    { title: "محصوات", href: "/products", hasChildren: false, hasIcon: true, icon: "" },
    {
        title: "اخبار",
        href: "/",
        hasChildren: true,
        hasIcon: true,
        icon: "",
        children: <MenuItem menuItems={menuItemsProducts} />,
    },
    { title: "ویژه همکاران", href: "/", hasChildren: false, hasIcon: false },
    { title: "تالار ترویج بیمه", href: "/", hasChildren: false, hasIcon: false },
    { title: "قانون شفافیت قوای یگانه", href: "/", hasChildren: false, hasIcon: false },
    { title: "درباره ما", href: "/", hasChildren: false, hasIcon: false },
    {
        title: "ارتباط با ما",
        href: "/",
        hasChildren: false,
        hasIcon: false,
    },
];

export default function Index() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});

    function openMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function toggleSubmenu(index: number) {
        setOpenSubmenus(prev => ({
            ...prev,
            [index]: !prev[index],
        }));
    }

    const renderLinkItems = () => (
        <ul className={`w-full flex flex-col md:flex-row gap-1 md:gap-2 lg:gap-4 ${isMobile ? "items-start" : "items-center"}`}>
            {links.map((link, i) => (
                <li
                    key={i}
                    className={`group relative ${isMobile ? "w-full" : ""}`}
                    onMouseEnter={() => !isMobile && link.hasChildren ? setHoveredIndex(i) : null}
                    onMouseLeave={() => !isMobile && link.hasChildren ? setHoveredIndex(null) : null}
                >
                    <button
                        onClick={() => {
                            if (isMobile && link.hasChildren) {
                                toggleSubmenu(i);
                            } else {
                                setIsMenuOpen(false);
                            }
                        }}
                        className={cn(
                            `text-sm font-medium flex w-full justify-between items-center p-2 gap-1 hover:bg-green-50 rounded-2xl hover:text-[##E3E6DC02]`
                        )}
                    >
                        <section className="flex flex-row justify-start items-center gap-1">
                            {isMobile && link.hasIcon && (
                                <span className="text-[#B8B9BF] group-hover:text-[##E3E6DC02]">{link.icon}</span>
                            )}
                            <span className="text-xs lg:text-sm font-semibold max-w-[80px] text-right md:max-w-[100px] lg:max-w-fit">
                                {link.title}
                            </span>
                        </section>

                        <section>
                            {link.hasChildren && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className={`w-4 h-4 transform transition-transform duration-200 ${openSubmenus[i] ? "rotate-180" : ""
                                        }`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </section>
                    </button>

                    {/* Render submenu (mobile only) */}
                    {isMobile && link.hasChildren && openSubmenus[i] && (
                        <div className="pl-4 pt-1">{link.children}</div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {isMobile ? (
                <section className="w-full z-40 h-auto relative overflow-visible">
                    <section className="relative w-full flex justify-start">
                        <section className="relative w-[80%] h-[74px] z-10">
                            <Image src={HeaderBg.src} alt="sabka" fill />
                            <section className="absolute top-0 left-0 z-20 flex justify-between items-center w-full h-full px-6 text-black">
                                <HamburgerMenuIcon onClick={openMenu} className="cursor-pointer" />
                                <span className="text-sm font-semibold">شنبه 4 مرداد 1404</span>
                            </section>
                        </section>
                    </section>

                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <div
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
                            ></div>

                            {/* Menu Panel */}
                            <nav className="fixed top-[0] left-0 right-0 bg-white z-[9999] p-4 shadow-lg max-h-[calc(100vh-74px)] overflow-auto">
                                <div className="flex justify-end mb-4">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-gray-600 hover:text-yellow-500 text-sm font-semibold"
                                    >
                                        ✕
                                    </button>
                                </div>
                                {renderLinkItems()}
                            </nav>
                        </>
                    )}
                </section>
            ) : (
                <section className="relative w-full">
                    {/* <section className="absolute top-0 right-0 w-full md:w-[90%] lg:w-[80%] overflow-hidden">
                        <Image className="w-full h-[74px]" src={HeaderBg.src} alt="sabka" width={200} height={100} />
                    </section> */}
                    <div className="trap trap-top-short font-">
                        <section
                            className="relative w-full z-50"
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Main Navigation Bar */}
                            <nav className="flex flex-wrap justify-between items-center px-4 py-3 md:px-0 xl:px-4 md:py-4">
                                <section className="flex items-center gap-4">{renderLinkItems()}</section>
                            </nav>

                            {/* Submenu dropdown - absolutely positioned */}
                            {hoveredIndex !== null && links[hoveredIndex].hasChildren && (
                                <div
                                    className="absolute top-[74px] left-0 w-full bg-white z-[999] shadow-md animate-fade-down"
                                    onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="px-4 py-6">{links[hoveredIndex].children}</div>
                                </div>
                            )}
                        </section>

                    </div>



                </section>
            )}
        </>
    );
}
