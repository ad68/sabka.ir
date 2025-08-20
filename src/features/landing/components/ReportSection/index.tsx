"use client";
import ReportSectionBg from "@/assets/img/landing/ReportSectionBg.png";
import { LeafIcon } from "@/assets/icons/LeafIcon";
import React, { useRef, useState } from "react";
import ReportItem from "@/features/landing/components/ReportSection/components/ReportItem";
import { ArrowRTLIcon } from "@/assets/icons/ArrowRTL";
import { RectangleArrowIcon } from "@/assets/icons/RectangleArrowIcon";

const reportChildren1 = [
    { key: 1, title: "آئین نامه بیمه کشاورزی1", desc: "در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید." },
    { key: 2, title: "آئین نامه بیمه کشاورزی2", desc: "111111111111111111" },
    { key: 3, title: "آئین نامه بیمه کشاورزی3", desc: "در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید." },
    { key: 4, title: "آئین نامه بیمه کشاورزی4", desc: "22222222222222222" },
];
const reportChildren2 = [
    { key: 1, title: "تست 1", desc: "33333333333333333" },
    { key: 2, title: "تست 2", desc: "در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید." },
    { key: 3, title: "آئین نامه بیمه کشاورزی3", desc: "در اجرای قانون بیمه محصولات کشاورزی مصوب 25/3/62 و اصلاحات و الحاقات بعدی آن بند 3 ماده 12 و ماده 30 اساسنامه قانونی صندوق مصوب 5/3/63 مجلس شورای اسلامی و قانون بیمه مصوب 17/2/1316 آئین نامه بیمه کشاورزی به شرح زیر به تصویب رسید." },
];
const tabSection = [
    { key: 1, title: "فصلنامه بیمه و کشاورزی", children: reportChildren1 },
    { key: 2, title: "گزارش آماری", children: reportChildren2 },
    { key: 3, title: "انتشار اطلاعات", children: reportChildren1 },
    { key: 4, title: "درخواست ملاقات", children: reportChildren2 },
];

export default function Index() {
    const [selectedItem, setSelectedItem] = useState(tabSection[0]);
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const useDraggableScroll = () => {
        const ref = useRef<HTMLDivElement>(null);
        const isDragging = useRef(false);
        const startX = useRef(0);
        const scrollLeft = useRef(0);

        const onStart = (x: number) => {
            if (!ref.current) return;
            isDragging.current = true;
            startX.current = x - ref.current.offsetLeft;
            scrollLeft.current = ref.current.scrollLeft;
        };
        const onMove = (x: number) => {
            if (!isDragging.current || !ref.current) return;
            const walk = (x - startX.current) * 1; // speed
            ref.current.scrollLeft = scrollLeft.current - walk;
        };
        const onEnd = () => (isDragging.current = false);

        return {
            ref,
            onMouseDown: (e: React.MouseEvent) => onStart(e.pageX),
            onMouseMove: (e: React.MouseEvent) => {
                if (isDragging.current) {
                    e.preventDefault();
                    onMove(e.pageX);
                }
            },
            onMouseUp: onEnd,
            onMouseLeave: onEnd,
            onTouchStart: (e: React.TouchEvent) =>
                onStart(e.touches[0].pageX),
            onTouchMove: (e: React.TouchEvent) =>
                onMove(e.touches[0].pageX),
            onTouchEnd: onEnd,
        };
    };

    const contentDrag = useDraggableScroll();
    const tabDrag = useDraggableScroll();

    if (!selectedItem || !selectedItem.children.length) return null;

    return (
        <section
            className="w-full bg-cover bg-no-repeat flex flex-col gap-10 justify-center items-center min-h-screen p-10 overflow-x-hidden"
            style={{ backgroundImage: `url(${ReportSectionBg.src})` }}
        >
            <section className="w-full mt-8 flex flex-col text-center justify-center items-center gap-3 text-white">
        <span className="flex flex-row gap-2">
          کشاورزی، ستون خودکفایی ملی
          <LeafIcon />
        </span>
                <p className="text-xl md:text-3xl font-bold">
                    پوشش کامل بیمه کشاورزی، حمایت همیشگی
                </p>
            </section>

            <section
                ref={contentDrag.ref}
                className="flex gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing w-full md:justify-center"
                {...contentDrag}
            >
                {selectedItem.children.map((item, ind) => (
                    <section
                        key={item.key}
                        onClick={() => setCurrentSlide(ind)}
                        className={`flex-shrink-0 transition-all duration-300 ${
                            ind === currentSlide ? "scale-100 z-20" : "scale-95 z-10"
                        }`}
                    >
                        <ReportItem title={item.title} desc={item.desc} key={item.key} />
                    </section>
                ))}
            </section>

            <section
                ref={tabDrag.ref}
                className="flex gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing w-full border-b-2 border-b-[#E9AA1E] pb-2 md:justify-center"
                {...tabDrag}
            >
                {tabSection.map((item, ind) => (
                    <li
                        key={item.key}
                        onClick={() => {
                            setActiveTab(ind);
                            setSelectedItem(item);
                        }}
                        className={`relative flex flex-row gap-1 justify-center items-center w-52 rounded-md h-[40px] flex-shrink-0 cursor-pointer hover:text-[#E9AA1E] ${
                            activeTab == ind ? "text-[#E9AA1E]" : "text-white"
                        }`}
                    >
                        <section className="flex flex-row justify-center items-center gap-2 p-2 transition-all duration-500">
                            <span className="font-bold text-sm">{item.title}</span>
                            {activeTab == ind && (
                                <section className="absolute bottom-[-10px] left-1/2">
                                    <RectangleArrowIcon className="text-xs" />
                                </section>
                            )}
                            <section className="w-[24px] h-[24px] p-2 flex justify-center items-center rounded-md border border-neutral-200 transition-all duration-500">
                                <ArrowRTLIcon />
                            </section>
                        </section>
                    </li>
                ))}
            </section>
        </section>
    );
}
