'use client'
import { useParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
const useNewsDetail = () => {
    const { newsId } = useParams()
    const [currentUrl, setCurrentUrl] = useState<string>()
    const [text, setText] = useState<string>()
    const pathName = usePathname()
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
        /*   setCurrentNews(news.find(el => el.id === id)) */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newsId])
    useEffect(() => {
        console.log("pathName", pathName)
    }, [pathName])
    return {
        handlePrint,
        currentUrl,
        text,
        pathName
    }
}
export default useNewsDetail