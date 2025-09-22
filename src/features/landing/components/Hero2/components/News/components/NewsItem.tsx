import Image from "next/image";
import Link from "next/link";

export default function Index({ img }: any) {
    return <Link href="#" className="w-full flex items-center gap-[12px]">
        <Image width={200} height={200} className="w-[119px]" src={img} alt="" />
        <div className="w-[2px] h-[81px] bg-primary"></div>
        <div className="flex flex-col">
            <span className="text-sm text-[#A0A0A0]"> 3 مرداد 1404</span>
            <span className="text-lg font-bold">گفت‌وگو با مدیران بیمه کشاورزی درباره چالش‌ها و برنامه‌ها</span>
        </div>
    </Link>
}
