'use client'
import CustomButton from "@/components/kit/CustomButton";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { ArrowLeft, EyeIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import rightBg from '@/assets/img/landing/third-right-bg.png'
import leftBg from '@/assets/img/landing/third-left-bg.png'
export default function Index() {
    return <section className="h-screen w-full mt-[-82px]  flex flex-col justify-center items-center">
        <Image width={400} height={400} alt='' className=' w-[100px] xl:w-auto h-auto absolute right-0 top-[100px]' src={rightBg} />
        <Image width={400} height={400} alt='' className='w-[100px] xl:w-auto h-auto absolute left-0 top-[100px]' src={leftBg} />
        <div className="text-center text-2xl font-bold text-primary">
            ورود به پنل مدیریت
        </div>
        <section className="w-[550px] max-w-full  border-t-[4px] py-10 px-10 border-b-[2px] border-t-primary border-b-secondary rounded-[10px] mt-4 bg-white">
            <Link href="/">
                <Image width={100} height={100} className="w-[100px] m-auto" src="/assets/img/sandoogh-logo.png" alt="logo" />
            </Link>
            <div className="flex flex-col gap-4">
                <div>
                    <span>نام کاربری</span>
                    <div className="relative">
                        <UserIcon className="absolute top-[10px] right-2 text-primary" />
                        <CustomTextBox placeholder="نام کاربری خود را وارد کنید" className="mt-2 pr-[38px]" onChange={() => { }} />
                    </div>
                </div>
                <div className="relative mt-2">
                    <span>کلمه عبور</span>
                    <div className="relative">
                        <EyeIcon className="absolute top-[13px] right-2 text-primary" />
                        <CustomTextBox placeholder="رمز عبور خود را وارد کنید" className="mt-2 pr-[38px]" onChange={() => { }} />
                    </div>
                </div>
                <div className="mt-5">
                    <CustomButton className="w-full">ورود</CustomButton>
                </div>
                <div className="text-center  mt-5 font-bold  text-primary">
                    <Link href="/" className="flex justify-center items-center">
                        بازگشت به سایت
                        <ArrowLeft />
                    </Link>
                </div>
            </div>
        </section>
    </section>
}