"use client"
const items = [
    { key: 1, title: 'گفت‌وگو با مدیران بیمه کشاورزی درباره چالش‌ها و برنامه‌ها', date: '۳ مرداد ۱۴۰۴', link: '' },
    { key: 2, title: 'گفت‌وگو با مدیران بیمه کشاورزی درباره چالش‌ها و برنامه‌ها', date: '۳ مرداد ۱۴۰۴', link: '' },
    { key: 3, title: 'گفت‌وگو با مدیران بیمه کشاورزی درباره چالش‌ها و برنامه‌ها', date: '۳ مرداد ۱۴۰۴', link: '' },
]
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
export default function Index() {
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ?
                (
                    <section className='flex flex-col justify-start items-start border-r-2 border-r-white gap-3 mr-2 px-4 mb-32
                  '>
                        <p className='text-xs text-white'>{items[0].date}</p>
                        <section className='w-full font-bold text-white text-sm max-w-[300px]' >{items[0].title}</section>
                    </section>
                )
                : (
                    <section className='flex flex-row justify-center items-center mb-32'>
                        {items.map((item, index) => {
                            return (
                                <section key={index} className='flex flex-col justify-start items-start border-r-2 border-r-white gap-3 xl:gap-6 px-3 xl:px-10'>
                                    <p className='text-xs xl:text-lg text-white'>{item.date}</p>
                                    <section className='w-full font-bold text-start text-white text-sm max-w-[250px] xl:max-w-[300px] xl:text-base 2xl:text-xl' >{item.title}</section>
                                </section>
                            )
                        })}

                    </section>
                )
            }

        </>

    )
}