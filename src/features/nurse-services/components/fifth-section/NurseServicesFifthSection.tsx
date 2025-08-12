import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
import React from "react";

const steps = [
    {icon:<StarTwoIcon className='w-10 h-10' color={'#FF7700'}/>, stepNumber:1 , title:'مرحله اول' , description:'ثبت درخواست اولیه برای پرستار' , },
    {icon:<StarTwoIcon className='w-8 h-8' color={'#FF7700'}/>, stepNumber:2 , title:'مرحله دوم' , description:'معرفی پرستاران واجد شرایط توسط ژوار' , },
    {icon:<StarTwoIcon className='w-5 h-5' color={'#FF7700'}/> , stepNumber:3 , title:'مرحله سوم' , description:'انتخاب نهایی توسط شما و تست اولیه رایگان' , },
]
export default function NurseServiceFifthSection() {
    return (
        <section className="w-full rounded-2xl flex flex-col justify-start items-center  gap-2 overflow-hidden p-2 md:p-0">
            <p className='flex flex-row justify-start items-center gap-2'>
                درخواست پرستار{" "}
                <span>
            <StarTwoIcon className='w-5 h-5' color={'#FF7700'} />
          </span>
            </p>
            <p className='text-xl tracking-wide'>
                <span className='font-bold'>انتخاب بهترین پرستار؛</span>
                <span>ساده تر از همیشه </span>
            </p>
            <ul className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mt-10'>
                {steps.map(step => (
                    <li className='relative w-48 h-48 rounded-full z-10 flex flex-col p-4 justify-center items-center  text-center border-2  border-[#72814E] border-opacity-25'  key={step.stepNumber}>
                            <p className='absolute text-amber-500 top-0 left-[-10px] text-4xl font-bold '>{step.stepNumber}</p>
                        <section className='absolute left-[-35px] top-[-10px] -z-20 w-44 h-44  p-2 rounded-full flex flex-col  justify-center items-center  bg-green-200 opacity-40 border-opacity-15'></section>
                        <section className='absolute w-44 h-44 bg-white z-10  top-0 p-2 rounded-full flex flex-col  justify-center items-center border-2 border-[#72814E] border-opacity-15'>
                            <p>{step.icon}</p>
                            <p className='font-bold text-sm'>{step.title}</p>
                            <p className='w-full font-normal text-xs max-w-xs'>{step.description}</p>
                        </section>
                    </li>
                ))}
            </ul>

        </section>
    )
}