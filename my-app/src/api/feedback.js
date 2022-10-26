import instance from "./instance";

export const getFeedBack = () => {
    const url = `/feedback/list`
    return instance.get(url)
}

export const addFeedBack = (data) => {
    const url = `/feedback/add`
    return instance.post(url, data)
}
