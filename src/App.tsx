import React, { useState } from 'react'
import Home from './Home'
import Auth from './auth/Auth'

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  if (!user) {
    return <Auth />
  }
  return (
    <div className='bg-red-500 h-[60px]'>
      <Home />
    </div>
  )
}

export default App
