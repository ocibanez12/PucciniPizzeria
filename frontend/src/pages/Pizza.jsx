import { useContext } from 'react'
import CardPizza from '../components/CardPizza'
import Header from '../components/Header'
import { ProductContext } from '../store/ProductsContext'

const Pizza = () => {
  const { pizza } = useContext(ProductContext)
  return (
    <div className='home'>
      <Header />
      <div className='card-container'>
        <CardPizza
          key={pizza[0].id}
          desc={pizza[0].desc}
          img={pizza[0].img}
          ingredients={pizza[0].ingredients}
          name={pizza[0].name}
          price={pizza[0].price}
          className='card'
        />
      </div>
    </div>
  )
}

export default Pizza
