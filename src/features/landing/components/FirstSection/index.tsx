import FirstSectionBg from "@/assets/img/landing/FirstSectionBg.png";
import Leaves from "@/assets/img/landing/Leaves.png";
import NewsItems from "./components/NewsItems";
import Image from "next/image";


export default function Index() {
    return (
        <section
            className='relative bg-cover bg-center w-full bg-no-repeat py-14 px-4 md:py-24 md:px-28 mt-[-30px] z-[-10] min-h-screen'
            style={{ backgroundImage: `url(${FirstSectionBg.src})` }}
        >
            <section className='flex flex-col justify-center items-center relative py-6 md:py-14 px-12 md:px-28 mt-24 text-center max-w-[900px] xl:max-w-full mx-auto'>
                <section className='p-4 md:p-8 mb-6 md:mb-14 relative flex flex-row gap-4 md:gap-6 justify-center items-center'>
                    <Image src={Leaves.src} alt='sabka' width={60} height={60} />
                    <p className='font-bold text-white text-2xl md:text-4xl lg:text-6xl leading-snug'>
                        سرمایه‌ات را در دل خاک امن کن
                    </p>
                    <Image src={Leaves.src} alt='sabka' width={60} height={60} />
                </section>

                <p className='font-bold text-white text-xl md:text-4xl lg:text-5xl leading-relaxed max-w-[700px]'>
                    با بیمه کشاورزی، خیال آسوده برای امروز و فردای مزرعه‌ات
                </p>

                <div className="absolute top-0 left-2 md:left-0 border-t-4 border-l-4 border-dotted border-white w-[60px] h-[2px]" />
                <div className="absolute top-3 left-2 md:left-0 border-t-4 border-l-4 border-dotted border-white w-[60px] h-[2px]" />
                <div className="absolute bottom-0 right-2 md:right-0 border-b-4 border-r-4 border-dotted border-white w-[60px] h-[2px]" />
                <div className="absolute bottom-3 right-2 md:right-0 border-b-4 border-r-4 border-dotted border-white w-[60px] h-[2px]" />
            </section>

            <section className='mt-8 xl:mt-24 max-w-[1200px] mx-auto px-4 md:px-0'>
                <NewsItems />
            </section>
        </section>
    );
}
