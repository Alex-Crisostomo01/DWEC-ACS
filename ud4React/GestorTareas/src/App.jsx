import { useState } from "react";
import "./App.css";

import Contacto from "./componentes/Contacto";
import Menu from "./componentes/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import SobreMi from "./componentes/SobreMi";
import Tarea from "./componentes/Tarea";
// import ListaTareas from './componente/ListaTareas';

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Ir al gimnasio", completada: true },
    { id: 2, texto: "Hacer ejercicio de DWEC", completada: true },
    { id: 3, texto: "Ir al cine", completada: false },
  ]);

  /*agregarTarea(texto) */

  const agregarTarea = (texto) => {
    if (!texto.trim()) return; // evita tareas vacías

    const nuevaTarea = {
      id: crypto.randomUUID(), // o Date.now() si prefieres
      texto: texto.trim(),
      completada: false, // las nuevas tareas empiezan sin completar
    };

    setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
  };
  /*EliminarTarea(id) */
  const eliminarTarea = (id)=>{
    
    setTareas((prevTareas)=> prevTareas.filter((tarea)=> tarea.id !== id));
  }
  /*togglecompletada() */
  const toggleCompletada = (id) =>{
    setTareas((prevTareas) => prevTareas.map((tarea) =>{
      console.log(tarea)
      if(tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    }
    ))
  }
 return (


  <>
     
      <BrowserRouter>
      <Menu/>
        <Routes>

            <Route path="/" element={<Inicio  tareas={tareas} agregarTarea={agregarTarea} eliminarTarea={eliminarTarea} toggleCompletada={toggleCompletada}/> }/>
            <Route path="/sobre-mi" element={<SobreMi/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/tarea/:id" element={<Tarea tareas ={tareas}/>}/>

        </Routes>
      
      
      </BrowserRouter>
  </>
  );
}

export default App;
