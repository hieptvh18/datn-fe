import axios from "axios";

const instanceJson = axios.create({
    baseURL: 'http://localhost:3001'
    // baseURL: 'http://127.0.0.1:8000/api'
})
export default instanceJson