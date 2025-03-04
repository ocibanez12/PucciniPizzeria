const Profile = (/* { email, onLogout } */) => {
  return (
    <div className='containerProfile'>
      <p>Email: {/* {email} */}</p>
      <button
        /* onClick={onLogout} */
        className='logoutButton'
      >
        Cerrar sesión
      </button>
    </div>
  )
}

export default Profile
