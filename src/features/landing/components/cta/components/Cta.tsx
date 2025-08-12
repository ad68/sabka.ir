import {Logo} from "@/assets/icons/Logo";
import React from "react";
import {LinkedinIcon} from "@/assets/icons/LinkedinIcon";
import {InstagramIcon} from "@/assets/icons/InstagramIcon";
import {TwitterIcon} from "@/assets/icons/TwitterIcon";
import {FacebookIcon} from "@/assets/icons/FacebookIcon";
import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";
const socialMedias = [
    { icon: <LinkedinIcon /> },
    { icon: <InstagramIcon /> },
    { icon: <TwitterIcon /> },
    { icon: <FacebookIcon /> },
];
export default function Index() {
    return (
        <section className='w-full flex flex-col gap-1 text-center bg-black justify-center items-center pt-12' style={{
            backgroundImage: "url('/assets/img/cta/CtaBackground.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>

            <section className='flex flex-row gap-1 justify-center items-center'>
                <StarTwoIcon className='w-4 h-4'/><Logo color={'#DDA865'}/> <StarTwoIcon className='w-6 h-6'/>
            </section>

            <section className='max-w-2xl mt-1'>
                <p className='text-white p-2'>
                    ما در ژوار با گردآوری خدمات مراقبتی، درمانی، رفاهی و اجتماعی، تلاش می‌کنیم زندگی را برای افراد پرتجربه ساده‌تر، امن‌تر و انسانی‌تر کنیم. از پرستار در منزل تا مشاوره، تجهیزات پزشکی و همراهی در فعالیت‌های روزمره—همه‌چیز اینجاست، با احترام به تجربه‌ی زندگی.
                </p>
                <p className='text-xl text-white mt-4'><span className='font-bold'>با ما همراه شوید! </span><span>برای دریافت اخبار مفید عضو شوید</span></p>

            </section>
            <section className="w-full flex flex-row justify-center items-center mt-4 mb-6">
                <ul className="flex flex-row gap-10 rounded-2xl ">
                    {socialMedias.map((media, index) => (
                        <li key={index} className="group cursor-pointer ">
                            {React.cloneElement(media.icon ,
                                {color: 'white',
                                className: "transition-colors duration-300 group-hover:text-[#72814E]",})}
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}