'use client'
import { useState } from "react";
import { UserIcon } from "@/assets/icons/UserIcon";
import { ChevronDown, ChevronLeft, MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Index() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const menus: any = [
        {
            title: "خانه",
            href: "/",
        },
        {
            title: "درباره ما",
            children: [
                {
                    href: "/about-us",
                    title: "تاریخچه"
                },
                {
                    href: "#",
                    title: "وظایف و اختیارت"
                },
                {
                    href: "#",
                    title: "منشور اخلاقی"
                },
                {
                    href: "#",
                    title: "نمودار سازمانی"
                },
                {
                    href: "#",
                    title: "قوانین و مقررات"
                }

            ]
        },
        {
            title: "خدمات",
            children: [
                {
                    href: "#",
                    title: "اطلاعات بیمه ای"
                },
                {
                    href: "#",
                    title: "فرآیند خرید بیمه نامه و ثبت درخواست خسارت"
                },


            ]
        },
        {
            title: "اخبار",
            children: [
                { title: "اخبار و اطلاعیه", href: "/news" },
                { title: "گزیده اخبار", href: "#" },
                { title: "اخبار استان ها", href: "#" },
                { title: "اطلاعیه ها", href: "#" },
                { title: "قوانین و مقررات", href: "#" },
            ]

        },
        {
            title: "سامانه جامع",
            href: "#",
        },
        {
            title: "چندرسانه ای",
            children: [

                { title: "گالری تصاویر", href: "#" },
                { title: "گالری فیلم", href: "#" },

            ]
        },
        {
            title: "قانون شفافیت قوای یگانه",
            href: "#",
        },
        {
            title: "ویژه همکاران",
            href: "#",
        },
        {
            title: "ارتباط با ما",
            href: "/contact-us",
        },
    ]
    return <>
        <div className='flex h-full justify-between items-center px-[10]'>
            <MenuIcon onClick={() => setIsOpenMenu(true)} />
            <div className="flex gap-1">
                <button className="flex h-[40px] items-center justify-center bg-[#35663A] text-white px-4 py-[10px] rounded-lg text-sm font-semibold">
                    <UserIcon />
                    <span>ورود</span>
                </button>
            </div>
        </div>
        {isOpenMenu && <div onClick={() => setIsOpenMenu(false)} className="bg-transparent fixed top-0 left-0 w-full h-full z-50"></div>}
        <aside className={`fixed shadow-2xl h-[100%] top-0 ${isOpenMenu ? `right-0` : `right-[-100%]`} pt-[20px] transition-all duration-500 ease-in-out bg-white z-[200] w-[80%]`}>
            <ul className="flex flex-col gap-4">
                {menus.map((item: any, index: number) => (<li className="mr-3 border-b border-b-slate-100 pb-2 h-full flex items-center  2xl:px-2" key={index}>
                    {item.href && <Link className=" xl:text-xs 2xl:text-[14px] text-black" href={item.href} >
                        {item.title}
                    </Link>}
                    {item.children &&
                        <>
                            <button className="flex gap-1 items-center xl:text-xs 2xl:text-[14px] text-black">
                                {item.title}
                                <ChevronDown className="w-[15px]" />
                            </button>

                        </>
                    }
                </li>))}
            </ul>

        </aside>
    </>
}