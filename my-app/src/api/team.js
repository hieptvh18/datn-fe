import instance from "./instance";

export const getTeam = () => {
    const url = `teams`
    return instance.get(url)
}

export const getDoctor = () => {
    const url = `teams?role=1`
    return instance.get(url)
}
export const getTeamById = (id) => {
    const url = `teams/${id}`
    return instance.get(url)
}