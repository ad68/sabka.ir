"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReportSectionBg from "@/assets/img/landing/ReportSectionBg.png";
import {LeafIcon} from "@/assets/icons/LeafIcon";
import React, {useState} from "react";
import ReportItem from "@/features/landing/components/ReportSection/components/ReportItem";
import {ArrowRTLIcon} from "@/assets/icons/ArrowRTL";
import {RectangleArrowIcon} from "@/assets/icons/RectangleArrowIcon";
import Slider from "react-slick";


const reportChildren1 = [
    {key:1,title:'آئین نامه بیمه کشاورزی1' , desc:'در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید.' },
    {key:2,title:'آئین نامه بیمه کشاورزی2' , desc:'در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید.' },
    {key:3,title:'آئین نامه بیمه کشاورزی3' , desc:'در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید.' },
    {key:4,title:'آئین نامه بیمه کشاورزی3' , desc:'در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید.' },
];
const reportChildren2 = [
    {key:1,title:'تست 1' , desc:'در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید.' },
    {key:2,title:'تست 2' , desc:'در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید.' },
    {key:3,title:'تست 3' , desc:'در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید.' },
];
const tabSection = [
    {key:1 , title: 'فصلنامه بیمه و کشاورزی' , children:reportChildren1},
    {key:2 , title: 'گزارش آماری' , children:reportChildren2},
    {key:3 , title: 'انتشار اطلاعات', children:reportChildren1},
    {key:4 , title: 'درخواست ملاقات' , children:reportChildren2},
]
export default function Index() {
    const [selectedItem , setSelectedItem] = useState(tabSection[0]);
    const [activeTab , setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    if (!selectedItem || !selectedItem.children.length) return null;
    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "30px",
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                },
            },
        ],
    };
    const settingsForTab = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "0px",
        slidesToShow: 4,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                },
            },
        ],
    };


    return (
        <section
            className='w-full bg-cover bg-no-repeat flex flex-row flex-wrap  gap-10 justify-center items-center min-h-screen p-10 overflow-x-hidden'
            style={{backgroundImage:`url(${ReportSectionBg.src})`}}>
            <section className='w-full mt-8 flex flex-col text-center justify-center items-center md:justify-center md:items-center gap-3 text-white'>
               <span className='flex flex-row gap-2'>
                کشاورزی، ستون خودکفایی ملی
                   <LeafIcon />
               </span>

                <p className='text-xl md:text-3xl font-bold'>پوشش کامل بیمه کشاورزی، حمایت همیشگی</p>
            </section>
            <section className=" w-full relative slider-container">
                <Slider {...settings}
                        >
                    {selectedItem.children.map((item, ind) => (
                        <ReportItem onClick={() => setCurrentSlide(ind)} {...item} isCenter={ind === currentSlide} key={ind} />
                    ))}
                </Slider>
            </section>

{/*
            <section className='max-w-7xl mx-auto  p-6 flex flex-col justify-center items-center gap-6'>
                <ul className='flex flex-row justify-center items-center border-b-2 border-b-[#E9AA1E]  p-4 gap-6'>

                    {tabSection.map((tabItem, idx) => {
                        return (
                            <li onClick={() => {setActiveTab(idx);setSelectedItem(tabItem);} }
                                className={`relative flex group flex-row gap-1 justify-center items-center w-52 rounded-md h-[40px] cursor-pointer hover:text-[#E9AA1E]  ${(activeTab == idx) ? ' text-[#E9AA1E]' : 'text-white '} `} key={tabItem.key}>
                                <section className='cursor-pointer group flex flex-row justify-between items-center transition-all duration-500 gap-2  p-2 '  key={idx}>
                                    <span className='font-bold text-sm'>{tabItem.title}</span>
                                    {activeTab == idx && <section className='absolute bottom-[-30px] left-1/2'>
                                        <RectangleArrowIcon className='text-xs'/>
                                    </section>}
                                    <section className=' w-[24px] h-[24px] p-2 flex justify-center items-center rounded-md border-[1px] border-neutral-200  group-hover:text-[#E9AA1E] group-active:text-[#E9AA1E]  transition-all duration-500 cursor-pointer'>
                                        <ArrowRTLIcon />
                                    </section>
                                </section>
                            </li>
                        )
                    })}
                </ul>

            </section>
*/}

                <section className=' w-full  slider-container border-b-2 border-b-[#E9AA1E] overflow-visible '>
                    <Slider {...settingsForTab}
                    >
                        {tabSection.map((item, ind) => {
                                return (
                                    <li onClick={() => {setActiveTab(ind);setSelectedItem(item);} }
                                        className={`relative flex group flex-row gap-1 justify-center items-center w-52 rounded-md h-[40px] cursor-pointer hover:text-[#E9AA1E]  ${(activeTab == ind) ? ' text-[#E9AA1E]' : 'text-white '} `} key={item.key}>
                                        <section className='cursor-pointer group flex flex-row justify-center items-center transition-all duration-500 gap-2  p-2 '  key={ind}>
                                            <span className='font-bold text-sm'>{item.title}</span>
                                            {activeTab == ind && <section className='absolute bottom-[-10px] left-1/2'>
                                                <RectangleArrowIcon className='text-xs'/>
                                            </section>}
                                            <section className=' w-[24px] h-[24px] p-2 flex justify-center items-center rounded-md border-[1px] border-neutral-200  group-hover:text-[#E9AA1E] group-active:text-[#E9AA1E]  transition-all duration-500 cursor-pointer'>
                                                <ArrowRTLIcon />
                                            </section>
                                        </section>
                                    </li>
                                )
                            }
                        )}
                    </Slider>
                </section>
        </section>
    )
}