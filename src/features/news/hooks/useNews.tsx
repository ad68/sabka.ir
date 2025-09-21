'use client'
import { useEffect, useState } from 'react'
import useFetchNewsQuery from './queries/useFetchNewsQuery'
import { scrollToTop } from '@/utils'
const useNews = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)
    const { data, error, refetch } = useFetchNewsQuery(currentPage - 1)
    useEffect(() => {
        if (data) {
            setTotal(data.totalElements)
        }
    }, [data])
    useEffect(() => {
        console.log('currentPage', currentPage)
        scrollToTop()
        refetch()
    }, [currentPage])
    return {
        data,
        currentPage,
        setCurrentPage,
        total,
        error
    }
}
export default useNews