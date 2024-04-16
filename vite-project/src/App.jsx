import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Itemlistcontainer from './components/itemlistcontainer/itemlistcontainer'
import PaginaPrincipal from "./components/Main/MainPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Itemlistcontainer subtitulos ={"Bienvenidos a la tienda de COMPRA de TODO"}/>
    <PaginaPrincipal subtitulos ={"OFERTAS DESTACADAS"}/>
    </>
    )
}

export default App
