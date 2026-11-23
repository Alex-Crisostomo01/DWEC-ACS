import "./estilos/ListaTareas.css";

function ListaTareas({ tareas , eliminarTarea , toggleCompletada}) {
  return (
    <>
      <p className="titulo-lista">Listar Tareas</p>
      <ul className="lista-tareas">
        {tareas.map((tarea, index) => (
          <li key={index} className="tarea-item">
             <input
                   type="checkbox"
                   checked={tarea.completada}
                   onChange={() => toggleCompletada(tarea.id)}
            />
            <span className="tarea-texto">{tarea.texto}</span>
            <span id={tarea.id} onClick={()=>(eliminarTarea(tarea.id))}>x</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaTareas;