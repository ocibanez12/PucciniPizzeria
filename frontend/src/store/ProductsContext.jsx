import { createContext, useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [pizza, setPizza] = useState(null)
  const [cart, setCart] = useState([])
  const [Loading, setLoading] = useState(true)

  // API
  const url = 'http://localhost:5000/api/pizzas/'

  const obtenerPizza = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPizza(data)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    obtenerPizza()
  }, [])

  // CARRITO
  const addCart = (id, name, img, price) => {
    /* ELIMINAR LINEA DE CODIGO PIZZA AL CARRITO */
    console.log('Pizza al Carrito', { id, name, img, price })
    setCart(cart => {
      const pizzaFound = cart.find(pizza => pizza.id === id)
      if (pizzaFound) {
        return cart.map(pizza =>
          pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        )
      } else {
        return [...cart, { id, name, img, price, count: 1 }]
      }
    })
  }

  const incCount = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ))
  }

  const decCount = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
    ).filter(pizza => pizza.count > 0)
    )
  }

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0)

  const capFirst = (str) => {
    if (!str) { return '' }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  const globalState = {
    pizza,
    Loading,
    obtenerPizza,
    incCount,
    decCount,
    total,
    cart,
    addCart,
    capFirst
  }

  return (
    <ProductContext.Provider value={globalState}>
      {Loading
        ? (
          <div className='d-flex justify-content-center align-items-center vh-100'>
            <SyncLoader margin={3} size={40} speedMultiplier={0.7} color='#ececec' />
          </div>
          )
        : (
            children
          )}
    </ProductContext.Provider>
  )
}

export default ProductProvider
