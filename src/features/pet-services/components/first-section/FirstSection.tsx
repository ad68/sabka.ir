import { StarTwoIcon } from "@/assets/icons/StarTwoIcon";
import { ArrowTLIcon } from "@/assets/icons/ArrowTLIcon";
import { MaskGroupSection } from "../../../../../public/assets/img/pet-services/mask-group-section-one";
import React from "react";

export default function PetServiceFirstSection() {
    return (
        <section className='w-full flex flex-col-reverse md:flex-row-reverse justify-between items-center  min-h-screen'>
            <section className='w-full flex flex-col justify-start items-start gap-2 p-6 md:p-1 '>
                <p className='flex flex-row justify-start items-center gap-2'>
                    دوستی که همیشه کنارتان می‌ماند{" "}
                    <span>
            <StarTwoIcon className='w-5 h-5' color={'#FF7700'} />
          </span>
                </p>
                <p className='text-xl tracking-wide'>
                    <span>آرامش برای شما،</span>{" "}
                    <span className='font-bold'> رسیدگی برای همراه وفادار</span>
                </p>
                <section className='w-full max-w-2xl'>
                    حیوان خانگی شما فقط یک همراه نیست، بخشی از خانواده‌ است. از مراقبت
                    روزمره تا خدمات دامپزشکی و همراهی در پیاده‌روی، ما اینجاییم تا خیال‌تان
                    از هر نظر راحت باشد. آرامش شما، آسایش اوست.
                </section>
                <section className="w-full flex flex-col gap-4 items-center justify-center md:items-start mb-4">
                    <button className="bg-[#72814E] text-white hover:bg-[#72814E] w-[240px] h-[44px] flex justify-center rounded-3xl px-2 border-b-2 border-white items-center shadow-[#72814E73] shadow-xl text-sm my-2">
                        به خدمات حیوانات نیاز دارم <span><ArrowTLIcon /></span>
                    </button>
                </section>
            </section>
            <section className="relative w-full md:w-1/2 max-w-lg z-10 flex justify-center items-center">
                <section className="relative w-full aspect-[1/1] md:aspect-[1/1] lg:aspect-[1/1]">
                    <MaskGroupSection className="object-cover rounded-xl w-full h-full" />
                </section>
            </section>
        </section>
    );
}
