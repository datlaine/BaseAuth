import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Auth = () => {
  const [mode, setMode] = useState('login')

  return (
    <div>
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.7)] opacity-80 flex justify-center items-center'>
        <div className={`bg-white w-[450px] ${mode === 'login' ? 'h-[450px]' : 'h-[600px]'} p-[20px] rounded-lg flex `}>
          {mode === 'login' ? <Login setMode={setMode} /> : <Register setMode={setMode} />}
        </div>
      </div>
    </div>
  )
}

export default Auth
