import CardPizza from './CardPizza'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  const url = 'http://localhost:5000/api/pizzas/p001'

  const obtenerPizza = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPizza(data)
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    obtenerPizza()
  }, [])

  if (!pizza) {
    return (
      <SyncLoader
        margin={3}
        size={40}
        speedMultiplier={0.7}
        color='#ececec'
        className='d-flex justify-content-center p-5'
      />
    )
  }

  return (
    <div className='home'>
      <Header />
      <div className='card-container'>
        <CardPizza
          key={pizza.id}
          desc={pizza.desc}
          img={pizza.img}
          ingredients={pizza.ingredients}
          name={pizza.name}
          price={pizza.price}
          className='card'
        />
      </div>
    </div>
  )
}

export default Pizza
