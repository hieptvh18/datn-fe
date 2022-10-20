import instance from "./instance";

export const getEquipments = () => {
    const url = `/equipment/list`
    return instance.get(url)
}
