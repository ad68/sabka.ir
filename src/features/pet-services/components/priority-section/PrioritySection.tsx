import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
import React from "react";
import PrioritySectionItem from "@/features/pet-services/components/priority-section/item/PrioritySectionItem";

const petServicesPriorityItem = [
    {image:'/assets/img/pet-services/pet-service-priority-one.png', title:'مراقبت دلسوزانه',description:'همکاران ما با عشق به حیوانات، با دقت و مهارت از حیوانات شما دلسوزانه و با محبت مراقبت می‌کنند.',buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-priority-two.png', title:'انتخاب دقیق ارائه‌دهندگان خدمات',description:'با بررسی سوابق، مهارت‌ها و نظرات دیگران، فقط افرادی را پیشنهاد می‌دهیم که قابل اعتماد، بااخلاق و باتجربه هستند.',buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-priority-three.png', title:'خدمات در محل، بدون نیاز به رفت‌وآمد',description:'چه برای رسیدگی روزانه، چه ویزیت دامپزشک یا همراهی؛ ما خدمات را در محل زندگی شما ارائه می‌دهیم، تا آرامش حیوان و شما حفظ شود.',buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-priority-four.png', title:'تنوع خدمات متناسب با نیاز هر حیوان',description:'از آرایش و استحمام گرفته تا نگهداری ساعتی یا شبانه‌روزی؛ خدمات ما قابل تنظیم با سبک زندگی و نیاز خاص هر حیوان خانگی است.',buttonLink:''},
]
export default function PrioritySection(){
    return (
        <section className='flex items-center justify-center flex-col gap-3 min-h-screen '>
            <p className='flex flex-row gap-2'>برتری‌های خدمات ژوار <StarTwoIcon className='w-5 h-5' color={'#FF7700'}/></p>
            <p className='text-xl tracking-wide'><span className='font-bold '>فراتر از انتظار شماست؟</span>  چرا خدمات ما، </p>
            <ul className="w-full mx-auto flex flex-col md:flex-row justify-center items-center flex-wrap">
                {petServicesPriorityItem.map((item, i) => (
                    <PrioritySectionItem key={i} {...item} />
                ))}
            </ul>
        </section>
    )
}