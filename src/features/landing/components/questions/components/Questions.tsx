"use client"
import { CurveArrowIconTwo } from "@/assets/icons/CurveArrowIconTwo";
import React, { useState } from "react";
import Link from "next/link";
import { MinusIcon } from "@/assets/icons/MinusIcon";
import { PlusIcon } from "@/assets/icons/PlusIcon";
import { Question } from "@/features/landing/components/questions/types";
const items: Question[] = [
    { question: 'چه خدماتی برای عزیزان شما ارائه می‌دهید؟', response: 'ما مجموعه‌ای از خدمات شامل مراقبت‌های پزشکی، پشتیبانی روزانه، مشاوره روانشناسی، و خدمات خانگی برای عزیزان شما ارائه می‌دهیم. همچنین، برنامه‌های خاص برای تقویت سلامت جسمانی و روحی آن‌ها نیز در دسترس است.', id: 1 },
    { question: 'چگونه می‌توانم از خدمات شما استفاده کنم؟', response: 'ما مجموعه‌ای از خدمات شامل مراقبت‌های پزشکی، پشتیبانی روزانه، مشاوره روانشناسی، و خدمات خانگی برای عزیزان شما ارائه می‌دهیم. همچنین، برنامه‌های خاص برای تقویت سلامت جسمانی و روحی آن‌ها نیز در دسترس است.', id: 2 },
    { question: 'آیا خدمات شما در تمام مناطق قابل دسترس است؟', response: 'ما مجموعه‌ای از خدمات شامل مراقبت‌های پزشکی، پشتیبانی روزانه، مشاوره روانشناسی، و خدمات خانگی برای عزیزان شما ارائه می‌دهیم. همچنین، برنامه‌های خاص برای تقویت سلامت جسمانی و روحی آن‌ها نیز در دسترس است.', id: 3 },
    { question: 'چگونه می‌توانم در مورد هزینه‌ها و پرداخت‌ها اطلاعات بیشتری کسب کنم؟', response: 'ما مجموعه‌ای از خدمات شامل مراقبت‌های پزشکی، پشتیبانی روزانه، مشاوره روانشناسی، و خدمات خانگی برای عزیزان شما ارائه می‌دهیم. همچنین، برنامه‌های خاص برای تقویت سلامت جسمانی و روحی آن‌ها نیز در دسترس است.', id: 4 },
]
export default function Index() {
    const [openItemIndex, setOpenItemIndex] = useState(0);
    return (
        <section className='w-full mt-20 bg-[#F1F3EE] flex flex-col gap-2 p-2'>
            <p className='flex flex-row gap-2 justify-center items-center mt-10'><span>سوالات متداول</span> <span><CurveArrowIconTwo className='w-8 h-8' color='#BB4733' /></span></p>
            <p className='text-lg text-center tracking-wide'>
                <span className=' font-bold'>به سوالات شما در اینجا،</span> <span className='font-semibold'> پاسخ داده شده است</span>
            </p>
            <ul className='flex flex-col gap-2 mt-5 max-w-sm md:max-w-3xl justify-center items-center m-auto'>
                {items.map((item, i) => (
                    <li key={i} className="p-2 transition-transform duration-500 ease-in-out border-b border-white py-2  ">
                        <section className="flex flex-row justify-start items-center gap-2">
                            {i === openItemIndex && <MinusIcon
                                className="cursor-pointer w-4 h-4"
                                onClick={() => setOpenItemIndex(i === openItemIndex ? -1 : i)}
                            />}
                            {i !== openItemIndex && <PlusIcon
                                className="cursor-pointer w-4 h-4"
                                onClick={() => setOpenItemIndex(i === openItemIndex ? -1 : i)}
                            />}
                            <p className="text-[#72814E] font-bold font-lg">{item.question}</p>

                        </section>
                        <section
                            className={`overflow-hidden max-w-2xl transition-max-height duration-500 ease-in-out ${openItemIndex === i ? "max-h-96 opacity-100 px-5" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-[#151516] bg-white mt-2 border-r-[6px] border-t-0 border-l-0 border-b-0 md:border-r-4 shadow-[0px_5px_15px_0px_#00042D1A] tracking-wide md:tracking-normal p-5 md:p-2 text-sm border-solid border-r-[#72814E]  rounded-2xl md:rounded-lg  text-right ">{item.response}</p>

                        </section>
                    </li>

                ))}
                <Link href={''} className="flex flex-row items-center my-5 justify-center ">
                    <button className="p-4 w-fit h-6 justify-center items-center  flex flex-row text-sm bg-[#72814E] text-white rounded-3xl shadow-xl shadow-[#72814E73]
                        border-2 border-b-white
                        transition-all duration-300 ">
                        مشاهده سوالات بیشتر
                    </button>
                </Link>
            </ul>


        </section>
    )
}