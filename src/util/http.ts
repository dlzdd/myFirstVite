import axios, { AxiosRequestConfig } from 'axios'

const URL: string = import.meta.env.VITE_APP_BASE_URL
axios.defaults.baseURL = URL;
axios.defaults.timeout = 10000

//请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig<any>) => {
    const token = localStorage.getItem('token')
    if (token) {
        // config.headers.['token'] = token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

//响应拦截器
axios.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.statusText === 'OK') {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data.msg)
    }
}, (error) => {
    return Promise.reject('请求出错' + error)
})

/*
封装get方法
@params url 请求参数
@return {Promise} 
*/
export const get = (url: string, params: object) => {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

/* 
封装post方法
@params url 请求参数
@return {Promise} 
*/
export const post = (url: string, data: object) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}