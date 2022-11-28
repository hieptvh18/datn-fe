import instance from "./instance";

export const signIn = (user) => {
    const url = `/login`
    return instance.post(url, user)
}
export const getUserById = (phone) => {
    const url = `/patient/list/${phone}`
    return instance.get(url)
}