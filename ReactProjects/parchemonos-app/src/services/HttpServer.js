//comunicacion entre el cliente y el servidor
import axios from 'axios'

const headersConfing = () => {
    //Capturar token del localstorage
    const token = localStorage.getItem('TOKEN')
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'aplication/json',
        'Authorization': `Bearer ${token}`
    }
    return defaultHeaders
}

//funcion
export const requestHttp = async (method, url, data={}, params={}) => {
    try {
        
        const options = {
            method, //post, get, put, delete
            url,
            baseURL: process.env.REACT_APP_BASE_URL,
            data, //body
            params, //query params
            timeout: 5000, //error 408 por timeout
            headers: headersConfing()
        }

        const response = await axios (options)
        return response.data

    } catch (error) {
        throw error
    }
}