
"use client"
import ListGallery from "@/components/kit/ListGallery"
import { useSearchParams } from "next/navigation"

export default function Index() {
    const searchParams = useSearchParams()
    const title = searchParams.get('title')
    const list = [

        { imageUrl: "/assets/img/news/news13-2.jpg" },
        { imageUrl: "/assets/img/news/news13-3.jpg" },
        { imageUrl: "/assets/img/news/news13-4.jpg" },
        { imageUrl: "/assets/img/news/news13-5.jpg" },
        { imageUrl: "/assets/img/news/news13-6.jpg" },
        { imageUrl: "/assets/img/news/news13-7.jpg" },
        { imageUrl: "/assets/img/news/news13-8.jpg" },
        { imageUrl: "/assets/img/news/news13-9.jpg" },
        { imageUrl: "/assets/img/news/news13-10.jpg" },

        { imageUrl: "/assets/img/news/news13-2.jpg" },
        { imageUrl: "/assets/img/news/news13-3.jpg" },
        { imageUrl: "/assets/img/news/news13-4.jpg" },
        { imageUrl: "/assets/img/news/news13-5.jpg" },
        { imageUrl: "/assets/img/news/news13-6.jpg" },
        { imageUrl: "/assets/img/news/news13-7.jpg" },
        { imageUrl: "/assets/img/news/news13-8.jpg" },
        { imageUrl: "/assets/img/news/news13-9.jpg" },
        { imageUrl: "/assets/img/news/news13-10.jpg" },
    ]
    return <section className="max-w-6xl mt-[40px] m-auto p-2 mb-[40px]">
        <h1 className="font-bold text-center mb-5 text-xl text-primary mt-[40px]">{title}</h1>
        <ListGallery listMode={true} slides={list} />
    </section>
}
