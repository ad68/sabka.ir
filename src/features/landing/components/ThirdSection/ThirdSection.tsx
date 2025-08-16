import SectionThreeBg from '@/assets/img/landing/SectionThreeBg.png';
import Rahbar from '@/assets/img/landing/Rahbar.png';
import {LeafIcon} from "@/assets/icons/LeafIcon";
import Image from "next/image";

export default function Index() {
    return (
        <section
            style={{
                backgroundImage: `url(${SectionThreeBg.src})`,
            }}
            className='w-full bg-no-repeat bg-contain flex flex-row flex-wrap  gap-2 justify-center items-center min-h-screen p-5 md:p-10 overflow-x-hidden'>

            <section className='w-full  flex flex-col justify-center items-center md:justify-center md:items-center gap-3'>
               <span className='flex flex-row gap-1'>
                کشاورزی، ستون خودکفایی ملی
                   <LeafIcon />
               </span>

                <p className='text-2xl md:text-3xl font-bold'>رهنمودهای رهبر انقلاب</p>
                <section className='text-center max-w-sm md:max-w-2xl'>سخنان مقام معظم رهبری در حوزه کشاورزی، مسیر روشن استقلال غذایی کشور را ترسیم می‌کند؛ نگاهی راهبردی برای حفظ امنیت، تولید، و کرامت کشاورزان.</section>
            </section>
            <section className="flex items-center justify-start  p-5 md:p-10">
                <section className="flex flex-col md:flex-row max-w-full justify-start md:justify-center md:max-w-6xl items-start md:items-center w-full bg-white rounded-xl p-6">
                    <section className="relative flex-1">
                        <Image
                            src={Rahbar}
                            alt="Background Image"
                            width={450}
                            height={450}
                        />
                    </section>
                    <section className="flex-1 p-6 relative max-w-md  bg-white  border-0 overflow-visible border-r-[#35663A] border-r-8 mt-[-80px] md:mt-0 mr-[70px] w-[400px] md:max-w-[450px] md:mr-[-60px] rounded-xl  max-h-[320px] shadow-2xl">
                        <div className='bg-[#35663A] w-[75px] h-[34px] rounded-[4px] absolute left-0 top-0'></div>
                        <div className='bg-[#35663A] w-[20px] h-[187px]  rounded-md absolute top-1/2 -translate-x-2 -left-2  transform  -translate-y-1/2'></div>
                        <section className="text-md md:text-lg max-w-xs font-semibold text-gray-800 mb-2">
                            اهمیت کشاورزی دانش بنیان و امنیت غذایی
                            در کلام مقام معظم رهبری
                        </section>

                        <p className="text-gray-600 text-sm md:text-md font-semibold ">
                            اولاً هفته‌ای کشاورزی بر همه‌ی شما کشاورزان عزیز. بلکه بر
                            همه‌ی ملت ایران مبارک باشد. دیدار با زحمتکشان عرصه‌ی کشاورزی
                            - با توجه به اهمیت که این بخش برای امروز و فردای این کشور
                            دارد - برای من دیدار پُر‌هَلا‌سیتی است. مطالب خوبی هم بیان شد،
                            هم آنچه که این بخش باید دارد، ما کشاورزان نمونه، گفتند.
                            مطالب شیرین و دلنشینی بود برای من، و انعکاس مجموعه‌ی زیبایی
                            بود از اعتماد به نفس، امید به آینده، تلاش بی‌وقفه و شجاعانه.
                            در این توکل به خداوند متعال، هم مطالبی که...
                        </p>

                    </section>
                </section>
            </section>
        </section>
    )
}