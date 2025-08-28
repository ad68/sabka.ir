import { ReactElement } from "react"
type ImageList = {
    imageUrl: string
}
export type NewsDetail = {
    id: number
    imgUrl: string,
    images: ImageList[]
    title: string
    miniTitle: string
    summary: string
    description: ReactElement,
    date: string,
    time: string,
    view: string
}
