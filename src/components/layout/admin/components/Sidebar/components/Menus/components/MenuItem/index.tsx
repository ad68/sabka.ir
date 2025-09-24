import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Index({ item }: any) {
    return <Link to={item.href} className={`py-[4px]  font-semibold border-r-[3px] text-sm ${item.active ? `text-primary border-primary` : `text-slate-500`} pr-2 flex items-center gap-2`}>
        <div className={cn(item.active ? "bg-primary" : "bg-white", "w-[30px] shadow-xl p-[5px] h-[30px]  flex justify-center items-center rounded-lg")}>
            {item.icon}
        </div>
        {item.name}
    </Link>
}
