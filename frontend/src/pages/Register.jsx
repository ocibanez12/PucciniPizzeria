import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { UserContext } from '../store/UserContext'

const Register = () => {
  const { register } = useContext(UserContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpass: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password, confirmpass } = formData

    if (!email.trim() || !password.trim() || !confirmpass.trim()) {
      Swal.fire({
        text: 'No pueden existir campos vacíos',
        icon: 'error'
      })
      return
    }

    if (password !== confirmpass) {
      Swal.fire({
        text: 'Las contraseñas no coinciden',
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

    const success = await register(email, password)

    if (success) {
      Swal.fire({
        text: 'Registro exitoso',
        icon: 'success'
      })
    } else {
      Swal.fire({
        text: 'Error en el registro',
        icon: 'error'
      })
    }
  }

  return (
    <div className='regpage'>
      <h1>Registro</h1>
      <br />
      <div className='datacontainer'>
        <form onSubmit={handleSubmit}>
          <h5>Correo electrónico</h5>
          <input
            className='form-control'
            type='text'
            value={formData.email}
            onChange={handleChange}
            name='email'
            placeholder='Correo electrónico'
          />
          <h5>Contraseña</h5>
          <input
            className='form-control'
            type='password'
            value={formData.password}
            onChange={handleChange}
            name='password'
            placeholder='Contraseña'
          />
          <h5>Confirmar contraseña</h5>
          <input
            className='form-control'
            type='password'
            value={formData.confirmpass}
            onChange={handleChange}
            name='confirmpass'
            placeholder='Confirmar contraseña'
          />
          <button className='btn btn-primary' type='submit'>
            Registrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
