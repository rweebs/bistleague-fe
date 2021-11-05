import axios from 'axios'
import errorHandler from './errorHandler'

const instance = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://backend-bist-league.azurewebsites.net",
    headers: {
        post: {
            'Access-Control-Allow-Origin': '*'
        }
    }
})

//  instance.interceptors.response.use((response)=>response.data,errorHandler)
export default instance