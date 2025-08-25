import { ReactElement } from "react"

export type NewsDetail = {
    id: number
    imgUrl: string
    title: string
    miniTitle: string
    summary: string
    description: ReactElement,
    date: string,
    time: string,
    view: string
}
