import {LeafIcon} from "@/assets/icons/LeafIcon";
import Image from "next/image";
const items = [
    'بررسی و تحقیق در مورد مختصات اقتصادی، اجتماعی، کشاورزی و فنی مناطق مختلف کشور.',
    'بررسی و تحقیق تطبیقی در مورد روشهای بیمه کشاورزی در دنیا با توجه به نظام بهره برداری، هدفها و سیاست های کشاورزی ایران جهت اتخاذ تصمیم در مورد برقراری مناسب ترین نوع بیمه کشاورزی با توجه به نظام اقتصادی و اجتماعی و برنامه بخش کشاورزی.',
'بررسی و مطالعه طرح های کاهش دهنده خسارات ناشی از خطرات تحت پوشش بیمه و پیشنهاد آن به دولت جهت هماهنگ کردن آنها با طرحهای مربوط به عملیات زیربنایی و همچنین ارشاد تولیدکنندگان به منظور خود پیشگیری در مقابل خطرات و در نتیجه کاهش خسارات وارده به محصولات کشاورزی.',
    'تهیه آئین نامه ها و دستورالعمل ها و اصلاح آنها با توجه به نتایج تحقیقات انجام شده.',
    'انجام عملیات بیمه محصولات کشاورزی.',
    'انجام هر گونه عملیات آموزشی و شرکت در سمینارها و کنفرانس ها، به نحوی که در ارتقاء سطح معلومات بیمه گذاران، کارشناسان و یا سایر کارمندان و دست اندرکاران بیمه کشاورزی در جهت پیشرفت و توسعه عملیات صندوق ضروری می باشد.',
    'صندوق می تواند در صورت لزوم به منظور جلوگیری از رکود سرمایه خود، اوراق قرضه و سایر اوراق بهادار صددرصد دولتی خریداری نموده و یا از طریق بانک کشاورزی در طرح های کشاورزی و صنایع وابسته به نحوی که سرمایه گذاری صندوق از طرف بانک کشاورزی تضمین گردد مشارکت نماید.'
]
export function CounterItem(props:{val:string}){
    return (
        <section className='w-[45px] h-[45px] text-sm text-white rounded-full flex justify-center items-center bg-[#E9AA1E]'>
            {props.val}
        </section>
    )
}

export default function Index(){
    return (
        <section className='w-full flex flex-col justify-center items-center mt-20 2xl:mt-24'>
            <section className='flex flex-col justify-center items-center gap-10'>
                <h3 className='font-bold text-xl md:text-3xl max-w-2xl text-[#284D2C] text-center 2xl:text-4xl'>سایر وظایف و حدود عمليات صندوق بر مبنای اساسنامه قانونی به شرح زير است:</h3>
                <p className='flex flex-col md:flex-row justify-center items-center md:items-start gap-2 max-w-2xl text-[#284D2C] mb-20'>
                    <span className='flex flex-col gap-2 2xl:text-[20px]'>
                        تبصره
                        <LeafIcon />
                    </span>
                    <span className='text-[16px] max-w-md text-[#284D2C] md:max-w-lg 2xl:text-[20px]'>
                        اقدامات موضوع بندهای 1، 2 و 3 این ماده با استفاده از منابع اطلاعاتی و نتایج تحقیقاتی و همکاری سایر مؤسسات کشور انجام خواهد شد.
                    </span>
                </p>
            </section>

            <section className='flex flex-col md:flex-row justify-center items-center gap-2 2xl:gap-4' >
                <section className='flex flex-col gap-2 2xl:gap-4'>
                    {items.map((item , idx) => {
                        return <section key={idx}>
                            {idx < 3 &&  (
                                <section className=' flex flex-row gap-2 text-[14px] 2xl:text-[20px]' >
                                   <CounterItem val={'0'+(idx + 1)} />
                                    <p className='max-w-xs text-sm text-[#558C5A]  xl:text-[16px]'>{item}</p>
                                </section>
                            )
                            }
                        </section>
                    })}

                </section>
                <section>
                    <Image src='/assets/img/about/FourthSection.png' width={293} height={350} alt='' />
                </section>
                <section className='flex flex-col  gap-2 2xl:gap-4'>
                    {items.map((item , idx) => {
                        return <section key={idx}>
                            {idx > 2 &&  (
                                <section className=' flex flex-row gap-2 text-[14px] 2xl:text-[20px]' >
                                    <CounterItem val={'0'+(idx + 1)} />
                                    <p className='max-w-xs text-sm text-[#558C5A] 2xl:text-[16px]'>{item}</p>
                                </section>
                            )
                            }
                        </section>
                    })}

                </section>
            </section>

        </section>
    )
}