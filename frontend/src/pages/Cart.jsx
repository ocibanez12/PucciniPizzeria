import { useContext } from 'react'
import { ProductContext } from '../store/ProductsContext'
import { UserContext } from '../store/UserContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, incCount, decCount, total, capFirst, checkOut } = useContext(ProductContext)
  const { user } = useContext(UserContext)
  const pagar = () => checkOut(cart)
  return (
    <div className='cart-container'>
      {cart.map((pizza) => (
        <div key={pizza.id} className='cart-item'>
          <img src={pizza.img} alt={pizza.name} className='pizza-img' />
          <p>{capFirst(pizza.name)}</p>
          <p>${pizza.price.toLocaleString()}</p>
          <button className='btndown' onClick={() => decCount(pizza.id)}> - </button>
          <span>{pizza.count}</span>
          <button className='btnup' onClick={() => incCount(pizza.id)}> + </button>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString()}</h3>
      {user
        ? (cart.length > 0
            ? <button onClick={pagar} className='btn btn-primary'>Pagar</button>
            : <button disabled className='btn btn-primary'>Carrito Vacio</button>
          )
        : <Link to='/login'><button className='btn btn-primary'>Iniciar sesion </button></Link>}
    </div>
  )
}
export default Cart
