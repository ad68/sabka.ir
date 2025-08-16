import Link from "next/link";
import React from "react";
import { MostViewItem } from "@/features/landing/components/MostViewsSection/types";
import {PlayVideoIcon} from "@/assets/icons/PlayVideoIcon";
interface MostViewItemProps extends MostViewItem {
    isSelected?: boolean;
}
export default function Index({
    img,
    title,
    date,
    link,
    desc,
    isSelected,
}: MostViewItemProps) {
    return (
        <section className={`rounded-3xl  relative flex flex-col h-[280px] xl:h-[350px] max-w-[250px] `}>
            <section className="absolute inset-0 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${img})` }}></section>
            <section onClick={() => {}} className='absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <PlayVideoIcon className='w-12 h-12'/>
            </section>
            <div className="flex-grow"></div>
            {!isSelected &&
                <section className='p-2 w-[96%] rounded-xl mx-auto mb-2 relative text-right'>
                        <span className='text-white text-xs'>{date}</span>
                    <p className='text-xs text-white'>{title}</p>
                    <Link href={"/"}>
                        <button
                            className="mt-2 mb-1 py-1 px-3 w-fit text-xs font-semibold bg-[#E3E6DC] text-black rounded-lg ">
                            مشاهده
                        </button>
                    </Link>
                </section>
            }
        </section>
    )
}