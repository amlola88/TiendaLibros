import ImgLibros from "../../imagenes/niños.jpg"
import Header from "./Header"

const tipoLibros = [
  {
    "Nombre":"El libro de la ingenieria",
    "ID":"123456",
    "Precio":120.000
  },
  {
    "Nombre":"Lógica de la programación",
    "ID":"123456780",
    "Precio":150.000

  }
]


const Libros = () => {
  return (
    <div>
        <Header/>
        {
          tipoLibros.map(tipoLibro =>
            <section className="card-Libros"> 
              <img src={ImgLibros}/>
              <p>{tipoLibro.Nombre}</p>
              <p>{tipoLibro.ID}</p>
              <p>{tipoLibro.Precio}</p>
            </section>
          )
        }
    </div>
  )
}

export default Libros
