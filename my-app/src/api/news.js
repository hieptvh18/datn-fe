import instance from "./instance";

export const getNews = () => {
    const url = '/news/list'
    return instance.get(url)
}
export const getNewsById = (id) => {
    const url = `/news/detail/${id}`
    return instance.get(url)
}