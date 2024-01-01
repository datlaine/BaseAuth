import React, { useState } from 'react'
import Login from './auth/Login'
import Home from './Home'

const App = () => {
  const [user, setUser] = useState<boolean>(false)

  if (!user) {
    return <Login setUser={setUser} />
  }
  return (
    <div className='bg-red-500 h-[60px]'>
      <Home />
    </div>
  )
}

export default App
