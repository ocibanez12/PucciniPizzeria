import { createContext, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({ user: '', password: '' })
  const [error, setError] = useState('')

  const authLogin = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/login'
      const payload = { email, password }
      /* user=test@test.com pw= 123123 */
      const user = await axios.post(URL, payload)
      console.log('user', user)
      localStorage.setItem('token', user.data.token)
      console.log('user', user.data)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    setCredentials(false)
  }

  const globalUser = {
    authLogin,
    logout
  }

  return (
    <UserContext.Provider value={globalUser}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
