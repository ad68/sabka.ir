
import Leaves from "@/assets/img/landing/Leaves.png";
import NewsItems from "./components/NewsItems";
import Image from "next/image";


export default function Index() {
    return (
        <section
            className='relative w-full z-[-10px]'
        >
            <div className="w-full flex justify-center overflow-hidden">
                {/*  <div className=" relative  m-auto  clip-ellipse overflow-hidden">
                    <Image width={1920} height={700} className="w-[full] h-auto" src="/assets/img/landing/FirstSectionBg.png" alt="" />
                </div> */}
                <Image width={1920} height={700} className="w-[full] h-auto" src="/assets/img/landing/FirstSectionBg.png" alt="" />
            </div>
            <section className='absolute top-0 left-0 w-full xl:mt-[24px] 2xl:mt-[100px] flex flex-col justify-center items-center px-[200px] md:px-28  text-center max-w-[900px] xl:max-w-full mx-auto'>
                <div className="w-[1136px] relative flex flex-col justify-center items-center">
                    <div className=' xl:p-2 2xl:p-4 relative flex flex-row gap-4 md:gap-6 justify-center items-center'>
                        <Image src={Leaves.src} alt='sabka' width={60} height={60} />
                        <p className='font-bold text-white xl:text-[36px] 2xl:text-[48px] leading-snug'>
                            سرمایه‌ات را در دل خاک امن کن
                        </p>
                        <Image src={Leaves.src} alt='sabka' width={60} height={60} />
                    </div>
                    <p className='font-bold text-white xl:text-[20px] 2xl:text-[36px] lg:text-[32px] leading-relaxed'>
                        با بیمه کشاورزی، خیال آسوده برای امروز و فردای مزرعه‌ات
                    </p>
                    <div className="absolute bottom-[-30px] right-0 flex flex-col gap-2">
                        <div className="border-t-4 border-l-4 border-dotted border-white w-[60px] h-[2px]" />
                        <div className="border-t-4 border-l-4 border-dotted border-white w-[60px] h-[2px]" />
                    </div>
                    <div className="absolute top-0 left-0 flex flex-col gap-2">
                        <div className="border-b-4 border-r-4 border-dotted border-white w-[60px] h-[2px]" />
                        <div className="border-b-4 border-r-4 border-dotted border-white w-[60px] h-[2px]" />
                    </div>
                </div>
                <div className="mt-[100px]">
                    <NewsItems />
                </div>
            </section>
        </section>
    );
}
