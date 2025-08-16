import React from "react";

export default function Index({title , desc , isCenter , onClick}) {
    return (
        <section onClick={onClick} className={`bg-[#7BB28033]  text-right rounded-2xl p-4 flex justify-center items-end flex-col gap-4
        transition-transform duration-300 scale-90 
        `}

        >
            <p className='text-[#E9AA1E] font-bold'>{title}</p>
            <section className='text-white'>{desc}</section>
        </section>
    )
}