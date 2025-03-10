import { useContext } from 'react'
import { ProductContext } from '../store/ProductsContext'
import { Link } from 'react-router-dom'

const CardPizza = ({ id, img, name, price, desc, ingredients }) => {
  const { addCart, capFirst } = useContext(ProductContext)

  const handleAddCart = () => {
    addCart(id, name, img, price)
  }

  return (
    <div className='card'>
      <img src={img} alt='Imagen de la pizza' />
      <div className='card-body'>
        <h2 className='card-title'>{capFirst(name)}</h2>
        <p className='card-text'>Precio: $<strong>{price}</strong></p>
        <p className='card-text'>{desc}</p>
        <div className='button-container'>
          <button className='card-button' onClick={handleAddCart}>Comprar</button>
          <Link to='/Pizza'><button className='card-button'>Ver más</button></Link>
        </div>
      </div>
      <ul className='overlay'>
        {ingredients.map((ingredient, index) => (
          <li key={`${id}-${index}`}>{capFirst(ingredient)}</li>
        ))}
      </ul>
    </div>
  )
}

export default CardPizza
