import { useParams } from "react-router-dom";

function Tarea({tareas}){

    const { id } = useParams();
    
    

    return(
        <>
        {
            tareas.map((tarea)=>{
                if(tarea.id === id){
                    <div>
                        <h3>Tarea a realizar </h3>
                        <p>${tarea.texto}</p>
                        <h3>Esta completada</h3>
                        <p>${tarea.completada}</p>
                    </div>
                }
    })
        }
        
        
        </>




    )

   


}
export default Tarea;