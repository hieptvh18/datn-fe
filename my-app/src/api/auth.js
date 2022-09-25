import instance from "./instance";

export const signIn = (user) => {
    const url = `/signin`
    return instance.post(url, user)
}