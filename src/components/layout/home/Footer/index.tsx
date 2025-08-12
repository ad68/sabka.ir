import Link from "next/link";
import { ShopIcon } from "@/assets/icons/ShopIcon";
import React from "react";
import {EnamadIcon} from "@/assets/icons/EnamadIcon";
import {EnamadTwoIcon} from "@/assets/icons/EnamadTwoIcon";

const footerLinks = [
    {
        title: "لینکهای مفید",
        links: [
            { label: "فروشگاه", href: "#", icon: <ShopIcon /> },
            { label: "همکاری با ما", href: "#", icon: null },
            { label: "درباره ما", href: "#", icon: null },
            { label: "قوانین و مقررات", href: "#", icon: null },
        ],
    },
    {
        title: "خدمات",
        links: [
            { label: "درخواست پرستا /همراه", href: "#", icon: null },
            { label: "درخواست آمبولانس", href: "#", icon: null },
            { label: "درخواست خرید کالا", href: "#", icon: null },
            { label: "درخواست وقت مشاوره", href: "#", icon: null },
        ],
    },
    {
        title: "ارتباط با ما",
        links: [
            { label: "سوالات متواول", href: "#", icon: null },
            { label: "تماس با ما", href: "#", icon: null },
            { label: "همکاری با ما", href: "#", icon: null },
        ],
    },
];


export default function Index() {
    return (
        <footer className='w-full flex flex-col justify-between mt-5'>
            <section className="w-full max-w-5xl m-auto  flex flex-row justify-between p-5">
                {footerLinks.map(({ title, links }) => (
                    <section key={title} className="flex flex-col gap-2 ">
                        <p className="font-bold">{title}</p>
                        {links.map(({ label, href, icon }) => (
                            <Link
                                key={label}
                                href={href}
                                className="flex flex-row gap-2 items-center hover:bg-orange-50 rounded-2xl hover:text-[#DDA865]"
                            >
                                {icon && <span>{icon}</span>}
                                <span>{label}</span>
                            </Link>
                        ))}
                    </section>

                ))}
                <section className='flex flex-row items-center justify-center'>
                    <EnamadIcon />
                    <EnamadTwoIcon/>
                </section>
            </section>

            <div className="h-[1px] bg-black bg-opacity-15 w-full mt-5"></div>

            <p dir={'ltr'} className="w-full flex flex-row justify-center items-center">
               <span className='my-4'> ©&nbsp;2021 Zhavar. All rights reserved</span>
            </p>
        </footer>
    );
}
