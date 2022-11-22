import instance from "./instance";

export const getMenuServices = () => {
    const url = `/services/list`
    return instance.get(url)
}
