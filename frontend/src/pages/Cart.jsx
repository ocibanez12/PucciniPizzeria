import { useContext } from 'react'
import { ProductContext } from '../store/ProductsContext'
import { UserContext } from '../store/UserContext'

const Cart = () => {
  const { cart, incCount, decCount, total, capFirst } = useContext(ProductContext)
  const { user } = useContext(UserContext)
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
        ? <button className='pay-button'>Pagar</button>
        : <button disabled className='pay-button'>Pagar</button>}
    </div>
  )
}

export default Cart
