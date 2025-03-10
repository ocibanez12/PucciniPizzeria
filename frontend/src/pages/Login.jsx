import { useState } from 'react'
import Swal from 'sweetalert2'

const Login = () => {
  const [credentials, setCredentials] = useState({
    mail: '',
    pass: ''
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { mail, pass } = credentials

    if (!mail.trim() || !pass.trim()) {
      Swal.fire({
        text: 'No pueden existir campos vacíos',
        icon: 'error'
      })
      return
    }

    if (pass.length < 6) {
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
              value={credentials.mail}
              onChange={handleChange}
              name='mail'
              placeholder='Correo electrónico'
            />
            <h5>Contraseña</h5>
            <input
              className='form-control'
              type='password'
              value={credentials.pass}
              onChange={handleChange}
              name='pass'
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
