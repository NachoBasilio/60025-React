import "./App.css"
import { ItemsListContainer } from "./components/ItemsListContainer/ItemsListContainer"
import { NavBar } from "./components/NavBar/NavBar"
// import { Contador } from "./components/Contador/Contador"
// import { Titulo } from "./Titulo/Titulo"

function App() {
  // const [mensaje, setMensaje] = useState("Hola")
 

  return (
    <>
      {/* <Titulo/> */}
      {/* <Contador/> */}

      <NavBar/>
      <ItemsListContainer/>
    </>
  )
}

export default App
