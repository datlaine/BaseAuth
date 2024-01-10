import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const LoginWithGoogle = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const access_token = searchParams.get('access_token')
    const refresh_token = searchParams.get('refresh_token')
    localStorage.setItem('access_token', access_token as string)
    localStorage.setItem('refresh_token', refresh_token as string)
    navigate('/')
  }, [searchParams, navigate])

  return <div>Login</div>
}

export default LoginWithGoogle
