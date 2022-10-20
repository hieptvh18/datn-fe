import instance from "./instanceJson";

export const getFeedBack = () => {
    const url = `feedbacks`
    return instance.get(url)
}
