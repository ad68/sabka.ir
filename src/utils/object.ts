
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objectToQueryString = (obj: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const filteredObj: any = Object.fromEntries(Object.entries(obj).filter(([key, value]) => value !== null && value !== undefined && value !== ""));
    const params = new URLSearchParams(filteredObj);
    return params.toString();
};
