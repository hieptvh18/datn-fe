import instance from "./instance";

export const getEquipments = () => {
    const url = `equipments`
    return instance.get(url)
}
