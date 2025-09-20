'use client'

import useNews from "@/features/landing/hooks/useNews"
import Item from './components/Item'
export default function Index() {
    const { data } = useNews()
    return <>
        <Item title="ali" id={1} date="ssssss" imageUrl="imgUrl" />
    </>
}
