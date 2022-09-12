//config.js
import { encryp } from '../utils/encryp'
const axios = require('axios')

const instance = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  timeout: 5000,
})

//这里写拦截器
instance.interceptors.request.use(
  (config) => {
    const keywords = encryp(`hush${new Date().getTime()}`)

    config.headers['keywords'] = keywords

    return config
  },
  (err) => {
    console.error(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    if (res.data.code !== 0) {
      return Promise.reject(res.data)
    }

    return res.data
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return Promise.reject(err)
  }
)

export default instance
