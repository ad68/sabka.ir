
import Image from "next/image";
import Link from "next/link";
export default function Index({ href, imageSrc, title }: any) {
    return <Link href={href} className="w-full relative  cursor-pointer group transition-all duration-300 ease-in-out min-h-2">
        <Image width={400} height={400} className="w-full rounded-[10px]" src={imageSrc} alt="" />
        <div>
            <div className="bg-primary text-white rounded-xl mt-1  px-3 py-2 text-sm">{title}</div>
        </div>
    </Link>
}
