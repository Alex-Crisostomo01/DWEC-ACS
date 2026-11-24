
import ListaTareas from "../componentes/ListaTareas";
import FormularioTarea from "../componentes/FormularioTarea";
function Inicio({tareas , agregarTarea , eliminarTarea , toggleCompletada}){

  return (

     <div className="app-gestor">
      <h1 className="titulo-app">Gestor de Tareas</h1>
      <FormularioTarea  agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletada={toggleCompletada}
      />
      {/* <Contador />  */}
    </div>
  )
}

export default Inicio;