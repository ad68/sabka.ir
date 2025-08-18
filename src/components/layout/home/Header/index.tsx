"use client";

import MenuItem, { MenuItemType } from "./components/MenuItem";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@/assets/icons/HamburgerMenuIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";

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
    { title: "درباره ما", href: "/", hasChildren: false, hasIcon: false },
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
    { title: "ارتباط با ما", href: "/", hasChildren: false, hasIcon: false },
];

export default function Index() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});

    const navRef = useRef<HTMLDivElement | null>(null);
    const [dropdownTop, setDropdownTop] = useState<number>(0);
    const closeTimerRef = useRef<number | null>(null);

    const calcDropdownTop = () => {
        if (!navRef.current) return;
        const rect = navRef.current.getBoundingClientRect();
        setDropdownTop(rect.bottom + window.scrollY);
    };

    useEffect(() => {
        if (hoveredIndex !== null && !isMobile) {
            calcDropdownTop();
            const onScrollOrResize = () => calcDropdownTop();
            window.addEventListener("scroll", onScrollOrResize, { passive: true });
            window.addEventListener("resize", onScrollOrResize);
            return () => {
                window.removeEventListener("scroll", onScrollOrResize);
                window.removeEventListener("resize", onScrollOrResize);
            };
        }
    }, [hoveredIndex, isMobile]);

    function openMenu() {
        setIsMenuOpen((s) => !s);
    }

    function toggleSubmenu(index: number) {
        setOpenSubmenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    }

    const scheduleClose = () => {
        if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = window.setTimeout(() => setHoveredIndex(null), 120);
    };
    const cancelClose = () => {
        if (closeTimerRef.current) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    const renderLinkItems = () => (
        <ul className={`w-full flex flex-col md:flex-row gap-0 lg:gap-2 ${isMobile ? "items-start" : "items-center"}`}>
            {links.map((link, i) => (
                <li
                    key={i}
                    className={`group relative ${isMobile ? "w-full" : ""}`}
                    onMouseEnter={() => {
                        if (!isMobile && link.hasChildren) {
                            cancelClose();
                            setHoveredIndex(i);
                        }
                    }}
                    onMouseLeave={() => {
                        if (!isMobile && link.hasChildren) scheduleClose();
                    }}
                >
                    <button
                        onClick={() => {
                            if (isMobile && link.hasChildren) {
                                toggleSubmenu(i);
                            } else {
                                setIsMenuOpen(false);
                            }
                        }}
                        aria-expanded={openSubmenus[i]}
                        aria-haspopup={link.hasChildren}
                        className={cn(
                            "text-sm font-medium flex w-full justify-between items-center p-2 gap-1 hover:bg-green-50 rounded-2xl "
                        )}
                    >
                        <section className="flex flex-row justify-start items-center gap-1">
                            {isMobile && link.hasIcon && link.icon && (
                                <span className="text-[#B8B9BF] group-hover:text-[#E3E6DC02]">{link.icon}</span>
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

                    {isMobile && link.hasChildren && openSubmenus[i] && (
                        <section className="pl-4 pt-1">{link.children}</section>
                    )}
                </li>
            ))}
        </ul>
    );

    const desktopDropdown =
        hoveredIndex !== null &&
        !isMobile &&
        links[hoveredIndex]?.hasChildren &&
        typeof window !== "undefined" &&
        createPortal(
            <div
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                style={{
                    position: "fixed",
                    top: dropdownTop,
                    left: 0,
                    right: 0,
                    zIndex: 999999,
                }}
                className="bg-white shadow-md"
            >
                <section className="px-6 py-4 w-full">
                    <div className="block w-full">{links[hoveredIndex].children}</div>
                </section>
            </div>,
            document.body
        );

    return (
        <>
            {isMobile ? (
                <section className="w-full z-40 h-auto relative overflow-visible">
                    <section className="relative w-full flex justify-start">
                        <section className="relative w-[80%] h-[74px] z-10 trap trap-top-short">
                            <section className="absolute top-0 left-0 z-20 flex justify-between items-center w-full h-full px-6 text-black">
                                <HamburgerMenuIcon onClick={openMenu} className="cursor-pointer" />
                                <span className="text-sm font-semibold ml-3">شنبه 4 مرداد 1404</span>
                            </section>
                        </section>
                    </section>

                    {isMenuOpen && (
                        <>
                            <section
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
                            />
                            <nav className="fixed top-0 left-0 right-0 bg-white z-[9999] p-4 shadow-lg max-h-[calc(100vh-74px)] overflow-auto">
                                <section className="flex justify-end mb-4">
                                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-yellow-500 text-sm font-semibold">
                                        <CloseIcon />
                                    </button>
                                </section>
                                {renderLinkItems()}
                            </nav>
                        </>
                    )}
                </section>
            ) : (
                <section className="relative w-full">
                    <section className="trap trap-top-short md:pr-[5px] lg:pr-[10px] xl:pr-[150px] overflow-visible">
                        <section
                            ref={navRef}
                            className="relative w-full z-50 overflow-visible"
                            onMouseLeave={scheduleClose}
                            onMouseEnter={cancelClose}
                        >
                            <nav className="flex flex-wrap justify-between items-center px-4 py-3 md:px-0 xl:px-4 md:py-4">
                                <section className="flex items-center gap-4">{renderLinkItems()}</section>
                            </nav>
                        </section>
                    </section>

                    {desktopDropdown}
                </section>
            )}
        </>
    );
}
