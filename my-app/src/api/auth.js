import instance from "./instance";

export const signIn = (user) => {
    const url = `/login`
    return instance.post(url, user)
}
export const getUserById = (id) => {
    const url = `/users/${id}`
    return instance.get(url, id)
}