import useFetchNewsQuery from './queries/useFetchNewsQuery'
const useNews = () => {
    const { data, error } = useFetchNewsQuery()
    return {
        data,
        error
    }
}
export default useNews