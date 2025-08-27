'use client'
import { useState } from "react";
import { UserIcon } from "@/assets/icons/UserIcon";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Collapse from './components/Collapse'
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
            href: "/about-us"
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
            children: [
                { title: "سامانه جامع", href: "https://cs.sabka.ir/Login.aspx" },
                { title: "اپلیکیشن ارزیابان", href: "https://bakapp.ir" },
                { title: "امداد رایانه", href: "http://itreq.sbkiran.ir/" },
                { title: "پست الکترونیک", href: "http://mail.sbkiran.ir/" },
                { title: "سیمای مهر", href: "https://didgah.bki.ir/" },
            ]
        },
        {
            title: "ویژه همکاران",
            children: [
                { title: "اطلاعات مدیران و کارکنان", href: "/employee-info" },

                {
                    title: "اطلاعات و صورت های مالی", href: "/finance-data"
                },
                {
                    title: "آرای قطعی مراجع قضایی", href: "/legal-cases"
                },
                {
                    title: "قراردادها", href: "/contracts"
                },
                {
                    title: "تعرفه ها", href: "https://cs.sabka.ir/_Public/Services/Plans/Filter.aspx"
                },
                {
                    title: "فرصت های اشتغال", href: "/employment"
                },
                {
                    title: "فرایند اخذ مجوز ها و پروانه فعالیت", href: "https://mojavez.ir/"
                },
            ]
        },
        {
            title: "ارتباط با ما",
            href: "/contact-us",
        },
    ]
    return <>
        <div className='flex h-full justify-between items-center px-[10]'>
            <div className="w-[78px] h-[40px] border flex justify-center items-center rounded-lg border-primary">
                <MenuIcon className="text-primary" onClick={() => setIsOpenMenu(true)} />
            </div>
            <Image width={100} height={100} className="w-[40px]" src="/assets/img/logo.png" alt="logo" />
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
                        <Collapse title={item.title} subMenus={item.children} />
                    }
                </li>))}
            </ul>

        </aside>
    </>
}