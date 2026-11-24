import './estilos/paginas.css'


function SobreMi(){
    return(

        <>
            <h1> HOLA SOY ALEX </h1>
                    
            <main className="pagina">
            <section className="tarjeta">
                <img
                className="avatar"
                src="https://via.placeholder.com/150"
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

                <h2>Aficiones</h2>
                <p>Videojuegos, programar proyectos personales y crear contenido.</p>
            </section>
            </main>
        </>
        
    )
}export default SobreMi;