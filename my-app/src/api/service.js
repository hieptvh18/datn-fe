import instance from "./instance";

export const getService = () => {
    const url = `/services/list`
    return instance.get(url)
}

export const getServiceById = (id) => {
    const url = `services/${id}`
    return instance.get(url)
}

export const getListTop4 = () => {
    const url = `/services/listTop4`
    return instance.get(url)
}
