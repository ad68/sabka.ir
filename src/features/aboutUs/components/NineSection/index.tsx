"use client"
import React, { useState } from "react";
import { CaretUpIcon } from "@/assets/icons/CaretUpIcon";
import { CaretDownIcon } from "@/assets/icons/CaretDownIcon";

const items = [
    { title: 'قانون بیمه کشاورزی', detail: 'test', id: 1 },
    { title: 'اساسنامه صندوق بیمه کشاورزی', detail: 'test2', id: 2 },
    { title: 'آئین نامه اجرایی تبصره 8', detail: 'test3', id: 3 },
    { title: 'آئین نامه بیمه کشاورزی', detail: 'test4', id: 4 },

]
export default function Index() {
    const [openItemIndex, setOpenItemIndex] = useState(0);
    return (
        <section className='w-full gap-2 mb-[100px]'>
            <p className='text-[#284D2C] text-xl md:text-3xl text-center max-w-4xl mx-auto font-bold md:text-right'>قوانین و مقررات بیمه کشاورزی</p>
            <ul className='w-full flex flex-col gap-2 mt-5 justify-center items-center max-w-4xl mx-auto '>
                {items.map((item, i) => (
                    <li key={i} className="w-full cursor-pointer p-2 transition-transform duration-500 ease-in-out  py-2  " onClick={() => setOpenItemIndex(i === openItemIndex ? -1 : i)}>
                        <section className={`flex flex-row justify-between items-center gap-2 p-4 rounded-full ${i === openItemIndex ? 'bg-[#558C5A] text-white' : 'bg-transparent'}`}>
                            <p className="text-sm">{item.title}</p>

                            {i === openItemIndex && <CaretUpIcon fill='#fff'
                                className="cursor-pointer w-3 h-3 "

                            />}
                            {i !== openItemIndex && <CaretDownIcon fill='#000'
                                className="cursor-pointer w-3 h-3"
                            />}
                        </section>
                        <section
                            className={`overflow-hidden max-w-2xl transition-max-height duration-500 ease-in-out ${openItemIndex === i ? "max-h-96 opacity-100 px-5" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-black  mt-2   tracking-wide md:tracking-normal p-5 md:p-2 text-sm border-solid  rounded-2xl md:rounded-lg  text-right ">{item.detail}</p>

                        </section>
                    </li>

                ))}
            </ul>
        </section>
    )
}