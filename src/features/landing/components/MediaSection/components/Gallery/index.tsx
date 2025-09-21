'use client'
import useNews from "@/features/landing/hooks/useNews"
import Item from './components/Item'
import CustomButton from "@/components/kit/CustomButton"
import Link from "next/link"
import useGallery from "@/features/landing/hooks/useGallery"
export default function Index() {
    const { data } = useGallery()
    return <>
        <div className="w-full mx-auto grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
            {data?.elements.slice(0, 6).map((item, index) => (<Item key={index} title={item.persianTitle} id={item.id} date={item.createdOn} imgUrl={item.fileUrl} />))}
        </div>
        <div className="w-full flex justify-center mt-[52px]">
            <Link href="/news">
                <CustomButton className="w-[132px] m-auto">مشاهده بیشتر</CustomButton>
            </Link>
        </div>
    </>
}
