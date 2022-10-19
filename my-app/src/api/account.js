import instance from "./instance";

export const addAccounts = (account) => {
    const url = '/schedule/add'
    return instance.post(url, account)
}