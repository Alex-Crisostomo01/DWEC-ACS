let elemento = null
const CAMPOS = ["Deportes", "Series", "Peliculas","Anime"]

function quitarEstilos(){
    let parrafos = document.querySelectorAll("p")
    parrafos.forEach((p)=>{
        p.classList.remove("verde")
        p.classList.remove("azul")
    })
}

document.getElementById("aceptar").addEventListener("click", () => {


    quitarEstilos()

    CAMPOS.forEach(function(campo) {

        let input = document.getElementById(`id${campo}Favorito`)
        //resetear colores

       
        if (input.value !== "") {
            
            //Crear elemento
            elemento = document.createElement("p")
            elemento.innerHTML=input.value
            elemento.classList.add("azul")
            

                       
            //Añadir elemento al documento
             let padre = document.getElementById(`id${campo}`)
             let tito = padre.previousElementSibling
             tito.classList.remove("rojo")
             tito.classList.add("verde")


            padre.appendChild(elemento)
             
        }
    })
})


