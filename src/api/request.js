import axios from "axios"
import nprogress from "nprogress"
import "nprogress/nprogress.css"

const request = axios.create({
    baseURL: "/api",
    timeout:5000,
})

request.interceptors.request.use((config) => {
    nprogress.start()
    if(config.params.key) {
        sessionStorage.setItem('key', config.params.key)
    }
    if (sessionStorage.getItem('key')){
        config.params.key = sessionStorage.getItem('key')
    }
    return config
})

request.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    error
    return Promise.reject(new Error('fail'))
})

export default request