import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Index({ title, subMenus }: any) {
    const [isOpen, setIsOpen] = useState(false)
    return <div className="flex flex-col">
        <button onClick={() => setIsOpen(!isOpen)} className="flex gap-1 items-center xl:text-xs 2xl:text-[14px] text-black">
            {title}
            {isOpen ? <ChevronUp className="w-[15px]" /> : <ChevronDown className="w-[15px]" />}

        </button>
        {isOpen && <div className="flex flex-col gap-1 pr-4 text-sm mt-2 text-primary">
            {subMenus.map((item: any, index: number) => (
                <Link href={item.href} key={index}>
                    {item.title}</Link>
            ))}
        </div >}

    </div>
}
