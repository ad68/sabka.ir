import Image from "next/image";
import Wheat from '@/assets/img/about/Wheat.png';

const items = [
    'مردم و شهروندان به عنوان ذی حقان برای نظام اداری تلقی میشوند تلاش میکنیم با ایجاد ارتباط مناسب و ارائه خدمت بهتر تصویری مثبت از دستگاه اجرایی و نظام اداری در ذهن آنان ایجاد نماییم',
    'به مراجعه کنندگان به صورت عادلانه و در چارچوب قوانین مقررات و ضوابط خدمت ارائه دهیم.',
    'خواسته های قانونی ارباب رجوع را در چارچوب وظایف خود با صحت دقت و سرعت و بدون تشریفات زائد اداری و تحمیل هزینه اضافی به وی ارائه دهیم.',
    ' به ارباب رجوع احترام گذاشته و در استقبال و صحبت با آنان گشاده رو باشیم',
    'به نظرات پیشنهادات و بازخوردهای شهروندان و مراجعه کنندگان به عنوان منبعی گرانبها برای بهبود عملکرد نگاه کرده و با دید منطقی به آنها توجه نماییم.',
    'سعی کنیم فرهنگ تکریم ارباب رجوع پاسخگویی و گره گشایی از مشکلات آنها و مردم به یک ارزش حاکم در نظام اداری تبدیل شود.',
]
export default function Index(){
    return (
        <section className='w-full relative flex flex-row justify-between items-center'>
            <Image src={Wheat.src} alt='' width={257} height={200} className='object-contain absolute left-0 bottom-0 z-0' />

            <section>
                <Image src='/assets/img/about/EightSection.png' alt='' width={600} height={600} className='w-full h-full' />
            </section>
            <section className='max-w-2xl ml-[80px] mr-[50px] z-10'>
                <h2 className='text-[#284D2C] text-3xl max-w-md font-bold'>نحوه رفتار و برخورد با ارباب رجوع و همکاران</h2>
                <section className='text-[#808080] mt-3 text-[13px]'>
                    {items.map((item , index) => {
                        return (
                            <p key={index}>
                                {index+1}.{item}
                            </p>
                        )
                    })}
                </section>
            </section>

        </section>
    )
}