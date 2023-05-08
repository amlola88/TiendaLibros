import ImgUsuario from "../../imagenes/usuarios.jpg"
import Header from "./Header"



const usuarios = [
  {
    "Nombre":"Angela",
    "Apellido": "lopez",
    "Email": "victoriaguion@gmail.com"
  },
  {
    "Nombre":"juan",
    "Apellido": "arroyave",
    "Email": "mjuanarro@gmail.com"
  }
]

const Usuario = () => {
  return (
    <section>
        <Header/>  
        {
          usuarios.map(usuario =>
          <section className="card-Usuario">
            <img src={ImgUsuario}/>
            <p>{usuario.Nombre}</p>
            <p>{usuario.Apellido}</p>
            <p>{usuario.Email}</p>
          </section>  
            )
        }
    </section>
  )
}
console.log(usuarios)
export default Usuario


