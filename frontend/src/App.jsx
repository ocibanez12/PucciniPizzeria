import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <>
      <Navbar className='navbar' />
      <Pizza />
      {/* <Home className='home' /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Footer className='footer' />
    </>
  )
}

export default App
