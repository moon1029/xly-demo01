import axios from 'axios'

const instance = axios.create({
    baseURL:"请求的地址",   //baseURL
})

export function get(url,params){
    return axios.get(url,{
        params
    })
}

export function post(url,data){
    return axios.post(url,data)
}
