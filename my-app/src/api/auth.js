import instance from "./instance";

export const signIn = (user) => {
    const url = `/login`
    return instance.post(url, user)
}
export const getUserById = (phone, patientId) => {
    const url = `/patient/detail/${phone}/${patientId}`
    return instance.get(url)
}