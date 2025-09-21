import useFetchGalleryQuery from './queries/useFetchGalleryQuery'

const useGallery = () => {
    const { data, error } = useFetchGalleryQuery()
    return {
        data,
        error
    }
}
export default useGallery