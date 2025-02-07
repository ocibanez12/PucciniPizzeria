import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <>
      <Navbar className='navbar' />
      {/* <Home className='home' /> */}
      {/* <Register /> */}
      <Login />
      <Footer className='footer' />
    </>
  )
}

export default App
