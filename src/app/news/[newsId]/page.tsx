import { NextPage } from 'next'
import NewsDetail from '@/features/newsDetail/components/NewsDetail'
import { fetchNewsDetail } from '@/features/newsDetail/api/fetchNewsDetail.server'
import { IndexProp } from '@/features/newsDetail/types'

const Index: NextPage<IndexProp> = async ({ params }) => {
    try {
        const { newsId } = await params
        const data = await fetchNewsDetail(newsId)
        return <>
            <NewsDetail data={data} />
        </>
    } catch (err: any) {
        return "eeeee"
    }
}
export default Index



