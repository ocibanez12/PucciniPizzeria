import { useContext } from 'react'
import CardPizza from '../components/CardPizza'
import Header from '../components/Header'
import { ProductContext } from '../store/ProductsContext'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const { id } = useParams()
  const { pizza } = useContext(ProductContext)
  const pizzaC = pizza.find(p => p.id === id)
  return (
    <div className='home'>
      <Header />
      <div className='card-container'>
        <CardPizza
          key={pizzaC.id}
          desc={pizzaC.desc}
          img={pizzaC.img}
          ingredients={pizzaC.ingredients}
          name={pizzaC.name}
          price={pizzaC.price}
          className='card'
          ButtonRender
        />
      </div>
    </div>
  )
}

export default Pizza
