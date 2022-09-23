import instance from "./instance";

export const addAccounts = (account) => {
    const url = '/schedules/add'
    return instance.post(url, account)
}