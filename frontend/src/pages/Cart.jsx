import { useContext } from 'react'
import { ProductContext } from '../store/ProductsContext'

const Cart = () => {
  const { cart, incCount, decCount, total, capFirst } = useContext(ProductContext)

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
      <button className='pay-button'>Pagar</button>
    </div>
  )
}

export default Cart
