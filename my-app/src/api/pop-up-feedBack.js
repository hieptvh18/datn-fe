import instance from "./instance";

export const addFeedBack = (data =>{
    const url = '/allFeedBack'
    return instance.post(url, data)
})