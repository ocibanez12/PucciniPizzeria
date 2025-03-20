import { useContext } from 'react'
import { UserContext } from '../store/UserContext'
const Profile = () => {
  const { logout, user } = useContext(UserContext)
  return (
    <div className='containerProfile'>
      <p>Email: {user.email}</p>
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
