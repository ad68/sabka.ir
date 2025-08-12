import React from "react";
import {FavoriteIcon} from "@/assets/icons/FavoriteIcon";
import {ProductBackground} from "../../../../../../../public/assets/img/products/ProductBackground";
import Link from "next/link";
import Image from "next/image";

type Props = {
    title: string;
    isSpecialOffer: boolean;
    isFavourite: boolean;
    image: string;
    offerPercent: number;
    category: string;
    originalAmount: number;
    stars: number;
    id: number;
};
const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);
export default function Index({
                                  title,
                                  isSpecialOffer,
                                  isFavourite,
                                  image,
                                  offerPercent,
                                  category,
                                  originalAmount,
                                  stars,
                                  id,
                              }: Props) {
    return (
        <section className="relative w-[250px] h-[350px] bg-transparent overflow-hidden ">
            {!isSpecialOffer && (
                <section className='z-10 relative p-5'>
                    <section className='w-full flex flex-row justify-between '>
                        <p className='text-[10px] w-20 h-6 justify-center items-center flex text-[#BB4733] bg-[#F9EDEB] rounded-full'>{category}</p>
                        {offerPercent && (
                            <p className='flex justify-center items-center w-8 h-6  bg-[#ED1C24] text-white font-bold rounded-lg p-1 text-xs'>
                                % {offerPercent}
                            </p>
                        )}
                        <p className="w-8 h-8 rounded-full flex justify-center items-center bg-[#0707070F]">
                            <FavoriteIcon className='' color='#888'/>
                        </p>
                    </section>
                        <p className='text-sm font-bold my-2'>{title}</p>
                    <section className='flex flex-row justify-between items-center'>
                        {offerPercent && (
                         <p className='flex flex-row gap-1 justify-center items-center'>
                            <span className="text-lg font-bold text-[#151516]">
                                {formatPrice((originalAmount - (originalAmount * offerPercent) / 100))}
                        </span>
                             <span className='text-[12px]'>
                            تومان
                            </span>
                         </p>
                        )}
                        <span className={`text-sm font-bold ${offerPercent ? "line-through text-gray-500" : ""}`}>
                        {formatPrice(originalAmount)}
                    </span>
                        <span className='flex flex-row justify-between items-center gap-1 text-xs'>
                    <span className='flex flex-row gap-0 justify-start items-center'>
                                                <span className='text-sm'>5</span>/
                        <span className='text-lg'>{stars}</span>
                    </span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={'#FF9900'}
                            stroke="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </span>
                </span>
                    </section>
                    <section className='relative  w-full h-[210px] bg-contain bg-center z-20'>
                            <Image
                                src={image}
                                alt={title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </section>
                </section>
            )}
            {isSpecialOffer && (
                <section className='z-10 relative p-5 flex flex-col justify-center items-center text-center gap-2 text-white overflow-hidden'>
                    <section>
                        <p className='text-sm'>پیشنهاد ویژه</p>
                        <p className='text-sm font-semibold'>{title}</p>
                    </section>
                    <p className='text-3xl font-bold mt-2'>
                        {offerPercent}  % تخفیف
                    </p>
                    <section className='relative w-full h-[200px] bg-cover bg-center z-20'>
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </section>
                </section>
            )}
            <svg
                width="250"
                height="350"
                viewBox="0 0 300 433"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 w-full h-auto"
            >
                <path
                    d="M280 1.44824H5C2.51473 1.44824 0.5 3.46296 0.5 5.94824V331.008C0.500275 346.034 13.175 357.883 28.0762 356.98L28.7871 356.928C55.8157 354.563 78.6263 376.84 77.3154 403.839L77.2803 404.478C76.3371 419.568 88.3145 432.448 103.428 432.448H295C297.485 432.448 299.5 430.434 299.5 427.948V20.9482C299.5 10.1787 290.77 1.44824 280 1.44824Z"
                    fill={isSpecialOffer ? '#D62D08' :'white'}
                    stroke="#AAB395"
                />
            </svg>
            <section className="absolute inset-0 z-0 overflow-hidden">
                <ProductBackground />
            </section>
            <p className={`absolute bottom-2 text-sm right-10 font-bold ${isSpecialOffer ?'text-white' : 'text-[#72814E]'}`}>
                <span>افزودن به سبد خرید</span>
            </p>
            <section className="absolute bottom-0 left-0 w-16 h-16 rounded-tl-full  flex justify-center items-center z-10">
                <Link href={'/'}>
                    <button className="bg-[#72814E] text-[white] p-3 rounded-full shadow-lg ">
                        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                            <path d="M15.8635 12.0841H26.1925C26.2243 12.0841 26.7006 12.281 26.7762 12.3207C28.029 12.9879 28.03 14.908 26.7762 15.5751C26.7016 15.6149 26.2243 15.8118 26.1925 15.8118H15.8635V26.1408C15.8635 26.1726 15.6667 26.6489 15.6269 26.7244C14.9597 27.9773 13.0397 27.9783 12.3725 26.7244C12.3327 26.6499 12.1358 26.1726 12.1358 26.1408V15.8118H1.80687C1.77505 15.8118 1.29877 15.6149 1.22321 15.5751C-0.0296342 14.908 -0.0306285 12.9879 1.22321 12.3207C1.29778 12.281 1.77505 12.0841 1.80687 12.0841H12.1358V1.75511C12.1358 1.7233 12.3327 1.24702 12.3725 1.17145C13.0397 -0.081392 14.9597 -0.0823863 15.6269 1.17145C15.6667 1.24602 15.8635 1.7233 15.8635 1.75511V12.0841Z" fill="white"/>
                        </svg>
                    </button>
                </Link>
            </section>

        </section>
    );
};
