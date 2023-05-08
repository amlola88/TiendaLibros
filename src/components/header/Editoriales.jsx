import ImgEditoriales from "../../imagenes/Editoriales.jpg"
import Header from "../header/Header"

const editoriales=[
  {
    "Nombre":"Ceiba",
    "Referencia":"PLU179"
  },
  {
    "Nombre":"DK",
    "Referencia":"PLo140"
  }
]
const Editoriales = () => {
  return (
    <div>
         <Header/>
         {
          editoriales.map(editorial =>
            <section className="card-Editoriales">
              <img src={ImgEditoriales}/>
              <p>{editorial.Nombre}</p>            
              <p>{editorial.Referencia}</p>

            </section>

          )
         }
    </div>
  )
}

export default Editoriales
