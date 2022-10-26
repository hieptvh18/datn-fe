import instance from "./instance";

export const getFeedBack = () => {
    const url = `/feedback/list`
    return instance.get(url)
}
