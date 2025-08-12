import {StarIcon} from "@/assets/icons/StarIcon";
import CommentSlider from "@/features/landing/components/comments/components/slider/Slider";
import React from "react";
import {Comment} from "@/features/landing/components/comments/types";
const commentsItem: Comment[] = [
    {
        name: "پاپی، دوست آقا امیرعلی",
        img: "/assets/img/pet-services/comments-one.png",
        rate: 5,
        comment:"درم سگش رو هر روز می‌برد پارک، اما حالا زانوش اذیتش می‌کنه. از وقتی ژوار مسئول گردش روزانه سگش شده، حال هردوشون بهتره. سگش منتظر ماشین ژواره، بابام هم خیالش راحته که تنها نیستن!"
    },
    {
        name: "پیشی، دوست زهرا خانم",
        img: "/assets/img/pet-services/comments-two.png",
        rate: 4,
        comment:"مادربزرگم گربه‌شو از بچگی بزرگ کرده، ولی حالا دیگه خودش نمی‌تونه ازش مراقبت کنه. تیم ژوار با هماهنگی کامل گربه رو می‌برن برای رسیدگی و نگهداری چند روزه، بعد هم سالم و خوشحال برمی‌گردونن. مادربزرگم خیلی خوشحاله!"
    },
    {
        name: "رکسی، دوست آقا رضا",
        img: "/assets/img/pet-services/comments-three.jpg",
        rate: 1,
        comment:"خودم سالمندم و سگم برام از همه چی عزیزتره. با خدمات در منزل ژوار دیگه نیاز نیست بیرون برم. خودشون میان، رسیدگی کامل می‌کنن، حتی گاهی می‌برنش برای تمیزکاری و برمی‌گردونن. واقعاً حس می‌کنم تنها نیستم."
    },
];

export default function NurseServiceCommentSection() {
    return (
        <section className="w-full relative mt-10 ">
            <section className="w-full p-2 md:p-16 relative z-10">
                <section className='flex items-start  md:items-center justify-center flex-col gap-2 '>
                    <span className='flex flex-row gap-2'>صداهایی از دل تجربه<StarIcon  /></span>
                    <span><span className='font-bold text-xl'> نظرات دلنشین مشتریان</span> از تجربه خدمات پرستاری</span>
                </section>

                <section className='shadow-lg shadow-[#00000014]'>
                    <CommentSlider slideItem={commentsItem} />
                </section>
            </section>
        </section>
    );
}
