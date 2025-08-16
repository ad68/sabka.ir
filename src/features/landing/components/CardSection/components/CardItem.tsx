import {ArrowRTLIcon} from '@/assets/icons/ArrowRTL';
import Link from "next/link";

export default function Index({ title, icon, desc , link , index}) {
    const textColor =     (index % 2 == 0) ? 'text-[#E9AA1E]' :'text-[#558C5A]';
    const bgColor =     (index % 2 == 0) ? '#E9AA1E' :'#558C5A';
    return (
        <div className="relative w-[300px] hover:shadow-2xl hover:-translate-y-2 transition-all ">
            {/* Dots along the right side */}
            <div
                className={`
                    pointer-events-none absolute -right-4 top-2 bottom-2 w-3 mt-14
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                    ${textColor}
                    `}
            />

            {/* Dots along the left side */}
            <div
                className={`
                    pointer-events-none absolute -left-4 -top-3 bottom-40 w-3
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                        ${textColor}
                    `}
            />

            {/* Dots above the card */}
            <div
                className={`
                    pointer-events-none absolute left-0 right-[50px] -top-4 h-3
                    bg-[radial-gradient(circle,currentColor_2.5px,transparent_2.5px)]
                    [background-size:13px_13px] bg-repeat
                    ${textColor}
                    `}
            />

            {/* Card */}
            <div className="relative h-[400px] rounded-2xl bg-white p-6 shadow-xl flex flex-col justify-center">
                {/* Corner-only border (top+right) */}
                <span
                    className={`
                        pointer-events-none absolute -top-3 -right-3 block h-16 w-16
                        border-4  border-l-0 border-b-0
                        rounded-tr-[32px]
                        `}
                    style={{ borderColor: bgColor }}
                />

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    {icon}
                    {/*<svg*/}
                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                    {/*    viewBox="0 0 24 24"*/}
                    {/*    fill="none"*/}
                    {/*    stroke="currentColor"*/}
                    {/*    strokeWidth="1.5"*/}
                    {/*    className="w-10 h-10 text-gray-700"*/}
                    {/*>*/}
                    {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l4 4 8-8" />*/}
                    {/*</svg>*/}
                </div>

                {/* Title */}
                <h2 className="text-center font-bold mb-2">{title}</h2>

                {/* Description */}
                <p className="text-center text-sm text-gray-600 leading-6">
                    {desc}
                </p>

                {/* Folded corner */}
                <Link href={link}
                    className={`
                        absolute -bottom-0 -left-0 h-24 w-24 
                        [clipPath:polygon(0%_0%,0%_100%,100%_100%)]
                        rounded-tr-xl flex items-center justify-center
                        `}
                      style={{ backgroundColor: bgColor }}
                >
                    <ArrowRTLIcon  className="w-4 h-4 text-white left-3 top-[3.5rem] absolute"  />
                </Link>
            </div>
        </div>

    );
}
