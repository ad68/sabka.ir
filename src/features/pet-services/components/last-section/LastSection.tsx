import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
import React from "react";
import {ArrowTLIcon} from "@/assets/icons/ArrowTLIcon";
import Image from "next/image";

export default function PetServiceLastSection(){
    return(
        <section className='w-full max-w-6xl m-auto flex items-center justify-center flex-col gap-4 mt-10  min-h-screen'>
            <section className="w-full md:w-1/2 xl:w-full flex justify-center mt-0 md:mt-[-80px] lg:mt-[-180px] xl:mt-[-80px]">
                <section className="w-full max-w-md">
                    <Image
                        src="/assets/img/pet-services/last-section.png"
                        alt="zhavar"
                        width={800}
                        height={640}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </section>
            </section>
            <p className='flex flex-row gap-2'>خدمات دامپزشکی ژوار <StarTwoIcon className='w-5 h-5' color={'#FF7700'}/></p>
            <p className='w-full text-lg md:text-xl max-w-sm md:max-w-2xl text-center tracking-wide'><span className='font-bold '>به ما بپیوندید</span>  تجربه‌تان را به آرامش دیگران تبدیل کنید</p>
            <p className='w-full max-w-2xl px-6 md:px-1 md:max-w-3xl text-center'>اگر با جان‌دل از حیوانات مراقبت می‌کنید، مهارت‌تان را با ما و خانواده‌هایی که به دنبال همراهی امن و عاشقانه برای حیوانات‌شان هستند، به اشتراک بگذارید. اینجا جایی‌ست برای مهر، مسئولیت و حرفه‌ای‌گری.</p>
            <section className="flex flex-col gap-4 items-start mb-4">
                <button className="bg-button-join-background text-white hover:bg-[#72814E] w-[250px] h-[44px] flex justify-center rounded-3xl px-2 border-b-2 border-white items-center shadow-[#BB473373]  shadow-xl text-sm">
                    به حیوانات خدمات ارائه می‌دهم
                    <ArrowTLIcon className='w-5 h-5 text-white' />
                </button>
            </section>
        </section>
    )
}