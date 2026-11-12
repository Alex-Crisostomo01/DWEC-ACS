
import '../estilos/principal.css'

function Principal(){

    const jugadores = [
        {nombre: "Alejandro" , id:17},
        {nombre: "Juli" , id:12},
        {nombre: "Fernando" , id:14}
    ]
return(
    <>
    <div className="principal-container">
            <div className="principal-card">
                <h1 className="principal-title">¡Bienvenido de nuevo, Alejandro!</h1>
                <p className="principal-text">
                    Te saluda el componente principal. Todo tu entorno de desarrollo y tus componentes están sincronizados bajo una misma línea de diseño limpia y moderna.
                </p>
                <button className="principal-btn">Explorar proyectos</button>
            </div>
    </div>

    <ul id='lista'>
        
            {
                
                jugadores.map(j =>{
                   return <li >Dorsal: {j.id} - {j.nombre}</li>

                })
            }
     </ul>


     
        
    </>
)
}
export default Principal 