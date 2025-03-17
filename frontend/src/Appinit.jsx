import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import NotFound from './components/NotFound'
import Profile from './pages/Profile'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProductProvider from './store/ProductsContext'
import { UserContext } from './store/UserContext'
import { useContext } from 'react'

const AppInit = () => {
  const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      <ProductProvider>
        <Navbar className='navbar' />
        <Routes>
          <Route path='/' element={<Home className='home' />} />
          <Route path='/Pizza/:id' element={<Pizza />} />
          <Route path='/Register' element={!user ? <Register /> : <Navigate to='/' />} />
          <Route path='/Login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/Profile' element={user ? <Profile /> : <Navigate to='/' />} />
        </Routes>
        <Footer className='footer' />
      </ProductProvider>
    </BrowserRouter>
  )
}

export default AppInit
