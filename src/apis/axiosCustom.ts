import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

class AxiosCustom {
  axiosInstance: AxiosInstance
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 10000
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        if (config.headers) {
          config.headers['Authorization'] = 'Bear AT'
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    axios.interceptors.response.use(
      (respone) => respone,
      (error) => {
        const originalConfig = { ...error.config }
        console.log(originalConfig)
        return Promise.reject(error)
      }
    )
  }
}

const axiosCustom = new AxiosCustom().axiosInstance

export default axiosCustom
