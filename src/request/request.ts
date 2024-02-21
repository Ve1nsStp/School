import axios from "axios"

const service = axios.create({
  baseURL: "http://hmajax.itheima.net/api/books",
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { data } = response.data
    return data
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
