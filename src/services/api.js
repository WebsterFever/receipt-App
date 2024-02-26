import axios from "axios"

export const api = axios.create({
    baseURL: "https://recipe-fake-api.onrender.com/",
    timeout:80000,
})

//"https://recipe-fake-api.onrender.com/"
//recipes