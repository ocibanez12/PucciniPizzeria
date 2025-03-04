import CardPizza from './CardPizza'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

const Home = () => {
  const [pizza, setPizzas] = useState([])
  const url = ('http://localhost:5000/api/pizzas')
  const obtenerPizza = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPizzas(data)
      console.log(data)
    } catch (error) {
      console.error('Error', error)
    }
  }

  useEffect(() => {
    obtenerPizza()
  }, [])

  return (
    <div className='home'>
      <Header />
      <div className='card-container'>
        {pizza.map((pizza) => (
          <CardPizza
            desc={pizza.desc}
            key={pizza.id}
            img={pizza.img}
            ingredients={pizza.ingredients}
            name={pizza.name}
            price={pizza.price}
            className='card'
          />
        ))}
      </div>
    </div>
  )
}

export default Home
