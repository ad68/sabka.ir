import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
import React from "react";
import PrioritySectionItem from "@/features/pet-services/components/priority-section/item/PrioritySectionItem";

const petServicesPriorityItem = [
    {image:'/assets/img/nurse-services/priority-nurse-two.png', title:'نظارت هوشمند و مستمر',description:'با دوربین و بازدیدهای دوره‌ای، عملکرد پرسنل بطور دائم کنترل می‌شود تا خیال شما از سلامت عزیزانتان راحت باشد.',buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-priority-one.png', title:'همراهی همیشگی در مسیر مراقبت',description:'تیم پرستاری ژوار با تجربه و تعهد کامل، مراقب سلامتی و راحتی عزیزانتان در هر شرایطی هستند.',buttonLink:''},
    {image:'/assets/img/nurse-services/priority-nurse-three.png', title:'پوشش کامل نیازها در یکجا',description:'از پرستاری و تجهیزات پزشکی تا آموزش و نگهداری؛ ژوار همه خدمات مورد نیاز سالمندان را یک‌جا ارائه می‌دهد.',buttonLink:''},
    {image:'/assets/img/nurse-services/priority-nurse-four.png', title:'پرداخت آسان، همراهی دائمی',description:'خدمات متنوع ژوار با امکان پرداخت قسطی و پشتیبانی دائمی، همیشه در کنار شما و خانواده‌تان است.',buttonLink:''},
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