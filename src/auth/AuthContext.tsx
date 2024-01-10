import { createContext, useState } from 'react'

export interface User {
  _id: string
}

interface AuthContext {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {}
})

import React from 'react'

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>({ _id: JSON.parse(localStorage.getItem('_id') as string) })

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
