import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../store/ProductsContext'
import { UserContext } from '../store/UserContext'

const Navbar = () => {
  const { total } = useContext(ProductContext)
  const { user, logout } = useContext(UserContext)

  return (
    <div className='navbar'>
      <h4>Puccini Pizzeria</h4>
      <Link to='/'><button type='button' className='btn btn-outline-light'>🏡 Home</button></Link>
      {user
        ? (
          <>
            <Link to='/Profile'><button type='button' className='btn btn-outline-light'>🔓 Profile</button></Link>
            <button onClick={logout} type='button' className='btn btn-outline-light'>🔓 Logout</button>
          </>
          )
        : (
          <>
            <Link to='/Login'><button type='button' className='btn btn-outline-light'>🔐 Login</button></Link>
            <Link to='/Register'><button type='button' className='btn btn-outline-light'>🔐 Register</button></Link>
          </>
          )}
      <Link to='/Cart'><button type='button' className='btn btn-light'>Total: ${total} </button></Link>
    </div>
  )
}

export default Navbar
