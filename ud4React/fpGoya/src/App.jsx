import { useState } from 'react'
import './App.css'

import FamiliasFP from './componentes/FamiliasFP'
import Alumnos from './componentes/Alumnos'

function App() {
const [nombre , setNombre] = useState("Alejandro")
 const [apellidos , setApellidos] = useState("Crisostomo Sepulveda ")
  return (
    
    <>
    <Alumnos nombre = {nombre} apellidos = {apellidos}/>
    <FamiliasFP apellidos = {apellidos} nombre = {nombre} setNombre = {setNombre}/>   
    </>
  )
}

export default App
