import axios, { AxiosInstance } from 'axios'
import Auth from './auth'

class AxiosCustom {
  axiosInstance: AxiosInstance
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Acess-Control-Allow-Origin': '*'
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.axiosInstance.interceptors.request.use(
      (config) => {
        //   console.log('123')
        // eslint-disable-next-line prettier/prettier
        //   console.log(JSON.parse(localStorage.getItem('_id') as string) |1| null)
        ;(config.headers['Authorization'] = JSON.parse(localStorage.getItem('token') as string) || null),
          (config.headers['x-client-id'] = JSON.parse(localStorage.getItem('_id') as string) || null)

        return config
      },
      (error) => Promise.reject(error)
    )

    this.axiosInstance.interceptors.response.use(
      (respone) => respone,
      async (error) => {
        if (error.response?.status !== 401) {
          return Promise.reject(error)
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const originalConfig = error.config
        // eslint-disable-next-line prettier/prettier
        if (error.response.status === 401 && !error.config._retry) {
          error.config._retry = true
          const access_token = await Auth.refresh_token()
          console.log('check api', access_token)
          if (access_token) {
            error.config.headers['Authorization'] = access_token
            localStorage.setItem('token', JSON.stringify(access_token))
            return this.axiosInstance.request(error.config)
          } else {
            return Promise.reject(access_token)
          }
        }
        //     originalConfig.headers!['Authorization'] = `${JSON.parse(localStorage.getItem('token') as string) || null}`
      }
    )
  }
}

const axiosCustom = new AxiosCustom().axiosInstance

export default axiosCustom
