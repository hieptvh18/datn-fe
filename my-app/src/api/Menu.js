import instance from "./instance";

export const getMenuServices = () => {
    const url = `menuServices`
    return instance.get(url)
}
