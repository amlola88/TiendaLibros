import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './components/header/Header'
import Usuario from './components/header/Usuario'
import Libros from './components/header/Libros'
import Editoriales from './components/header/Editoriales'

const router = createBrowserRouter([
  {path:"/",
  element: <Header/>
  },

  {path:"/Usuario",
   element: <Usuario/>
  },

  {path:"/Libros",
  element: <Libros/>
  },

 {path:"/Editoriales",
 element: <Editoriales/>
},


])

function App() {

  return (
    <section>
     
      <RouterProvider router={router}/>
    </section>
  )
}

export default App


