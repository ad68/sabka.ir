'use client'
import { DownloadCloud, Link2Icon, MinusIcon, Paperclip, PlusIcon, PrinterIcon, Undo2Icon } from "lucide-react"
import Image from "next/image"
import Leaf from '@/assets/img/contactUs/leaf.png'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useNewsDetail from "../hook/useNewsDetail";
import CustomGallery from "@/components/kit/Gallery";
export default function Index() {
    const { val, setVal, currentNews } = useNewsDetail()
    return (
        <section className="xl:w-[1140px] mb-20 h-auto relative m-auto rounded-xl xl:mt-10 min-h-10 max-w-full">
            <div className="w-full xl:h-[60px] bg-primary p-4 xl:p-0">
                <Image src="/assets/img/news/news-header.png" className="absolute hidden xl:block rounded-lg  z-0 top-0 w-full xl:h-[60px]" width={1400} height={300} alt="" />
                <div className="w-full h-full px-[81px] z-30 relative flex flex-col xl:flex-row  justify-between items-center">
                    <Image src="/assets/img/news/hand.png" className="w-[45] h-[45] hidden xl:block" width={111} height={111} alt="" />
                    <span className="text-white text-lg font-medium">تعداد بازدید :{currentNews?.view}</span>
                    <span className="text-white text-lg font-medium">تاريخ :{currentNews?.date}</span>
                    <span className="text-white text-lg font-medium">ساعت : {currentNews?.time}</span>
                    <div className="flex justify-between text-white gap-[20px]">
                        <PlusIcon className="cursor-pointer" />
                        <MinusIcon className="cursor-pointer" />
                        <Link2Icon className="cursor-pointer" />
                        <Paperclip className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <article className="mt-[37] h-auto">
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
                                {currentNews?.summary !== "" && <p className="bg-white relative text-[#284D2C] rounded-[10px] mt-[26] px-[34] py-[18]  xl: w-full xl:w-[600px] ml-10 p-4">
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
            <footer className="mt-[56px] flex flex-col xl:flex-row items-center justify-between">
                <div className="flex items-center gap-[17px]">
                    <Rating style={{ maxWidth: 110 }} value={val} onChange={setVal} />
                    <span className="text-lg font-medium">امتیاز : 1.00 </span>
                    <span className="text-lg font-medium">مجموع : 1 </span>
                </div>
                <div className="flex gap-[12px]">
                    <button className="bg-primary hover:shadow-xl hover:bg-[#35663ac7]  transition-all w-[150] h-[40] text-white font-medium rounded-[8px] flex justify-center items-center gap-[8px]">
                        <DownloadCloud className="w-[20px]" />
                        دانلود ضمیمه
                    </button>
                    <button className="bg-primary hover:shadow-xl hover:bg-[#35663ac7]  transition-all w-[52] h-[40] text-white font-medium rounded-[8px] flex justify-center items-center gap-[8px]">
                        <PrinterIcon className="w-[20px]" />
                    </button>
                    <button className="bg-primary hover:shadow-xl hover:bg-[#35663ac7]  transition-all w-[52] h-[40] text-white font-medium rounded-[8px] flex justify-center items-center gap-[8px]">
                        <Undo2Icon className="w-[20px]" />
                    </button>
                </div>
            </footer>
        </section>
    )
}
