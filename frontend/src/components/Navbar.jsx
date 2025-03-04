import { Link } from 'react-router-dom'

const Navbar = () => {
  const total = 0
  const token = false
  const totalcant = (monto) => {
    return monto.toLocaleString()
  }

  return (
    <div className='navbar'>
      <h4>Puccini Pizzeria</h4>
      <Link to='/'><button type='button' className='btn btn-outline-light'>🏡 Home</button></Link>
      {token
        ? (
          <>
            <Link to='/Profile'><button type='button' className='btn btn-outline-light'>🔓 Profile</button></Link>
            <button type='button' className='btn btn-outline-light'>🔓 Logout</button>
          </>
          )
        : (
          <>
            <Link to='/Login'><button type='button' className='btn btn-outline-light'>🔐 Login</button></Link>
            <Link to='/Register'><button type='button' className='btn btn-outline-light'>🔐 Register</button></Link>
          </>
          )}
      <Link to='/Cart'><button type='button' className='btn btn-outline-light'>Total: ${totalcant(total)} </button></Link>
    </div>
  )
}

export default Navbar
