import React from "react";

export default function Index({title , desc }:{title:string , desc:string}) {
    return (
        <section
            className={`
    bg-[#7BB28033] text-right rounded-2xl
    min-h-[280px] max-w-[350px] w-full
    p-4 flex flex-col justify-center items-center gap-4
    transition-transform duration-300
  `}
        >
            <p className="text-[#E9AA1E] font-bold text-lg">{title}</p>
            <section className="text-white text-sm leading-relaxed w-[96%] mx-auto">
                {desc}
            </section>
        </section>

    )
}