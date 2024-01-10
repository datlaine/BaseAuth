import React from 'react'
import router from './router'
import { RouterProvider } from 'react-router-dom'

const Wrapper = () => {
  return <RouterProvider router={router} />
}

export default Wrapper
