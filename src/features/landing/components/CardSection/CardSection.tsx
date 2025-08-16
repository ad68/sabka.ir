"use client"
import CardItem from './components/CardItem';
import {TreesIcon} from "@/assets/icons/TreesIcon";
import {LiveStockIcon} from "@/assets/icons/LiveStockIcon";
import {TreeIcon} from "@/assets/icons/TreeIcon";
import {InsuranceAmtIcon} from "@/assets/icons/InsuranceAmtIcon";
import {WalletIcon} from "@/assets/icons/WalletIcon";
import {CropsIcon} from "@/assets/icons/CropsIcon";
import {useIsMobile} from "@/features/products/hooks/useIsMobile";
import Slider from "react-slick";
import {useEffect, useState} from "react";
const cardItems = [
    {title:'بیمه محصولات زراعی' , icon:<CropsIcon/> , desc:'این بیمه از گروه‌های مختلف محصولات مانند نباتات صنعتی، دانه‌های روغنی، نباتات علوفه‌ای، حبوبات و سبزی و صیفی در برابر خسارات طبیعی محافظت می‌کند.',link:''},
    {title:'بیمه محصولات باغی و منابع طبیعی' , icon:<TreesIcon/> , desc:'این بیمه شامل محصولاتی مانند آلبالو، انجیر دیم و همچنین مراتع و عملیات اصلاحی آن‌ها در برابر خسارات محیطی و اقلیمی است.',link:''},
    {title:'بیمه دام، طیور و آبزیان' , icon:<LiveStockIcon/> , desc:'این بیمه از گاوهای اصیل در واحدهای سنتی بهداشتی، گاوهای بومی آمیخته و گاوهای مراکز اصلاح نژاد در برابر خسارات احتمالی حمایت می‌کند.',link:''},
    {title:'بیمه عوامل تولید کشاورزی' , icon:<TreeIcon/> , desc:'این بیمه شامل پوشش‌هایی مانند بیمه تنه درختان انار، انگور آبی، بادام، پسته و سایر درختان میوه در برابر خسارات و آسیب‌های احتمالی است.',link:''},
    {title:'تعرفه‌های بیمه‌گری' , icon:<InsuranceAmtIcon/> , desc:'شامل جدول نرخ‌ها و شرایط بیمه برای انواع محصولات و فعالیت‌های کشاورزی، متناسب با هر استان و نوع پوشش بیمه‌ای.',link:''},
    {title:'فرایندهای بیمه و خسارت' , icon:<WalletIcon/> , desc:'راهنمای گام‌به‌گام برای ثبت‌نام، انتخاب نوع بیمه، پرداخت حق بیمه و دریافت بیمه‌نامه کشاورزی ،روند اعلام خسارت، ارزیابی و دریافت غرامت.',link:''},
]

export default function Index() {
    const isMobile = useIsMobile();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [centerPadding, setCenterPadding] = useState("0px");

    useEffect(() => {
        function updateCenterPadding() {
            const width = window.innerWidth;
            if (width <= 550) {
                setCenterPadding("80px");
            }else if (width <= 600) {
                setCenterPadding("60px");
            }else if (width <= 670) {
                setCenterPadding("120px");
            } else {
                setCenterPadding("150px");
            }
        }

        updateCenterPadding();

        window.addEventListener("resize", updateCenterPadding);
        return () => window.removeEventListener("resize", updateCenterPadding);
    }, []);
    const settings = {
        className:'center',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: centerPadding,
        rtl: true,
        arrows: false,
        dots:true,
        autoplay:true,
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
    };

    return (
       <>
           {isMobile ? <section className='w-full '>
               <Slider {...settings}>
                   {cardItems.map((item, idx) => (
                       <section
                           key={idx}
                           className={`px-5 transition-all duration-300 ease-in-out 
              ${idx === currentSlide ? "scale-95 z-20" : "scale-95 z-10"} `}
                       >
                           <CardItem {...item} index={idx} />
                       </section>
                   ))}
               </Slider>
           </section> : <>
               <section className='w-full flex flex-row flex-wrap max-w-6xl mx-auto  gap-10 justify-center items-center min-h-screen p-10'>
                   {cardItems.map((carItem , index) =>   <CardItem key={index} {...carItem} index={index} />)}
               </section>
           </>}


       </>

    )
}