import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import LoginWithGoogle from './auth/LoginWithGoogle'
import UiTest from './UiTest'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login/oauth',
    element: <LoginWithGoogle />
  },
  {
    path: '/ui',
    element: <UiTest />
  }
])

export default router
