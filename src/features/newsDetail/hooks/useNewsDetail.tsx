'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { NewsDetail } from "../types"
import { news } from "@/constant/global"

const useNewsDetail = () => {
    const { newsId } = useParams()
    const id = newsId ? Number(newsId) : 0
    const [currentUrl, setCurrentUrl] = useState<string>()
    const [text, setText] = useState<string>()
    const [currentNews, setCurrentNews] = useState<NewsDetail>()


    const sharePage = () => {
        if (typeof window === "undefined") return null;
        setCurrentUrl(encodeURIComponent(window.location.href))
        setText(encodeURIComponent(document.title))
    }
    useEffect(() => {
        sharePage()
    }, [])

    const handlePrint = () => {
        window.print();
    };


    useEffect(() => {
        setCurrentNews(news.find(el => el.id === id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newsId])
    useEffect(() => {
        console.log("currentNews", currentNews)
    }, [currentNews])
    return {
        currentNews,
        handlePrint,
        currentUrl,
        text
    }
}
export default useNewsDetail