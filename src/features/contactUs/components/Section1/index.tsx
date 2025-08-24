import Image from "next/image";
import Leaf from '@/assets/img/contactUs/leaf.png'
export default function Index() {
    return <div className="h-[707px] relative flex justify-center items-center">

        <Image width={1920} height={707} quality={100} className="w-full absolute top-0 h-[707px]" src="/assets/img/contact/contact-bg.jpg" alt="contact-us" />
        <h2 className="flex items-center relative text-[48px] font-bold z-10 gap-[5px] text-white">
            <Image className="w-[27px] h-[22px] absolute top-[-20px] left-0" src={Leaf} alt="" />
            با ریشه‌های عمیق، همراه آینده‌ای <span className="w-[94px] h-[56px] flex justify-center items-center bg-[#DAFFDE] text-[#558C5A]">سبز</span></h2>
    </div>
}
