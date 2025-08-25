
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { NewsDetail } from "../types"
import { news } from "@/constant/global"

const useNewsDetail = () => {
    const { newsId } = useParams()
    const id = newsId ? Number(newsId) : 0
    const [currentNews, setCurrentNews] = useState<NewsDetail>()
    const [val, setVal] = useState(0)

    useEffect(() => {
        setCurrentNews(news.find(el => el.id === id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newsId])
    useEffect(() => {
        console.log("currentNews", currentNews)
    }, [currentNews])
    return {
        setVal, val, currentNews
    }
}
export default useNewsDetail