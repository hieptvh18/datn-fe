import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'http://nhakhoaducnghia.xyz/api'
})
export default instance