"use client"
import {LeafIcon} from "@/assets/icons/LeafIcon";
import React from "react";
import IranProvincesMap from "@/features/landing/components/MapSection/components/IranMap";
import {SearchIcon} from "@/assets/icons/SearchIcon";

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

    const handleSelect = (provinceKey: string) => {
        // provinceKey مثل "tehran" ، "fars" ...
        console.log("Selected:", provinceKey);
    };

    const data = { tehran: 1, fars: 0, yazd: 5 }; // دلخواه
    return ( <section
        className='w-full bg-contain
          flex flex-col md:flex-row flex-wrap  gap-10 justify-center items-center min-h-screen p-10'
        >

        <section className='w-full mt-8 flex flex-col justify-start items-start md:justify-start md:items-start gap-3'>
               <span className='flex flex-row gap-2'>
                کشاورزی، ستون خودکفایی ملی
                   <LeafIcon />
               </span>

            <p className='text-3xl font-bold'>نمایندگی در استان ها</p>
            <section className='text-right md:text-center max-w-2xl'>استان مورد نظر را از طریق نقشه پیدا کنید و یا در قسمت جستجو نام استان یا شهر خود را وارد کنید.</section>
        </section>

{/*
        <div style={{ fontFamily: "Vazirmatn, sans-serif", direction: "rtl" }}>
            <IranMap
                data={data}
                colorRange="30, 70, 181"
                width={720}
                textColor="#111"
                tooltipTitle="استان:"
                selectProvinceHandler={handleSelect}
            />
        </div>
*/}
        <section className='w-full flex flex-col-reverse md:flex-row justify-center items-center gap-2'>
            <section
                className="max-w-4xl flex flex-col justify-center items-center gap-3 w-full p-3 rounded-2xl bg-opacity-5 bg-gradient-to-t from-[#f3fce8] to-[#edffff]  ">
                <section className="relative w-full">
                    <input type="text" id="search"
                           className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                           placeholder="استان ، شهر ،.."/>
                    <SearchIcon className='w-4 h-4 ml-2 absolute right-1 bottom-1/2 translate-y-1/2' />

                </section>

                <section className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center w-full">
                    {provinces.map((province) => (
                        <section
                            key={province}
                            className="py-2 px-4 font-semibold text-sm bg-white rounded-full shadow-sm text-center cursor-pointer hover:bg-[#E9AA1E] hover:text-white transition"
                        >
                            {province}
                        </section>
                    ))}
                </section>
            </section>
            <section className='w-full'>
                <IranProvincesMap width={500} height={400} onSelect={(name) => alert(`استان انتخاب‌شده: ${name}`)}/>
            </section>
        </section>


    </section>)
}