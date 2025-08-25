import Image from "next/image";
import Leaf from '@/assets/img/contactUs/leaf.png'
import Link from "next/link";
import { Calendar1Icon, EyeIcon, TimerIcon } from "lucide-react";
import { news } from "@/constant/global";
import { NewsDetail } from "@/features/newsDetail/types";
export default function Index() {
    return <main className="w-[1140px]  h-auto relative  m-auto  rounded-xl mt-10 min-h-10 max-w-full">
        <h1 className="text-primary text-[32px] font-bold">آخرین اخبار</h1>
        {news.map((item: NewsDetail, index: number) => (<Link href={`/news/${item.id}`} key={index} className="bg-white relative  text-[#284D2C] hover:shadow-xl transition-all duration-300 rounded-[10px] block  mt-[26] px-[20] py-[18] w-full">
            <div className="flex gap-4 items-center">
                <Image src={item.imgUrl} className="float-left rounded-md w-[150px] h-auto" width={400} height={300} alt="" />
                <div>
                    <p className="text-[14px]">{item.miniTitle}</p>
                    <p className="text-[24px] font-semibold"> {item.title}</p>
                </div>
            </div>
            <footer className="mt-[18px]">
                <div className="text-[12px] flex gap-3 justify-end">
                    <div className="flex items-center gap-1">
                        <Calendar1Icon className="w-[16px] text-secondary" />
                        <span>تاریخ : {item?.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <TimerIcon className="w-[16px] text-secondary" />
                        <span>{item?.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <EyeIcon className="w-[16px] text-secondary" />
                        <span>تعداد بازدید : {item.view}</span>
                    </div>
                </div>
            </footer>
            <Image className="absolute top-[-10] left-[10px] w-[27px] h-[22px]" src={Leaf} alt="" />
        </Link>))}
    </main>
}
