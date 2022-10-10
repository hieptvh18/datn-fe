import instance from "./instance";

export const addAdvisory = (advisory) => {
    const url = '/advisories'
    return instance.post(url, advisory)
}