import Image from "next/image";
import ElectronicService from '@/assets/img/landing/ElectronicServices.png'
import {LeafIcon} from "@/assets/icons/LeafIcon";
import React from "react";
import {CertificateIcon} from "@/assets/icons/CertificateIcon";
import {CalendarIcon} from "@/assets/icons/CalendarIcon";
import {InsuranceLetterIcon} from "@/assets/icons/InsuranceLetterIcon";
import {RulesIcon} from "@/assets/icons/RulesIcon";
import {InquiryIcon} from "@/assets/icons/InquiryIcon";
import {ServiceDeskIcon} from "@/assets/icons/ServiceDeskIcon";
import {ComplainIcon} from "@/assets/icons/ComplainIcon";
import {PortalIcon} from "@/assets/icons/PortalIcon";
import Link from "next/link";
import {ArrowRTLIcon} from "@/assets/icons/ArrowRTL";
import TwoLeavesBg from '@/assets/img/landing/TwoLeavesBg.png';
const items = [
    {title:'مجوز ها' , icon:<CertificateIcon/>  , link:''},
    {title:'مقالات و نشریات' , icon:<CalendarIcon/>  , link:''},
    {title:'صدور بیمه نامه' , icon:<InsuranceLetterIcon/>  , link:''},
    {title:'آیین نامه ها و مقررات' , icon:<RulesIcon />  , link:''},
    {title:'استعلام بیمه نامه' , icon:<InquiryIcon/>  , link:''},
    {title:'میز خدمت' , icon:<ServiceDeskIcon />  , link:''},
    {title:'رسیدگی و شکایات' , icon:<ComplainIcon />  , link:''},
    {title:'پورتال من' , icon:<PortalIcon/> , link:''},
]
export default function Index() {
    return (
        <section
            className='w-full bg-no-repeat bg-contain min-h-screen flex flex-row flex-wrap gap-10 justify-center items-center  p-10'
            style={{
                backgroundImage: `url(${TwoLeavesBg.src})` ,
                backgroundPosition: 'right bottom',
                backgroundSize: 'auto 50%',
            }}
        >
                <section className="hidden  md:visible md:flex relative">
                    <Image
                        className="w-full h-[400px] xl:h-[500px] "
                        src={ElectronicService.src}
                        alt='sabka'
                        width={400}
                        height={400}
                    />
                    <section className="absolute w-full bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold z-10 p-2">
                        ثبت و پیگیری امور اداری، سریع و الکترونیکی
                    </section>
                </section>


            <section className='flex flex-col justify-start items-start xl:justify-center xl:items-center gap-6  min-h-[400px]' >
                <section className=' mt-8 flex flex-col justify-start items-start  gap-3 '>
               <span className='flex flex-row gap-2 text-sm'>
                کشاورزی، ستون خودکفایی ملی
                   <LeafIcon />
               </span>
                    <p className='text-right text-xl md:text-2xl font-bold'>خدمات الکترونیکی صندوق بیمه کشاورزی</p>
                    <section className='text-right md:text-center text-sm max-w-2xl xl:max-w-4xl'>دسترسی سریع و آسان به سامانه‌ها، مجوزها و اطلاعات بیمه‌ای برای بهره‌برداران، کارشناسان و عموم کاربران</section>
                </section>
                <section className='max-w-2xl xl:max-w-4xl mx-auto flex flex-row justify-center items-center md:justify-start md:items-start xl:justify-center xl:items-center flex-wrap gap-6'>
                    {items.map((item , index) => {
                        return (
                            <section className='cursor-pointer group flex flex-row justify-between items-center min-w-[300px] hover:shadow-lg transition-all duration-500  border-[1px] hover:border-[#E9AA1E] border-[#A7D9AC] p-2 rounded-xl'  key={index}>
                                <section className='flex flex-row gap-1 justify-start items-center'>
                                    <span className='font-bold text-sm'>{item.icon}</span>
                                    <span className='font-bold text-sm'>{item.title}</span>
                                </section>

                                <Link href={item.link} className='hidden md:flex w-[24px] h-[24px] p-2  justify-center items-center rounded-md bg-[#35663A] text-white group-hover:bg-[#E9AA1E]   transition-all duration-500 cursor-pointer'>
                                    <ArrowRTLIcon />
                                </Link>
                            </section>
                        )
                    })}
                </section>

            </section>

        </section>
    )
}