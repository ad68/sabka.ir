'use client'

import useNews from "@/features/landing/hooks/useNews"
import Item from './components/Item'
export default function Index() {
    const { data } = useNews()
    return <>
        {data?.elements.slice(0, 6).map((item, index) => (<Item key={index} title={item.persianTitle2} id={item.id} date={item.createdOn} imgUrl={item.fileUrl} />))}
    </>
}
