import FooterBg from "@/assets/img/footer/FooterBg.png";

import { LeafIcon } from "@/assets/icons/LeafIcon";
import React from "react";
import { MapIcon } from "@/assets/icons/MapIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { FaxIcon } from "@/assets/icons/FaxIcon";
import SocialMedia from "@/features/landing/components/SocialMedia";
import Image from "next/image";
import { news } from "@/constant/global";
import { NewsDetail } from "@/features/newsDetail/types";
import Link from "next/link";
export default function Index() {
    return (
        <footer
            className="w-full bg-gradient-to-r from-white via-[#e9aa1e] to-white  bg-cover pt-[5px] bg-no-repeat bg-center  overflow-hidden"
        >
            <div className="w-full h-full bg-white p-6 md:p-10 lg:p-10 bg-no-repeat bg-left-bottom xl:bg-repeat" style={{ backgroundImage: `url(${FooterBg.src})` }}>
                <div className="max-w-7xl mx-auto w-full space-y-10 h-full ">
                    {/* Top Section */}
                    <section className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                        {/* Logo + Slogan */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full md:w-1/3">
                            <div className="w-[100px] flex flex-col items-center">
                                <Image width={100} height={100} className="w-[70px]" src="/assets/img/logo.png" alt="logo" />
                                <span className="text-[10px] font-semibold">صندوق بیمه کشاورزی</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-right">
                                <span className="flex flex-row gap-2 items-center">
                                    کشاورزی، ستون خودکفایی ملی
                                    <LeafIcon className="w-5 h-5" />
                                </span>
                                <p className="text-xl font-bold">بیمه بانک کشاورزی</p>
                            </div>
                        </div>

                        {/* Social Media - only visible on mobile */}
                        <div className="md:hidden w-full">
                            <SocialMedia />
                        </div>
                    </section>

                    {/* Middle Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">ارتباط با ما</h3>
                            <p className="flex gap-2 items-start text-sm leading-relaxed">
                                <MapIcon className="w-6 h-6" />
                                تهران - خیابان شهید دکتر حبیب الهی - خیابان یکم دریان نو (سروش یکم) - تقاطع زنجان شمالی - پلاک 58
                            </p>
                            <a href="tel:64009000" className="flex gap-2 items-center text-sm">
                                <PhoneIcon className="w-5 h-5" />
                                64009000
                            </a>
                            <p className="flex gap-2 items-center text-sm">
                                <FaxIcon className="w-5 h-5" />
                                66408715
                            </p>
                        </div>

                        {/* Useful Links 1 */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">پیوندها</h3>
                            <ul className="w-[360px] text-sm space-y-2 text-right h-[150px]  my-scroll-box">
                                <li>
                                    <a href="https://dolat.ir" target="_blank">پایگاه اطلاع رسانی دولت</a>
                                </li>
                                <li>
                                    <a href="https://www.maj.ir" target="_blank">وزارت جهاد کشاورزی</a>
                                </li>
                                <li>
                                    <a href="https://www.bki.ir" target="_blank">بانک کشاورزی</a>
                                </li>
                                <li>
                                    <a href="https://www.centinsur.ir" target="_blank">بیمه مرکزی جمهوری اسلامی ایران</a>
                                </li>
                                <li>
                                    <a href="https://www.irimo.ir/far/index.php" target="_blank">سازمان هواشناسی کشور</a>
                                </li>
                                <li>
                                    <a href="https://www.parliran.ir" target="_blank">مجلس شورای اسلامی</a>
                                </li>
                                <li>
                                    <a href="https://farsi.khamenei.ir" target="_blank">پایگاه اطلاع رسانی مقام معظم رهبری</a>
                                </li>
                                <li>
                                    <a href="https://president.ir/fa/" target="_blank">پایگاه اطلاع رسانی ریاست جمهوری</a>
                                </li>
                                <li>
                                    <a href="https://www.irc.ac.ir/fa-IR/Irc/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C" target="_blank">پایگاه اطلاع رسانی پژوهشکده بیمه</a>
                                </li>
                                <li>
                                    <a href="https://www.iaeo.org" target="_blank">پایگاه اطلاع رسانی سازمان نظام مهندسی کشاورزی و منابع طبیعی</a>
                                </li>
                            </ul>
                        </div>

                        {/* Useful Links 2 */}
                        <div className="flex relative flex-col gap-4">
                            <div className="absolute top-[-20] xl:top-[-100px] left-0 xl:left-0 flex items-center gap-2">
                                <Image width={100} height={100} src="/assets/img/landing/slogan.png" className="w-[60px] h-[60px] xl:w-[85px] xl:h-[85px]" alt="" />
                                <Image width={100} height={100} src="/assets/img/landing/iran-flag.webp" className="w-[55px] h-[55px] xl:w-[80px] xl:h-[80px]" alt="" />
                            </div>
                            <h3 className="font-bold text-lg">آخرین اخبار</h3>
                            <ul className="text-sm space-y-2 text-right">
                                {news.slice(0, 4).map((item: NewsDetail, index: number) => (
                                    <li key={index}>
                                        <Link href={"/news/" + item.id}>{item.title}</Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </section>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-300 pt-4 text-sm text-gray-600">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                            <span>© ۲۰۲۵ کلیه حقوق متعلق به صندوق بیمه کشاورزی می‌باشد</span>
                            <span>طراحی و توسعه توسط شرکت دانش بنیان سناپ</span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
