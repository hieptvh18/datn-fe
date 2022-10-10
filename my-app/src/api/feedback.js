import instance from "./instance";

export const getFeedBack = () => {
    const url = `feedbacks`
    return instance.get(url)
}
