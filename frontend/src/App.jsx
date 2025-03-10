import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import NotFound from './components/NotFound'
import Profile from './pages/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductProvider from './store/ProductsContext'
// EL LINK A 'PIZZA' FUE DADO AL BOTON COMPRAR EN /CARDPIZZA YA QUE NO ENTENDI DONDE DEBIA IR
const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Navbar className='navbar' />
        <Routes>
          <Route path='/' element={<Home className='home' />} />
          <Route path='/Pizza' element={<Pizza />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
        <Footer className='footer' />
      </ProductProvider>
    </BrowserRouter>
  )
}
export default App
