import instance from "./instance";

export const addAccounts = (account) => {
    const url = '/accounts'
    return instance.post(url, account)
}