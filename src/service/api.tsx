import axios from "axios";

export const apiMongoDB = axios.create({
    baseURL: 'https://api-aluraflix.onrender.com',
    headers: {
        'Content-Type': 'application/json'
    }
})