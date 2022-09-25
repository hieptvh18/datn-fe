import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001'
    // baseURL: 'http://127.0.0.1:8000/admin'
})
export default instance