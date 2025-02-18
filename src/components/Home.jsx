import CardPizza from './CardPizza'
import Header from './Header'
import { pizzas } from '../pizzas'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='card-container'>
        {pizzas.map((pizza) => (
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
