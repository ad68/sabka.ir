import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
export default function Index({ playVideo, thumbSrc, videoSrc, date }: any) {
    return <div onClick={() => playVideo(videoSrc)} className="w-full relative  cursor-pointer group transition-all duration-300 ease-in-out min-h-2">
        <Image width={400} height={400} className="w-full rounded-[10px]" src={thumbSrc} alt="" />
        <div className="absolute top-0 w-[200ppx] bg-[#00000085] z-50 text-white rounded-br-2xl left-0 px-4 py-1 text-[12px]">{date}</div>
        <div className="w-full mt-[60px] flex justify-center items-center top-0 absolute">
            <PlayCircleIcon className="w-[100px] text-secondary group-hover:text-black transition-all duration-300 h-[100px]" />
        </div>
        <div>
            <div className="bg-primary text-white rounded-xl mt-1  px-3 py-2 text-sm">پوستر موشن چهل و یکمین سالگرد تأسیس صندوق بیمه کشاورزی</div>

        </div>
    </div>
}
