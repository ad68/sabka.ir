export type GlobalResponse<T> = {
    time_stamp: string
    error_code: string
    message: string
    response: T
}
