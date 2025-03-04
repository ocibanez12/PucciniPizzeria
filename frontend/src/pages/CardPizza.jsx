import { Link } from 'react-router-dom'

const CardPizza = ({ desc, id, img, ingredients, name, price }) => {
  const capFirst = (str) => {
    if (!str) { return '' }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
  return (
    <div className='card'>
      <img src={img} alt='Imagen de la pizza' />
      <div className='card-body'>
        <h2 className='card-title'>{capFirst(name)}</h2>
        <p className='card-text'>Precio: $<strong>{price}</strong></p>
        <p className='card-text'>{desc}</p>
        <Link to='/Pizza'><button className='card-button'>Comprar</button></Link>
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
