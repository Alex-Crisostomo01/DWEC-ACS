import { useState } from "react";
import "./estilos/FormularioTareas.css";
import Swal from 'sweetalert2'

function FormularioTarea({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const enviarTarea = (evento) => {
    evento.preventDefault();
    if (!texto.trim()) return; // evita agregar vacíos
    agregarTarea(texto);
    Swal.fire({
  title: "Tarea creada!",
  icon: "success",
  draggable: true
});
    setTexto("");
  };

  return (
    <>
      <p className="titulo-formulario">FormularioTarea</p>

      <form onSubmit={enviarTarea} className="formulario-tarea">
        <input
          type="text"
          className="input-tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una nueva tarea..."
        />
        <button
          type="submit"
          className="boton-agregar"
          disabled={!texto.trim()}
        >
          Agregar
        </button>
      </form>

      <p className="debug-texto">Valor de la variable Texto: {texto}</p>
    </>
  );
}

export default FormularioTarea;