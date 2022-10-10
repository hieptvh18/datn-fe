import instance from "./instance";

export const getService = () => {
    const url = `services`
    return instance.get(url)
}

export const getServiceById = (id) => {
    const url = `services/${id}`
    return instance.get(url)
}

export const getListTop4 = () => {
    const url = `services?_sort=createdAt&_order=asc&_limit=4`
    return instance.get(url)
}
