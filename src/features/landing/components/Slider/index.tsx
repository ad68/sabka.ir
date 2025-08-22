
import Slider from './component/Slider'
import Link from 'next/link'
export default function Index() {
    return <section className="max-w-6xl flex justify-between relative m-auto h-[400px] bg-gradient-to-r  mt-[119px] rounded-[20px]">
        <div className="w-full relative">
            <section
                className="bg-cover bg-no-repeat z-10  bg-opacity-10  w-full h-[320px] md:h-[380px] xl:h-[421px] flex flex-col justify-start md:justify-start md:pt-10 xl:justify-center xl:pt-0 items-center md:items-start md:pr-10 gap-3 md:rounded-2xl"
                style={{ backgroundImage: `url(/assets/img/landing/MostViewImg1.png)` }}
            >
                <section className="flex flex-col justify-start items-center md:items-start gap-3 md:gap-3 max-w-lg mt-10 md:mt-0">
                    <p className="font-bold text-md md:text-2xl xl:max-w-3xl text-white max-w-[320px]">
                        پربازدیدترین تصاویر و ویدئوها
                    </p>
                    <p className="text-white text-md md:text-md ">تصاویر نشست‌ها و جلسات نمایندگان</p>
                    <Link href={"/"} className="flex items-center justify-center">
                        <button className="group-hover:bg-white py-2 px-3 w-fit flex flex-row justify-center items-center gap-2 text-xs border-2 border-neutral-200 text-white rounded-lg transition-all duration-300 z-10">
                            مشاهده همه
                        </button>
                    </Link>
                </section>
            </section>

        </div>
        <div className='absolute w-[800px] mt-[150px] xl:mt-0 left-2'>
            <Slider />
        </div>

    </section>
}
