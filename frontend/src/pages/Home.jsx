import { useContext } from 'react'
import CardPizza from '../components/CardPizza'
import Header from '../components/Header'
import { ProductContext } from '../store/ProductsContext'

const Home = () => {
  const { pizza } = useContext(ProductContext)
  return (
    <div className='home'>
      <Header />
      <div className='card-container'>
        {pizza.map((pizza) => (
          <CardPizza
            desc={pizza.desc}
            key={pizza.id}
            id={pizza.id}
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
