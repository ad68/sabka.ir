import React from "react";
import ServiceItem from "@/features/landing/components/availableServices/components/Item/Item";
import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
const servicesItem = [
    {image:'/assets/img/services/nurse.png', title:'درخواست پرستار', description:'مراقبت تخصصی، با محبت و احترام در محیطی آشنا و امن؛ درست در خانه شما.', buttonLink:''},
    {image:'/assets/img/services/cure.png', title:'خدمات درمانی', description:'از همراهی در قرارهای پزشکی تا بررسی تخصصی نتایج آزمایش‌ها؛ با ما تنها نیستید.', buttonLink:''},
    {image:'/assets/img/services/academy.png', title:'آکادمی ژوار', description:'آموزش‌های ساده و کاربردی برای کمک به استقلال و نشاط بیشتر پرتجربه عزیز.', buttonLink:''},
    {image:'/assets/img/services/pet.png', title:'خدمات حیوانات خانگی', description:'ما با ارائه مراقبت‌های حرفه‌ای، راحتی و سلامت حیوانات شما را تضمین می‌کنیم.', buttonLink:''},
    {image:'/assets/img/services/consultant.png', title:'مشاوره تخصصی', description:'تیم ما آماده پاسخ‌گویی به شما برای انتخاب بهترین خدمات ممکن در تمامی حوزه‌ها است.', buttonLink:''},
    {image:'/assets/img/services/events.png', title:'رویدادهای ژوار', description:'سفر، جشن، دوستی؛ رویدادهایی برای ساختن لحظاتی از جنس زندگی برای شما و عزیزانتان.', buttonLink:''},
    {image:'/assets/img/services/medicine.png', title:'تجهیزات پزشکی', description:'از خرید تا اجاره و حتی اهدای تجهیزات؛ هر آنچه برای آسایش بیشتر نیاز دارید، فراهم است.', buttonLink:''},
    {image:'/assets/img/services/ambulance.png', title:'درخواست آمبولانس', description:'جابجایی ایمن یا رسیدگی فوری، با آمبولانس‌های مجهز و آماده، همراه عزیزان شما هستیم.', buttonLink:''},
]

export default function Index() {
    return (
        <section className='w-full max-w-5xl flex flex-col justify-center items-center m-auto  mt-20 '>
            <section>
                <section className='flex items-center justify-center flex-col gap-3'>
                    <span className='flex flex-row gap-2'>خدمات حرفه‌ای، با دل‌سوزی انسانی <StarTwoIcon className='w-5 h-5' color={'#FF7700'}/></span>
                    <span className='text-xl tracking-wide'><span className='font-bold '>از مراقبت تا همراهی؛</span> خدمات کامل برای عزیزانتان</span>
                </section>
            </section>
            <ul className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-14 gap-y-[80px] mt-20">
                    {servicesItem.map((item, i) => (
                        <li key={i} >
                            <ServiceItem  {...item} />
                        </li>
                    ))}
                </ul>
        </section>
    )
}