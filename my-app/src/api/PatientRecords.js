import instance from "./instance";

export const getPatientRecord = (token,id) => {
    const url = `/patient/detail-by-id/${token}/${id}`
    return instance.get(url)
}