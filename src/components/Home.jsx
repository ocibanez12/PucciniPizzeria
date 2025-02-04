import CardPizza from "./CardPizza"
import Header from "./Header"

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <div className="container-grid">
      <CardPizza className="CardPizza" img={"https://imag.bonviveur.com/pizza-margarita.jpg"} nombre={"Margarita"} descripcion={"Tomate, Mozzarella, Albahaca"} precio={" 9.500"}/>
      <CardPizza className="CardPizza" img={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg/1920px-Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg"} nombre={"Quattro Formaggi"} descripcion={"Gorgonzola, Parmesano-Reggiano"} precio={" 10.990"}/>
      <CardPizza className="CardPizza" img={"https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"} nombre={"Pepperoni"} descripcion={"Pepperoni, Champiñon, Extra Queso"} precio={" 10.500"}/>
      <CardPizza className="CardPizza" img={"https://www.paulinacocina.net/wp-content/uploads/2023/12/pizza-hawaiana-casera-1737722797-1200x900.jpg"} nombre={"Hawaiana"} descripcion={"Piña, Jamon-York"} precio={" 11.500"}/>
      <CardPizza className="CardPizza" img={"https://st3.idealista.it/news/archivie/styles/fullwidth_xl/public/2019-05/media/image/ortolana_saleepepe.jpg?VersionId=0eoza07Q.EK5z2KRUEuRSNlXsN3JutI_&itok=36uLp4h3"} nombre={"Vegetariana"} descripcion={"Pimenton, Aceituna, Extra Queso"} precio={" 10.500"}/>
      <CardPizza className="CardPizza" img={"https://st3.idealista.it/news/archivie/styles/fullwidth_xl/public/2019-05/media/image/margherita_wikipedia.jpg?VersionId=kjN.bhHwjPH3vO7GX5SgxSE3aUSLluLp&itok=42YvM1mQ"} nombre={"Napolitana"} descripcion={"Albahaca, Mozzarella De Buffala, Tomate San Marzano"} precio={" 10.500"}/>
      <CardPizza className="CardPizza" img={"https://st3.idealista.it/news/archivie/styles/fullwidth_xl/public/2019-05/media/image/capricciosa_wikimedia_commons.jpg?VersionId=kZd2YLZpRzVO7bXpAESMScFlunfjubL0&itok=5p5yaf12"} nombre={"Capricciosa"} descripcion={"Jamon, Alcachofa, Aceitunas, Champiñon"} precio={"12.500"}/>
      </div>
    </div>
  )
}

export default Home
