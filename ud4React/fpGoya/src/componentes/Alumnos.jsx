
import './estilos/alumnos.css';

const alumnos = [
       { nombre: "Julian" , equipo: 1},
       {nombre:"Alejandro" , equipo : 2},
       {nombre: "Carlos" , equipo: 12}
    ]

const Alumnos = ({nombre , apellidos}) =>{

    


    return(
        <div className="alumnos-container">
            <h1 className="alumnos-title">Nombres y equipos de los alumnos</h1>
            <ul className="alumnos-list">
                {
                    alumnos.map((alumno, index) => (
                        <li key={index} className="alumno-item">
                            <span>{alumno.nombre}</span>
                            <span>Equipo: {alumno.equipo}</span>
                        </li>
                    ))
                }
                <li className="profesor-item">Profesor: {nombre} {apellidos}</li>
            </ul>
        </div>
    )
}

export default Alumnos;