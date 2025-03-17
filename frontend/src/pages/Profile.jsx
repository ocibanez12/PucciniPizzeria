import { useContext } from 'react'
import { UserContext } from '../store/UserContext'
const Profile = () => {
  const { logout } = useContext(UserContext)
  return (
    <div className='containerProfile'>
      <p>Email: {/* {AGREGAR USEREMAIL Y CREAR DATOS DE USUARIO */}</p>
      <button
        onClick={logout}
        className='logoutButton'
      >
        Cerrar sesión
      </button>
    </div>
  )
}

export default Profile
