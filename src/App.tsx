import React, { useState } from 'react'
import Home from './Home'
import { useMutation } from '@tanstack/react-query'
import AuthApis from './apis/auth'
// import Login from './auth/Login'
// import Auth from './auth/Auth'
// import { AuthContext } from './auth/AuthContext'
import Auth from './apis/auth'
import Register from './auth/Register'
import Login from './auth/Login'
import getOauthWithGoogle from './auth/utils/oauthGoogle'
import { Link } from 'react-router-dom'
// import Login from './auth/Login'
// import Auth from './auth/Auth'

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { user } = useContext(AuthContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mode, setMode] = useState('login')
  const getOauthUrl = getOauthWithGoogle()
  const meResponse = useMutation({
    mutationKey: ['me'],
    mutationFn: () => AuthApis.getMe(JSON.parse(localStorage.getItem('_id') as string)),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      console.log('me', data)
      // setUser(data.data)
    },
    onError: (error: unknown) => console.log('Error rf', error)
  })

  const refreshTokenResponse = useMutation({
    mutationKey: ['refresh_token'],
    mutationFn: () => Auth.refresh_token(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => localStorage.setItem('token', JSON.stringify(data.token))
  })

  const logoutResponse = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => Auth.logout()
  })

  const handleRefreshToken = () => {
    refreshTokenResponse.mutate()
  }

  const handleLogout = () => {
    localStorage.removeItem('_id')
    localStorage.removeItem('token')
    logoutResponse.mutate()
  }

  // useEffect(() => {
  //   meResponse.mutate()
  //   //     console.log(user)
  // }, [])

  //   if (!user?._id) {
  //     return <Auth />
  //   }

  //   console.log(meResponse.isPending)
  return (
    <>
      <div className='bg-green-500 h-[80px] flex justify-between items-center px-[25px]'>
        <div className='btn' onClick={() => setMode('login')}>
          Đăng nhập
        </div>
        <div className='btn' onClick={() => setMode('register')}>
          Đăng kí
        </div>
        <div className='btn' onClick={() => handleLogout()}>
          Đăng xuất
        </div>
        <Link to={getOauthUrl} className='btn'>
          Đăng nhập = Google
        </Link>
      </div>

      <div className='bg-red-500 h-[60px] flex gap-5 items-center'>
        <Home />
        <div onClick={() => meResponse.mutate()}>get Me {meResponse.isPending}</div>
        {!meResponse.isPending && <p>[ {meResponse.data?.data._id} ]</p>}
        <div className='btn' onClick={handleRefreshToken}>
          Refresh-token -{'>'}
        </div>
        {/* <Auth /> */}
      </div>
      <div className=' h-[635px] flex px-[25px] pt-[50px] justify-between'>
        <div className='w-[30%]'>
          <Login />
        </div>
        <div className='w-[30%]'>
          <Register />
        </div>
      </div>
    </>
  )
}

export default App
