import Image from "next/image";
import React from "react";

export default function Index(item: { image: string; title: string;description:string;  }) {
    const { image, title,description } = item;

    return (
        <section
            className="w-[220px] relative h-auto flex flex-col justify-center items-center gap-1 p-1 md:p-2 rounded-lg bg-transparent hover:bg-[#72814E]  group">
                    <section className="relative w-24 h-24 ">
                        <section className= 'flex justify-center items-center w-[100%] h-[100%] m-auto '>
                            <Image
                                layout='fill'
                                objectFit='contain'
                                src={image}
                                alt={title}
                                className=""
                            />
                        </section>

                    </section>
            <section className="text-center flex justify-start  min-h-[150px]  items-center flex-col">
                    <p className="flex text-[10px] md:text-[12px] font-semibold group-hover:text-white min-h-[20px] ">{title}</p>
                    <p className="md:flex font-normal text-[#151516] mt-0 md:mt-3 text-sm   group-hover:text-white">{description}</p>
            </section>
        </section>
    )
}