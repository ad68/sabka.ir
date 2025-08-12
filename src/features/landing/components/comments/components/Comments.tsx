"use client";
import { CommentsBackground } from "../../../../../../public/assets/img/comments/CommentsBackground";
import React from "react";
import { StarIcon } from "@/assets/icons/StarIcon";
import CommentSlider from "@/features/landing/components/comments/components/slider/Slider";
import { Comment } from "@/features/landing/components/comments/types";

const commentsItem: Comment[] = [
    {
        name: "سعید احمدیان",
        img: "/assets/img/comments/person-one.png",
        rate: 5,
        comment:
            "پدرم باید به فیزیوتراپی می‌رفت و کسی نبود همراهش باشه. از طریق سایت درخواست همراه دادیم، و دقیق، خوش‌برخورد و وقت‌شناس بود. عالی بود واقعاً.",
    },
    {
        name: "سحر رضایی",
        img: "/assets/img/comments/person-two.png",
        rate: 4,
        comment:
            "مادرم تنها زندگی می‌کنه و همیشه نگران خریدهاش بودم. الان فقط درخواست می‌فرسته و همه‌چی به موقع دم در تحویل می‌گیرن. واقعاً خیالم راحت شده.",
    },
    {
        name: "رضا صنایی",
        img: "/assets/img/comments/person-three.png",
        rate: 1,
        comment:
            "پرستاری که برای مادرم فرستادن هم مهربون بود، هم حرفه‌ای. خیلی خوب باهاش ارتباط گرفت و واقعاً بهش رسیدگی کرد. از اون روز خیلی راحت‌تر نفس می‌کشیم.",
    },
];

export default function Index() {
    return (
        <section className="relative mt-10 bg-[linear-gradient(0deg,_#970104,_#970104),_linear-gradient(0deg,_rgba(223,_0,_156,_0.35),_rgba(223,_0,_156,_0.35))]">
            <section className="absolute inset-0 z-0 overflow-hidden">
                <CommentsBackground />
            </section>

            <section className="w-full p-16 relative z-10">
                <section className='flex items-center justify-center flex-col gap-2 text-white'>
                    <span className='flex flex-row gap-2'>صدای واقعی کسانی که تجربه‌اش کرده‌اند <StarIcon color='white' /></span>
                    <span><span className='font-bold text-xl'>نظرات خانواده‌هایی که با کمک ما</span> آرامش را به خانه بازگرداندند</span>
                </section>

                <CommentSlider slideItem={commentsItem} />
            </section>
        </section>
    );
}
