import { cn } from "@/lib/utils"
import { ChevronDown, Circle } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"


export default function Index({ item }: any) {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current) {
            if (menuIsOpen) {
                const scrollHeight = ref.current.scrollHeight
                ref.current.style.maxHeight = scrollHeight + "px"
            } else {
                ref.current.style.maxHeight = "0px"
            }
        }
    }, [menuIsOpen])
    return (
        <>
            <div
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className={`py-[4px] font-semibold border-r-[3px] text-sm ${item.active ? `text-primary border-primary` : `text-slate-500`
                    } pr-2 flex justify-between items-center gap-2`}
            >
                <div className="flex gap-2 items-center">
                    <div className={cn(item.active ? "bg-primary" : "bg-white", "w-[30px] shadow-xl p-[5px] h-[30px]  flex justify-center items-center rounded-lg")}>
                        {item.icon}
                    </div>
                    <span>{item.name}</span>
                </div>
                <span>
                    <ChevronDown
                        className={`w-[15px] transition-transform duration-300 ${menuIsOpen ? `rotate-180` : ``
                            }`}
                    />
                </span>
            </div>

            <div
                ref={ref}
                className={`pr-6 bg-slate-50 border-r-[3px] ${item.active ? `border-primary` : `border-slate-100`} flex flex-col   rounded-e-lg overflow-hidden transition-all duration-300 ease-in-out`}
                style={{ maxHeight: 0 }}
            >
                {item.children.map((child: any, index: number) => (
                    <Link
                        key={index}
                        className="flex items-center gap-2 first:mt-2 last:mb-2 text-sm text-slate-600  py-1"
                        href={child.href}
                    >
                        <Circle className={`w-[8px] ${child.active && `stroke-primary fill-primary`}`} />
                        <span className="text-slate-500 ">
                            {child.title}
                        </span>

                    </Link>
                ))}
            </div>
        </>
    )
}
