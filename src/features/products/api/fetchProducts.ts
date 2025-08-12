import { fetchApi } from '@/config/axiosConfig'
/* import { GlobalResponse } from '@/shared/types/api/responses' */
import { ProductsResponse } from '../types'

export const fetchProducts = async () => {
    const response: ProductsResponse = await fetchApi.get('https://apitester.ir/api/Products')
    return response
}