import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(true)

  const logout = () => {
    setUser(false)
  }

  const globalUser = {
    user,
    logout
  }

  return (
    <UserContext.Provider value={globalUser}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
