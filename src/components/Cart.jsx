import { useState } from 'react'
import { pizzaCart } from '../pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const incCount = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ))
  }

  const decCount = (id) => {
    setCart(cart
      .map(pizza =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter(pizza => pizza.count > 0)
    )
  }

  const capFirst = (str) => {
    if (!str) { return '' }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0)

  return (
    <div className='cart-container'>
      <h2>Tu pedido:</h2>
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
