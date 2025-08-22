import Image from "next/image";
import ThirdSectionBg from "@/assets/img/about/ThirdSectionbg.png";

export default function Index () {
    return (
        <section className='w-full relative flex flex-col md:flex-row  gap-2 justify-center items-center p-20 min-h-screen '
        style={{backgroundImage: `url(${ThirdSectionBg.src})`}}
        >
            <section>
                <h3 className='max-w-sm text-3xl font-bold text-[#fff]'>وظايف و حدود عمليات صندوق بيمه كشاورزی</h3>
                <p className='max-w-lg text-[16px] text-[#fff] mt-4 text-justify pl-6'>
                    هدف صندوق، انجام بيمه انواع محصولات كشاورزي، دام، طيور، زنبورعسل، كرم ابريشم و آبزيان پرورشي در مقابل خسارتهاي ناشي از سوانح طبيعي و حوادث قهري نظير تگرگ، طوفان، بادگرم، خشكسالي، زلزله، سيل، سرمازدگي و يخبندان، آتش­سوزي، صاعقه، آفات و امراض نباتي عمومي و قرنطينه­ اي، امراض واگير حيواني عمومي و قرنطينه­ اي و همچنین بیمه ابنیه، تأسیسات، مستحدثات، قنوات، چاههای آب کشاورزی، تأسیسات آبیاری، فعالیت های کشاورزی و عوامل تولید نظیر ماشین آلات، ابزار و ادوات کشاورزی در قبال حوادث بیمه پذیر به عنوان وسيله­ اي براي نيل به اهداف و سياستهاي بخش كشاورزي مي ­باشد.
                </p>
            </section>
            <Image src='/assets/img/about/ThirdSection.png' alt='' width={437} height={356}  className='object-cover rounded-3xl'/>

        </section>
    )
}