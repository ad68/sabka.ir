"use client"
import React from 'react';
import { LogoIcon } from "@/assets/icons/LogoIcon";
import { EmailIcon } from "@/assets/icons/EmailIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { IranFlag } from "@/assets/icons/IranFlag";
import { UserIcon } from "@/assets/icons/UserIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import SocialMedia from "@/features/landing/components/SocialMedia/SocialMedia"
import { useIsMobile } from "@/features/products/hooks/useIsMobile";
export default function Index() {
    const isMobile = useIsMobile();
    return (
        <>
            {isMobile ?
                <>
                    <header className="w-full bg-white flex flex-col justify-center items-center py-2 overflow-hidden">
                        <section className='w-full flex flex-row justify-between items-center text-xs font-semibold px-8'>
                            <span>WWW.SBIKIAN.IR</span>
                            <section className='flex flex-row justify-center items-center gap-2'>
                                <section className="flex flex-row items-center gap-1 text-xs  px-2 justify-center border-l-[1px] border-l-black">
                                    <span>۲۰۰۰۴۸۸۲</span>
                                    <EmailIcon className='w-4 h-4' />
                                </section>
                                <section className="flex flex-row items-center gap-1 text-xs  justify-center px-2">
                                    <span>۶۴۰۰۹۰۰۰</span>
                                    <PhoneIcon className='w-4 h-4' />
                                </section>
                            </section>
                        </section>

                        <section className='w-full flex flex-row justify-between items-center px-8'>
                            <section className='flex flex-row justify-start items-center gap-3'>
                                <section className='flex flex-row justify-start items-center gap-3'>
                                    <LogoIcon />
                                </section>
                            </section>
                            <section className="flex items-center flex-row gap-2">

                                <button className="flex items-center justify-center border-[1px] border-black p-1 rounded-lg">
                                    <SearchIcon className='w-5 h-5 ' />
                                </button>

                                <button className="flex items-center gap-1 justify-center border-[1px] border-black p-1 rounded-lg">
                                    <IranFlag className='w-5 h-5 ' />
                                </button>

                                <button className="flex items-center justify-center bg-[#35663A] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                                    <span>ورود</span>
                                </button>
                            </section>

                        </section>

                    </header>
                </>
                :
                <>
                    <header className="max-w-6xl m-auto bg-white flex flex-col justify-center items-center py-2 overflow-hidden">
                        <section className='w-full flex flex-row justify-between items-center text-xs font-semibold px-8'>
                            <span>WWW.SBIKIAN.IR</span>
                            <SocialMedia />
                        </section>

                        <section className='w-full flex flex-row justify-between items-center px-8'>
                            <section className='flex flex-row justify-start items-center gap-3'>
                                <section className='flex flex-row justify-start items-center gap-3'>
                                    <LogoIcon />
                                    <span className='text-sm'>شنبه 4 مرداد 1404</span>
                                </section>
                                <section className="relative w-full min-w-44">
                                    <input type="text" id="search"
                                        className="w-full px-6 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-50"
                                        placeholder="جستجو ..." />
                                    <SearchIcon className='w-4 h-4 ml-2 absolute right-1 bottom-1/2 translate-y-1/2' />
                                </section>

                            </section>
                            <section className="flex items-center space-x-4">

                                <section className="flex flex-row items-center gap-1 text-xs  px-2 justify-center border-l-[1px] border-l-black">
                                    <span>۲۰۰۰۴۸۸۲</span>
                                    <EmailIcon className='w-4 h-4' />
                                </section>
                                <section className="flex flex-row items-center gap-1 text-xs  justify-center px-2">
                                    <span>۶۴۰۰۹۰۰۰</span>
                                    <PhoneIcon className='w-4 h-4' />
                                </section>


                                <button className="w-[72px] h-[40px] flex items-center  justify-center gap-[8px] border-[1px] border-black py-[10px] rounded-lg ">
                                    <IranFlag />
                                    <span>فا</span>
                                </button>

                                <button className="flex h-[40px] items-center justify-center bg-[#35663A] text-white px-4 py-[10px] rounded-lg text-sm font-semibold">
                                    <UserIcon />
                                    <span>ورود</span>
                                </button>
                            </section>

                        </section>

                    </header>
                </>
            }

        </>
    );
};

