import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import AuthContextProvider from './auth/AuthContext.tsx'
import Wrapper from './Wrapper.tsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Wrapper />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
