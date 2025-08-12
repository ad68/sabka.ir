"use client"
import FirstSection from '@/features/landing/components/fistSection/components/FirstSection';
import SecondSection from '@/features/landing/components/secondSection/components/SecondSection';
import AvailableServices from '@/features/landing/components/availableServices/components/AvailableServices';
import Products from '@/features/landing/components/products/components/Products';
import Academy from '@/features/landing/components/academy/components/Academy';
import Events from '@/features/landing/components/events/components/Events';
import Assist from '@/features/landing/components/assist/components/Assist';
import Comments from '@/features/landing/components/comments/components/Comments';
import Questions from '@/features/landing/components/questions/components/Questions';
import Companion from '@/features/landing/components/companion/Companion';
import Cta from '@/features/landing/components/cta/components/Cta';
import React, { useRef } from "react";
import Header from "@/components/layout/home/Header";
import Footer from "@/components/layout/home/Footer";
import ScrollButton from "@/components/kit/ScrollButton";
export default function Index() {
    const firstSectionRef = useRef<HTMLElement | null>(null);
    return (
        <section className="w-full  m-auto  flex flex-col justify-center items-center overflow-x-hidden">
            <Header />
            <section className='max-w-7xl xl:max-w-full p-10'>
                <FirstSection />
                <section className="flex items-center justify-center cursor-pointer">
                    <ScrollButton scrollTargetRef={firstSectionRef} />
                </section>
                <section ref={firstSectionRef}>
                    <SecondSection />
                </section>
                <AvailableServices />
                <Products />
                <Academy />
                <Events />
                <Assist />
            </section>
            <section className='w-full'>
                <Comments />
                <Questions />
                <Companion />
                <Cta />
                <Footer />
            </section>
        </section>
    )
}