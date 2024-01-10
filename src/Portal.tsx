import React from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ childern }: { childern: React.ReactNode }) => {
  const body = document.getElementsByTagName('body')[0]
  console.log(body)
  return createPortal(childern, body)
}

export default Portal
