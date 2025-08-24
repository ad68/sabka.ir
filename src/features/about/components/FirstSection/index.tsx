"use client"
import Image from "next/image";

export default function Index() {

    return (
        <section className='flex flex-col justify-center items-center mb-[70px] 2xl:mb-[120px]'>
            <section className='flex flex-col justify-center items-center my-[48px] 2xl:my-[100px] max-w-2xl 2xl:max-w-4xl gap-4'>
                <p className='text-[#284D2C] md:text-4xl 2xl:text-4xl text-center xl:mb-3'>با هم، آینده‌ای <span className='text-[#558C5A]'>ســرســـبز</span> می‌سازیم</p>
                <p className='text-[16px] text-[#A0A0A0] 2xl:text-2xl text-center'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</p>
            </section>
            <section className="about-slider-container relative w-full max-w-5xl 2xl:max-w-7xl mx-auto flex justify-center items-center gap-4">
                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-lg"
                    style={{ ["--angle" as any]: "-15deg", ["--depth" as any]: "-80px" }}
                >
                    <Image src='/assets/img/about/AboutSliderPic1.png' alt='' fill className='w-full h-full object-cover' />
                </div>

                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-xl z-10"
                    style={{ ["--angle" as any]: "-5deg", ["--depth" as any]: "-80px" }}            >
                    <Image src='/assets/img/about/AboutSliderPic2.png' alt='' fill className='w-full h-full object-cover' />
                </div>

                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-lg"
                    style={{ ["--angle" as any]: "5deg", ["--depth" as any]: "-80px" }}
                >
                    <Image src='/assets/img/about/AboutSliderPic3.png' alt='' fill className='w-full h-full object-cover' />
                </div>
                <div
                    className="about-slider-slide w-64 h-72 2xl:w-80 2xl:h-80 rounded-xl overflow-hidden shadow-lg"
                    style={{ ["--angle" as any]: "15deg", ["--depth" as any]: "-80px" }}
                >
                    <Image src='/assets/img/about/AboutSliderPic4.png' alt='' fill className='w-full h-full object-cover' />
                </div>
            </section>

        </section>


    )
}