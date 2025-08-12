import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
import PetServiceItem from "@/features/pet-services/components/second-section/item/pet-service-item/PetServiceItem";
import React from "react";
const petServicesItems = [
    {image:'/assets/img/pet-services/pet-service-p-one.png', title:'مشاوره انتخاب و نگهداری حیوانات خانگی',buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-p-two.png', title:'همراهی در پیاده‌روی و گردش', buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-p-three.png', title:'خدمات تخصصی دامپزشکی',  buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-p-four.png', title:'نگهداری کوتاه‌مدت یا طولانی‌مدت', buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-p-five.png', title:' آموزش تخصصی حیوانات خانگی',  buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-p-six.png', title:'غذا دادن منظم و مراقبت روزانه', buttonLink:''},
    {image:'/assets/img/pet-services/pet-service-p-seven.png', title:'اصلاح و بهداشت حیوانات خانگی',  buttonLink:''},
]
export default function PetServiceSecondSection(){
    return(
        <section className='flex items-center justify-center flex-col gap-3  min-h-screen '>
            <p className='flex flex-row gap-2'>خدمات حرفه‌ای ژوار <StarTwoIcon className='w-5 h-5' color={'#FF7700'}/></p>
            <p className='text-xl tracking-wide'><span className='font-bold '>بهترین خدمات</span>  برای آنها که وفاداری را زندگی می‌کنند</p>
            <ul className="w-full mx-auto flex flex-row justify-center items-center flex-wrap place-items-center place-content-center">
                {petServicesItems.map((item, i) => (
                    <PetServiceItem key={i} {...item} />
                ))}
            </ul>
        </section>
    )
}