import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { UserContext } from '../store/UserContext'

const Login = () => {
  const { authLogin } = useContext(UserContext)
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = async (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = credentials

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        text: 'No pueden existir campos vacíos',
        icon: 'error'
      })
      return
    }

    if (password.length < 6) {
      Swal.fire({
        text: 'La contraseña debe tener un mínimo de 6 caracteres',
        icon: 'error'
      })
      return
    }

    Swal.fire({
      text: 'Inicio de sesión exitoso',
      icon: 'success'
    })
    await authLogin(credentials.email, credentials.password)
  }

  return (
    <div className='containerLogin'>
      <div className='regpage'>
        <h1>Iniciar sesión</h1>
        <br />
        <div className='datacontainer'>
          <form onSubmit={handleSubmit}>
            <h5>Correo electrónico</h5>
            <input
              className='form-control'
              type='text'
              value={credentials.email}
              onChange={handleChange}
              name='email'
              placeholder='Correo electrónico'
            />
            <h5>Contraseña</h5>
            <input
              className='form-control'
              type='password'
              value={credentials.password}
              onChange={handleChange}
              name='password'
              placeholder='Contraseña'
            />
            <button className='btn btn-primary' type='submit'>
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
