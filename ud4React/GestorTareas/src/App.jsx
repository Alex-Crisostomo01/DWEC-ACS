import { useState } from "react";
import "./App.css";
import ListaTareas from "./componentes/ListaTareas";
import FormularioTarea from "./componentes/FormularioTarea";
import Contador from "./componentes/Contador";
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
    <div className="app-gestor">
      <h1 className="titulo-app">Gestor de Tareas</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletada={toggleCompletada}
      />
      {/* <Contador />  */}
    </div>
  );
}

export default App;
