import { useEffect, useState } from 'react';
import ServicioInformacion from '../servicios/ServicioInformacion';
import './estilos/paginas.css'


function SobreMi(){
    
    const  [aficiones , setAficiones] = useState([])
    const [tecnologias , setTecnologias] = useState([])


    useEffect(()=>{
         ServicioInformacion.getAllAficiones()
        .then((response)=>{
            setAficiones(response.data)
        })
        .catch(()=>{
            console.log("Error HTTP")
        })
          ServicioInformacion.getAllTecnologias()
        .then((response)=>{
            setTecnologias(response.data)
        })
        .catch(()=>{
            console.log("Error HTTP")
        })
    },[])

   
    
    return(

        <>
            <h1> HOLA SOY ALEX </h1>
                    
            <main className="pagina">
            <section className="tarjeta">
                <img
                className="avatar"
                src="/public/img/foto.png"
                alt="Foto de perfil"
                />
                <h1>Sobre mí</h1>
                <p className="subtitulo">Desarrollador web y gamer</p>

                <p>
                Hola, soy estudiante de Desarrollo de Aplicaciones Web. Me gusta crear
                aplicaciones con React, Java y Spring Boot, y en mi tiempo libre me
                encanta jugar y aprender cosas nuevas.
                </p>

                <h2>Tecnologías</h2>
                <ul className="etiquetas">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Git</li>
                </ul>

              <section className="aficiones-section">
                <h2 className="aficiones-titulo">Aficiones</h2>
                <ul className="aficiones-lista">
                    {aficiones.map((aficion) => (
                    <li key={aficion.id} className="aficion-card">
                        <div className="aficion-img-wrapper">
                        <img src={aficion.imagen} alt={aficion.nombre} />
                        </div>
                        <span className="aficion-nombre">{aficion.nombre}</span>
                    </li>
                    ))}
                </ul>
            </section>
            </section>
            
            <div>

            </div>
            </main>
        </>
        
    )
}export default SobreMi;