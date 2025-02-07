// import { useState } from "react"

const CardPizza = ({ img, nombre, descripcion, precio }) => {
  // const [state, setState] = useState(0)
  return (
    <div className='name-pizza'>
      <div className='CardPizza-img'>
        <div className='CardPizza'>
          <img src={img} alt={nombre} />
          <div className='overlay'>
            <p>{descripcion} </p>
            <p>$ {precio}</p>
          </div>
        </div>
      </div>
      <h2>{nombre}</h2>

    </div>
  )
}

export default CardPizza

// BOTON PARA STATE
// <button onClick={() => setState((state) => state + 2)}> count is {state} </button>
