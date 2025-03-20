import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { UserContext } from '../store/UserContext'

const Login = () => {
  const { authLogin } = useContext(UserContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = formData

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

    const success = await authLogin(email, password)

    if (success) {
      Swal.fire({
        text: 'Inicio de sesión exitoso',
        icon: 'success'
      })
    } else {
      Swal.fire({
        text: 'Error al iniciar sesión',
        icon: 'error'
      })
    }
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
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Correo electrónico'
            />
            <h5>Contraseña</h5>
            <input
              className='form-control'
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
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
