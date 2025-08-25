import FooterBg from "@/assets/img/footer/FooterBg.png";
import { LogoIcon } from "@/assets/icons/LogoIcon";
import { LeafIcon } from "@/assets/icons/LeafIcon";
import React from "react";
import { MapIcon } from "@/assets/icons/MapIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { FaxIcon } from "@/assets/icons/FaxIcon";
import SocialMedia from "@/features/landing/components/SocialMedia";
import Image from "next/image";
export default function Index() {
    return (
        <footer
            className="w-full  bg-gradient-to-r from-white via-[#e9aa1e] to-white mt-20 bg-cover pt-[5px] bg-no-repeat bg-center  overflow-hidden"

        >
            <div className="w-full h-full bg-white p-6 md:p-10 lg:p-10 bg-no-repeat bg-left-bottom xl:bg-repeat" style={{ backgroundImage: `url(${FooterBg.src})` }}>
                <div className="max-w-7xl mx-auto w-full space-y-10 h-full ">
                    {/* Top Section */}
                    <section className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                        {/* Logo + Slogan */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full md:w-1/3">
                            <LogoIcon className="w-20 h-20" />
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
                                تهران - خیابان شهید دکتر حبیب الهــــــی - خیابان یکم دریان نو (سروش یکم) - تقاطع زنجان شمالی - پلاک 58
                            </p>
                            <p className="flex gap-2 items-center text-sm">
                                <PhoneIcon className="w-5 h-5" />
                                64009000
                            </p>
                            <p className="flex gap-2 items-center text-sm">
                                <FaxIcon className="w-5 h-5" />
                                66408715
                            </p>
                        </div>

                        {/* Useful Links 1 */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">پیوندها</h3>
                            <ul className="text-sm space-y-2 text-right">
                                <li>وزارت جهاد کشاورزی</li>
                                <li>بانک کشاورزی</li>
                                <li>بیمه مرکزی جمهوری اسلامی ایران</li>
                                <li>سازمان هواشناسی کشور</li>
                                <li>مجلس شورای اسلامی</li>
                            </ul>
                        </div>

                        {/* Useful Links 2 */}
                        <div className="flex relative flex-col gap-4">
                            <div className="absolute top-[-10] xl:top-[-100px] left-0 xl:right-0 flex items-center gap-2">
                                <Image width={100} height={100} src="/assets/img/landing/slogan.png" className="w-[60px] h-[60px] xl:w-[85px] xl:h-[85px]" alt="" />
                                <Image width={100} height={100} src="/assets/img/landing/iran-flag.webp" className="w-[55px] h-[55px] xl:w-[80px] xl:h-[80px]" alt="" />
                            </div>
                            <h3 className="font-bold text-lg">پیوندها</h3>
                            <ul className="text-sm space-y-2 text-right">
                                <li>پایگاه اطلاع رسانی دولت</li>
                                <li>پایگاه اطلاع رسانی مقام معظم رهبری</li>
                                <li>پایگاه اطلاع رسانی ریاست جمهوری</li>
                                <li>پایگاه اطلاع رسانی پژوهشکده بیمه</li>
                                <li>پایگاه اطلاع رسانی سازمان نظام مهندسی کشاورزی و منابع طبیعی</li>
                            </ul>
                        </div>
                    </section>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-300 pt-4 text-sm text-gray-600">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-4">
                            <span>© ۲۰۲۵ کلیه حقوق متعلق به صندوق بیمه کشاورزی می‌باشد</span>
                            <span>طراحی و توسعه توسط شرکت سامانه نوآوری ایرانیان پوشش (سناپ)</span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
