import React from 'react';

export type PicType = {
    src: string;
    description: string;
};

export type MenuItemType = {
    onClick?: () => void;
    title: string;
    children?:MenuItemType[],
};

export type Props = {
    menuItems: MenuItemType[];
};

export default function Index({ menuItems }: {  menuItems: MenuItemType[] }) {
    return (
        <section className="flex flex-row items-start justify-between w-full p-6
        shadow-[0px_10px_14px_-60px_#72814E73]">
            <ul className="flex flex-col gap-2">
                {menuItems.map((item, i) => (
                    <li key={i} onClick={item.onClick}
                        className="hover:bg-[#E3E6DC] text-sm hover:rounded-full hover:font-bold p-2 cursor-pointer transition-all"
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </section>

    );
};
