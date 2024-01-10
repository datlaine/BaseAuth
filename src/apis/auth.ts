import axiosCustom from './axiosCustom'

export type TAuthInfo = {
  email: string
  password: string
}

export type TResponse = {
  code: number
  message: string
  metadata: {
    user: {
      _id: string
      email: string
    }
    access_token: string
    refresh_token: string
  }
}

class Auth {
  static async login({ email, password }: TAuthInfo) {
    return axiosCustom.post('/v1/api/auth/login', { email, password }, { withCredentials: true })
  }

  static async register({ email, password }: TAuthInfo) {
    return axiosCustom.post<TResponse>('/v1/api/auth/register', { email, password }, { withCredentials: true })
  }

  static async logout() {
    return axiosCustom.post('/v1/api/auth/logout', {}, { withCredentials: true })
  }

  static async getMe(_id: string) {
    return axiosCustom.post('/v1/api/auth/getMe', { _id })
  }

  static async refresh_token() {
    const token = await axiosCustom.post<{ metadata: { token: string } }>(
      '/v1/api/auth/rf',
      {},
      { withCredentials: true }
    )
    return token.data.metadata.token
  }
}

export default Auth
