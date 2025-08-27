export const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
export const isValue = (value: string | number) => {
    if (value === null || value === '' || value === undefined) {
        return false
    } else {
        return true
    }
}
export const numberWithCommas = (num: number | string | undefined) => {
    if (num) {
        if (isValue(num)) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        } else {
            return num
        }
    } else {
        return num
    }

}