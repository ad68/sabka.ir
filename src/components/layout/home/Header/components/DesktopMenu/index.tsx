'use client'
import { ChevronDown, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
/* import { useEffect } from "react"; */
import { EmailIcon } from "@/assets/icons/EmailIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { IranFlag } from "@/assets/icons/IranFlag";
import { UserIcon } from "@/assets/icons/UserIcon";

export default function Index({ menuClass }: any) {
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
            href: "#",
        },
        {
            title: "ویژه همکاران",
            children: [
                { title: "سامانه جامع", href: "https://cs.sabka.ir/Login.aspx" },
                { title: "اپلیکیشن ارزیابان", href: "https://bakapp.ir" },
                { title: "امداد رایانه", href: "http://itreq.sbkiran.ir/" },
                { title: "پست الکترونیک", href: "http://mail.sbkiran.ir/" },
                { title: "سیمای مهر", href: "https://didgah.bki.ir/" },

            ]
        },
        {
            title: "ارتباط با ما",
            href: "/contact-us",
        },
    ]
    /*  useEffect(() => {
          window.addEventListener("scroll", listenScrollEvent);
     
     }, []); */
    // ─── Functions ──────────────────────────────────────────────────────────────────
    /*     const listenScrollEvent = (e: any) => {
            if (window.scrollY > 0) {
                setMenuClass("#5606a8");
            } else {
                setMenuClass(mode === "dark" ? "#5606a8" : mode === "light" ? "#FFFFFF26" : "");
            }
        }; */
    //

    return (
        <>
            <nav className="menuBox z-[9998] flex" style={{ backgroundColor: menuClass }}>
                <div className="wrapper relative bg-[#e9aa1e] w-[80%] h-[80px] items-center xl:flex xl:px-[20px] 2xl:px-[70px]">
                    <div className="w-[100px] flex flex-col items-center">
                        <Image width={100} height={100} className="w-[50px]" src="/assets/img/logo.png" alt="logo" />
                        <span className="text-[10px] font-semibold">صندوق بیمه کشاورزی</span>
                    </div>

                    <ul className="nav-links items-center xl:mr-0 2xl:mr-[70px]">
                        {menus.map((item: any, index: number) => (<li className="mr-3 h-full flex items-center 2xl:px-2" key={index}>
                            {item.href && <Link className=" xl:text-xs 2xl:text-[14px] font-bold text-black" href={item.href} >
                                {item.title}
                            </Link>}
                            {item.children &&
                                <>
                                    <button className="flex gap-1 items-center font-bold xl:text-xs 2xl:text-[14px] text-black">
                                        {item.title}
                                        <ChevronDown className="w-[15px]" />
                                    </button>
                                    <div className="mega-box">
                                        <div className="content overflow-hidden relative rounded-xl">
                                            <ul className="flex flex-col gap-2">
                                                {item?.children.map((item: any, index: number) => (
                                                    <li key={index} className="hover:bg-[#7BB28033] transition-all px-[8px] py-[15px] rounded-md">
                                                        <Link className="text-sm flex items-center gap-2" href={item.href}>
                                                            <ChevronLeft className="w-[15px]" />
                                                            {item.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                </>
                            }
                        </li>))}
                    </ul>
                </div>
                <div className="tri mr-[-1px]"></div>
                <div className="flex items-center space-x-4">
                    <a href="sms:20004882" className="flex flex-row items-center gap-1 text-xs px-2 justify-center border-l-[1px] border-l-black">
                        <span className="font-bold text-[14px]">20004882</span>
                        <EmailIcon className='text-primary w-[20px] h-[20px]' />
                    </a>
                    <a href="tel:64009000" className="flex flex-row items-center gap-1 font-bold text-[14px] justify-center px-2">
                        <span>64009000</span>
                        <PhoneIcon className='w-[20px] h-[20px] text-primary' />
                    </a>
                    <button className="w-[72px] h-[40px] flex items-center justify-center gap-[8px] border-[1px] border-black py-[10px] rounded-lg ">
                        <IranFlag />
                        <span>فا</span>
                    </button>
                    <button className="flex h-[40px] items-center justify-center bg-[#35663A] text-white px-4 py-[10px] rounded-lg text-sm font-semibold">
                        <UserIcon />
                        <span>ورود</span>
                    </button>
                </div>
            </nav>
        </>
    );
}
