import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ user: '', password: '' })
  const [error, setError] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const authLogin = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/login'
      const payload = { email, password }
      const response = await axios.post(URL, payload)
      const { token, user } = response.data
      localStorage.setItem('token', token)
      setToken(token)
      setUser(user)

      return true
    } catch (error) {
      setError('Error al iniciar sesion.')
      console.error('Error de autenticación:', error)
      return false
    }
  }

  const register = async (email, password) => {
    try {
      const URL = 'http://localhost:5000/api/auth/register'
      const payload = { email, password }
      const response = await axios.post(URL, payload)
      const { token, user } = response.data
      setToken(token)
      setUser(user)
      localStorage.setItem('token', token)
      return true
    } catch (error) {
      setError('Error en el registro de usuario')
      console.log('Error Registro', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    console.log('user:', user, 'token:', token)
  }

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => setUser(response.data))
        .catch(() => {
          console.log('Error al obtener perfil', error)
          logout()
        })
    } else {
      logout()
    }
  }, [token])

  const globalUser = {
    authLogin,
    logout,
    register,
    token,
    user
  }

  return (
    <UserContext.Provider value={globalUser}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
