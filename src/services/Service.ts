import axios from "axios";

const api = axios.create({
    baseURL: 'https://oscars-backend.onrender.com/'
})

export const Login = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data)
    setData(response.data)
}

export const Search = async (url: string, setData: Function, header: Object) => {
    const response = await api.get(url, header)
    setData(response.data)
}