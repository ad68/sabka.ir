'use client'
import { CopyIcon, PrinterIcon, Undo2Icon } from "lucide-react"
import Image from "next/image"
import Leaf from '@/assets/img/contactUs/leaf.png'
import "@smastrom/react-rating/style.css";
import CopyToClipboard from "react-copy-to-clipboard";
import CustomGallery from "@/components/kit/CustomGallery";
import Link from "next/link";
import { PdfIcon } from "@/assets/icons/PdfIcon";
import { BaleIcon } from "@/assets/icons/BaleIcon";
import { EitaaIcon } from "@/assets/icons/EitaaIcon";
import { SoroushIcon } from "@/assets/icons/SoroushIcon";
import useNewsDetail from "../hooks/useNewsDetail";
export default function Index() {
    const { currentNews, handlePrint, currentUrl, text } = useNewsDetail()

    return (
        <section className="xl:w-[1140px] mb-20 h-auto relative m-auto rounded-xl xl:mt-10 min-h-10 max-w-full">
            <div className="w-full rounded-xl overflow-hidden xl:h-[60px] bg-primary p-4 xl:p-0">
                <div className="w-full h-full px-[81px] z-30 relative flex flex-col xl:flex-row  justify-between items-center">
                    <span className="text-white text-lg font-medium">تاريخ :{currentNews?.date}</span>
                    <span className="text-white text-lg font-medium">ساعت : {currentNews?.time}</span>
                    <span className="text-white text-lg font-medium">تعداد بازدید :{currentNews?.view}</span>
                    <div className="flex justify-between items-center text-white gap-[20px]">
                        <button onClick={handlePrint} className="w-[40px] h-[40px] flex justify-center items-center rounded-full transition-all hover:bg-[#ffffff47]">
                            <PrinterIcon className="cursor-pointer w-[28px]" />
                        </button>
                        <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full  transition-all hover:bg-[#ffffff47]">
                            <PdfIcon className="cursor-pointer w-[28px]" />
                        </button>


                    </div>
                </div>
            </div>
            <article className="mt-[37px] h-auto">
                <div>
                    <div>
                        <h2 className="text-center xl:text-right text-base xl:text-lg px-[20px] xl:px-0">
                            {currentNews?.miniTitle}
                        </h2>
                        {currentNews && currentNews.images.length === 0 && <Image src={currentNews.imgUrl} className="w-full xl:float-left xl:mr-10 rounded-lg xl:w-[500px] h-auto" width={400} height={300} alt="" />}
                        {currentNews && currentNews.images.length > 0 && <div className="w-full xl:float-left xl:mr-10 rounded-lg xl:w-[500px] h-auto"><CustomGallery slides={currentNews.images} /></div>}
                        <div className="text-justify mt-[27px]">
                            <h1 className="font-bold text-[#284D2C] text-xl xl:text-[32px] px-[20px] xl:px-0 text-center xl:text-right leading-tight">{currentNews?.title}</h1>
                            <div className="px-[20px] xl:px-0">
                                {currentNews?.summary !== "" && <p className="bg-white relative text-[#284D2C] rounded-[10px] mt-[26px] px-[34px] py-[18px]  xl: w-full xl:w-[600px] ml-10 p-4">
                                    {currentNews?.summary}
                                    <Image className="absolute bottom-0 left-[20px] w-[27px] h-[22px]" src={Leaf} alt="" />
                                </p>}
                            </div>
                            <div className="leading-loose text-justify mt-[16px] px-[20px] xl:px-0">
                                {currentNews?.description}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <footer className="mt-[56px] clear-both  flex flex-col xl:flex-row items-center justify-between">
                <div className="items-center gap-[17px] hidden xl:flex">
                    <span>کلمات کلیدی:</span>
                    <section className="flex gap-2 justify-center">
                        <div className="px-3 py-2 rounded-lg bg-slate-200">سرمایه‌گذاری</div>
                        <div className="px-3 py-2 rounded-lg bg-slate-200">تجهیزات</div>
                        <div className="px-3 py-2 rounded-lg bg-slate-200">راهكارهای نوین</div>
                    </section>
                </div>
                <div className="flex items-center gap-[12px]">

                    <div className="flex gap-2 items-center mt-2">
                        <a target="_blank" href={`https://bale.ai/share/url?text=${text}&url=${currentUrl}`}>
                            <button>
                                <BaleIcon className="w-[30px] text-secondary hover:text-primary transition-all" />
                            </button>
                        </a>
                        <a target="_blank" href={`https://eitaa.com/share/url?text=${text}&url=${currentUrl}`}>
                            <button>
                                <EitaaIcon className="w-[30px] text-secondary hover:text-primary transition-all" />
                            </button>
                        </a>
                        <a target="_blank" href={`https://splus.ir/share/url?text=${text}&url=${currentUrl}`}>
                            <button>
                                <SoroushIcon className="w-[30px] text-secondary hover:text-primary transition-all" />
                            </button>
                        </a>
                    </div>


                    <Link href="/news">
                        <button className="bg-primary hover:shadow-xl hover:bg-[#35663ac7]  transition-all w-[52px] h-[40px] text-white font-medium rounded-[8px] flex justify-center items-center gap-[8px]">
                            <Undo2Icon className="w-[20px]" />
                        </button>
                    </Link>
                </div>
            </footer>
            <section>
                <CopyToClipboard text={window.location.href} onCopy={() => console.log(true)}>
                    <div className="flex justify-center m-auto mt-5 gap-2 border w-[300px] p-2 items-center">
                        <input type="text" className="w-[280px]" value={window.location.href} onChange={() => { }} />
                        <button className="flex gap-1" type="button">
                            <CopyIcon />
                            کپی
                        </button>
                    </div>

                </CopyToClipboard>
            </section>
        </section>
    )
}
