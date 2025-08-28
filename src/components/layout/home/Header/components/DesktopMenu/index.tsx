'use client'
import { ChevronDown, ChevronsLeft } from "lucide-react";
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
            big: true,
            children: [
                { title: "بیمه محصولات زراعی", subMenus: [] },
                { title: "بیمه محصولات باغی", subMenus: [] },
                { title: "بیمه دام و طیور و آبزیان", subMenus: [] },
                {
                    title: "عوامل تولید", subMenus: [
                        { title: "سرمایه", href: "#" },
                        { title: "تنه درختان", href: "#" },
                        { title: "ماشین آلات", href: "#" },
                        { title: "تاسیسات", href: "#" },
                        { title: "ابنیه", href: "#" },
                    ]
                },
                {
                    title: "سایر", subMenus: [
                        { title: "منابع طبیعی", href: "#" },
                        { title: "گیاهان دارویی", href: "#" },
                        { title: "سبزیجات", href: "#" },
                        { title: "صیفی جات", href: "#" },
                        { title: "محصولات گلخانه ای", href: "#" },
                        { title: "گلهای زینتی", href: "#" },
                    ]
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

            title: "قانون شفافیت قوای یگانه",
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
                <div className="wrapper relative bg-[#e9aa1e] w-[80%] h-[80px] items-center xl:flex xl:px-[20px] 2xl:px-[50px]">
                    <div className="w-[100px] flex flex-col items-center">
                        <Link href="/">
                            <Image width={100} height={100} className="w-[50px]" src="/assets/img/logo.png" alt="logo" />
                        </Link>
                        <span className="text-[10px] font-semibold">صندوق بیمه کشاورزی</span>
                    </div>

                    <ul className="nav-links items-center xl:mr-0 2xl:mr-[70px]">
                        {menus.map((item: any, index: number) => (<li className="mr-3 h-full flex items-center relative 2xl:px-2" key={index}>
                            {item.href && <Link className=" xl:text-xs 2xl:text-[14px] font-bold text-black" href={item.href} >
                                {item.title}
                            </Link>}
                            {item.children && !item.big &&
                                <>
                                    <button className="flex gap-1 items-center font-bold xl:text-xs 2xl:text-[14px] text-black">
                                        {item.title}
                                        <ChevronDown className="w-[15px]" />
                                    </button>
                                    <div className="mega-box">
                                        <div className="content overflow-hidden relative rounded-xl">
                                            <ul className="flex flex-col justify-center gap-1">
                                                {item?.children.map((item: any, index: number) => (
                                                    <li key={index} className="hover:bg-[#7BB28033] transition-all px-[4px] py-[4px] rounded-md">
                                                        <Link className="text-sm flex items-center gap-2" href={item.href}>
                                                            <ChevronsLeft className="w-[15px] text-secondary" />
                                                            {item.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            }
                            {item.children && item.big &&
                                <>
                                    <button className="flex gap-1 items-center font-bold xl:text-xs 2xl:text-[14px] text-black">
                                        {item.title}
                                        <ChevronDown className="w-[15px]" />
                                    </button>
                                    <div className="mega-box big">
                                        <div className="content overflow-hidden relative rounded-xl">
                                            <div className="flex gap-2">
                                                {item.children.map((item: any, index: number) => (<div key={index} className="flex flex-col gap-2">
                                                    <span className="font-bold text-sm">{item.title}</span>
                                                    <span className="block h-1 bg-primary w-[30px]"></span>
                                                    <div key={index} className="flex flex-col gap-2 w-[200px]">
                                                        {
                                                            item.subMenus.map((item: any, index: number) => (<>
                                                                <Link key={index} className="text-sm font-light hover:bg-[#7BB28033]  transition-all rounded-sm flex items-center gap-1" href={item.href}>
                                                                    <ChevronsLeft className="w-[15px] text-secondary" />
                                                                    {item.title}</Link >
                                                            </>))
                                                        }
                                                    </div>
                                                </div>
                                                ))}
                                            </div>

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
