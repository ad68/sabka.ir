import React from 'react';
import Image from "next/image";

export type PicType = {
    src: string;
    description: string;
};

export type MenuItemType = {
    onClick?: () => void;
    title: string;
};

export type Props = {
    picArray: PicType[];
    menuItems: MenuItemType[];
};

export default function Index({picArray, menuItems}:{picArray:PicType[] , menuItems:MenuItemType[]}) {
    return (
        <section className="flex flex-row items-start justify-between w-full p-6
        shadow-[0px_10px_14px_-60px_#72814E73]">
            <ul className="flex flex-col gap-2">
                {menuItems.map((item, i) => (
                    <li key={i} onClick={item.onClick} className="hover:bg-[#E3E6DC] text-sm hover:rounded-full hover:font-bold p-2 cursor-pointer transition-all">
                        {item.title}
                    </li>
                ))}
            </ul>

            <ul className="flex flex-row gap-4">
                {picArray.map((pic, i) => (
                    <li key={i} className="flex flex-col items-center w-[200px] md:w-[250px]">
                        <section className='relative  bg-cover bg-center z-20 w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl'>
                            <Image
                                src={pic.src}
                                alt={pic.description}
                                layout="fill"
                                objectFit="cover"
                            />
                        </section>
                        <p className="text-sm mt-2 text-right">{pic.description}</p>
                    </li>
                ))}
            </ul>
        </section>

    );
};
