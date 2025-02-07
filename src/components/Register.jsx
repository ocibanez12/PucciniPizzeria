import { useState } from 'react'
import Swal from 'sweetalert2'

const Register = () => {
  const [users, setUsers] = useState({
    mail: '',
    pass: '',
    confirmpass: ''

  })

  const handleChange = (e) => {
    setUsers({
      ...users, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { mail, pass, confirmpass } = users

    if (!mail.trim() || !pass.trim() || !confirmpass.trim()) {
      Swal.fire({
        text: 'No pueden existir campos vacios',
        icon: 'error'
      })
      return
    }

    if (pass !== confirmpass) {
      Swal.fire({
        text: 'Las contraseñas no coinciden',
        icon: 'error'
      })
      return
    }

    if (pass.length < 6 || confirmpass.length < 6) {
      Swal.fire({
        text: 'La contraseña debe tener un minimo de 6 caracteres ',
        icon: 'error'
      })
      return
    }

    Swal.fire({
      text: 'Registro exitoso',
      icon: 'success'
    })
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
            value={users.mail}
            onChange={handleChange}
            name='mail'
            placeholder='Correo electrónico'
          />
          <h5>Contraseña</h5>
          <input
            className='form-control'
            type='password'
            value={users.pass}
            onChange={handleChange}
            name='pass'
            placeholder='Contraseña'
          />
          <h5>Confirmar contraseña</h5>
          <input
            className='form-control'
            type='password'
            value={users.confirmpass}
            onChange={handleChange}
            name='confirmpass'
            placeholder='Confirmar contraseña'
          />
          <button
            className='btn btn-primary'
            type='submit'
            disabled=''
          >Registrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
