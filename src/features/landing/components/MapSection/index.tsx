"use client"
import { LeafIcon } from "@/assets/icons/LeafIcon";
import React from "react";
import IranProvincesMap from "./components/IranMap4";
import { SearchIcon } from "@/assets/icons/SearchIcon";

export default function Index() {
    const provinces = [
        "آذربایجان شرقی",
        "آذربایجان غربی",
        "اردبیل",
        "اصفهان",
        "البرز",
        "ایلام",
        "بوشهر",
        "تهران",
        "چهارمحال و بختیاری",
        "خراسان جنوبی",
        "خراسان رضوی",
        "خوزستان",
        "زنجان",
        "سمنان",
        "سیستان و بلوچستان",
        "فارس",
        "قزوین",
        "قم",
        "کردستان",
        "کرمان",
        "کرمان جنوبی",
        "کهگیلویه و بویراحمد",
        "گلستان",
        "گیلان",
        "لرستان",
        "مازندران",
        "مرکزی",
        "هرمزگان",
        "همدان",
        "یزد"
    ];
    return (
        <section className="w-full mt-[96px] xl:mt-[150px] mb-20">
            <div
                className='max-w-6xl m-auto px-[20px] xl:flex-row'
            >
                <div className='w-full mt-8 flex flex-col justify-start items-start md:justify-start md:items-start gap-3'>
                    <span className='flex flex-row gap-2 text-[16px] '>
                        کشاورزی، ستون خودکفایی ملی
                        <LeafIcon />
                    </span>
                    <p className='text-3xl font-bold'>نمایندگی در استان ها</p>
                    <div className='text-right md:text-center max-w-2xl text-sm xl:text-base'>استان مورد نظر را از طریق نقشه پیدا کنید و یا در قسمت جستجو نام استان یا شهر خود را وارد کنید.</div>
                </div>
                <div className='flex flex-col xl:flex-row justify-center items-end gap-[22px] mt-[48px]'>
                    <div
                        className="max-w-[558px] order-2 xl:order-1 flex flex-col justify-center items-center gap-3 w-full rounded-2xl bg-opacity-5">
                        <div className="relative w-full">
                            <input type="text" id="search"
                                className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="استان ، شهر ،.." />
                            <SearchIcon className='w-4 h-4 ml-2  absolute right-1 bottom-1/2 translate-y-1/2' />
                        </div>
                        <div className="grid grid-cols-2 order-1 xl:order-2 md:grid-cols-3 gap-4 items-center w-full mt-[15px] rounded-2xl bg-gradient-radial from-[#f3fce8]  to-[#edffff]  p-3">
                            {provinces.map((province) => (
                                <div
                                    key={province}
                                    className="py-2 px-4 font-semibold text-sm bg-white rounded-full shadow-sm text-center cursor-pointer hover:bg-[#E9AA1E] hover:text-white transition"
                                >
                                    {province}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full xl:w-[547px] order-1'>
                        <IranProvincesMap />
                    </div>
                </div>

            </div>
        </section>
    )
}