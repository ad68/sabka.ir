import {AcademyBackground} from "../../../../../../public/assets/img/academy/AcademyBackground";
import React from "react";
import AcademySlider from "@/features/landing/components/academy/components/slider/Slider";
import {Academy} from "@/features/landing/components/academy/types";
import {AcademyShape} from "@/assets/icons/AcademyShape";
import Link from "next/link";
import {useIsMobile} from "@/features/products/hooks/useIsMobile";
const academySlideItem: Academy[] = [
    {img:'/assets/img/academy/academy-one.jpg',title:'قدم‌به‌قدم تا دنیای شبکه‌های اجتماعی' , category:'آموزشی' , description:'مراقبت تخصصی، با محبت و احترام در..' , hrefLink:'' , isTopPost:false},
    {img:'/assets/img/academy/academy-two.jpg' ,title:'گفتگو با دکتر محرابی', category:'پزشکی و سلامت' , description:'مراقبت تخصصی، با محبت و احترام در..' , hrefLink:'' , isTopPost:true},
    {img:'/assets/img/academy/academy-three.png',title:'مهربانی‌های بی‌قید و شرط' , category:'پزشکی و سلامت' , description:'مراقبت تخصصی، با محبت و احترام در..' , hrefLink:'' , isTopPost:false},
]
export default function Index() {
    const isMobile = useIsMobile();
    return (
            <section className='relative w-full  max-w-md md:max-w-5xl m-auto mt-24 h-[400px] p-4 flex flex-col justify-start items-center rounded-2xl gap-2 text-white bg-custom-radial-home-page '>
                <section className="absolute inset-0 z-0 overflow-hidden">
                    <AcademyBackground />
                </section>
                <section className='w-full mt-8 flex flex-row justify-start items-start md:justify-center md:items-center gap-3'>
                    <AcademyShape />
                    آکادمی تخصصی ژوار
                    <AcademyShape />
                </section>
                <section className='w-full text-right md:text-center text-sm md:text-2xl my-1'>
                    <section className='flex flex-row gap-3 justify-start md:justify-center items-center'>
                        <p>
                            <span className='font-bold'>آکادمی زندگی؛</span>
                            <span className='tracking-wide'> یادگیری برای امروز، آرامش برای فردا</span>
                        </p>

                        {isMobile && <Link href={"/"} className="flex items-center justify-center">
                            <button
                                className="group-hover:bg-white p-2 w-fit h-6 flex flex-row justify-center items-center gap-2 text-xs bg-[#fff] text-[#72814E] rounded-full transition-all duration-300 z-10">
                                مشاهده همه
                            </button>
                        </Link>}

                    </section>

                </section>
                    <AcademySlider academySlideItem={academySlideItem} />
            </section>
    )
}