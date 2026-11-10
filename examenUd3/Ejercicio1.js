// ==========================================
// VARIABLES GLOBALES
// ==========================================
let informacion = []; // Almacena los datos del JSON

// Map con las dos claves fijas para el histórico
const historicoMap = new Map([
    ["me-gusta", 0],
    ["no-gusta", 0]
]);

// Referencias al DOM
const listaUL = document.querySelector('.framework-lista');
const radioButtons = document.querySelectorAll('input[name="tipo-ambito"]');
const spanGustan = document.getElementById('contador-gustan');
const spanNoGustan = document.getElementById('contador-no-gustan');


fetch("frameworks.json")
.then((response)=>{
    if(!response.ok){
        throw new Error("Error HTTP")
    }
    return response.json()
})
.then((datos) =>{




 radioButtons.forEach(elemento=>{
        elemento.checked = false
       elemento.addEventListener("change" , ()=>{
        listaUL.innerHTML = ""

        if(elemento.checked ){
            datos.forEach(fr =>{
                
                if(elemento.value === fr.ambito){
                    let li = document.createElement("li")
                    li.classList.add("framework-elemento")
                    li.innerHTML = `${fr.framework} [${fr.lenguaje}]`
                    listaUL.appendChild(li)
                    li.addEventListener("click" , (e)=>{
                            let elementoSeleccionado = e.target
                            let pregunta = prompt(`Te gusta ${elementoSeleccionado.innerHTML}? (si/no)`)

                            while(pregunta !== "si" && pregunta !== "s" && pregunta !== "no" && pregunta !== "n" ){
                                pregunta = prompt(`Te gusta ${elementoSeleccionado.innerHTML}? Solo puede contestar (si/no)`)
                            }

                            if(pregunta.toLowerCase() === "si" || pregunta.toLowerCase() === "s"){
                                historicoMap.set("me-gusta" , historicoMap.get("me-gusta") + 1)
                                
                                elementoSeleccionado.classList.add("gusta")
                                
                            } 
                            if(pregunta.toLowerCase() === "no" || pregunta.toLowerCase() === "n"){
                                 historicoMap.set("no-gusta" , historicoMap.get("no-gusta") + 1)
                                
                                elementoSeleccionado.classList.add("no-gusta")
                            }

                            spanGustan.innerHTML = historicoMap.get("me-gusta")
                            spanNoGustan.innerHTML = historicoMap.get("no-gusta")
                    })

                    li.addEventListener("contextmenu" , (e)=>{
                        e.preventDefault()
                        let elementoSeleccionadoEliminar = e.target


                        let confirmar = confirm("Desea eliminar este producto")

                        if(confirmar){
                             let listaAtributos = elementoSeleccionadoEliminar.classList
                         listaAtributos.forEach(att => {
                            if(att ==="gusta"){
                            historicoMap.set("me-gusta" , historicoMap.get("me-gusta") -1)
                            
                        }
                            if(att === "no-gusta"){
                                historicoMap.set("no-gusta" , historicoMap.get("no-gusta") - 1)
                               
                        }
                         });
                       

                         spanGustan.innerHTML = historicoMap.get("me-gusta")
                        spanNoGustan.innerHTML = historicoMap.get("no-gusta")
                        elementoSeleccionadoEliminar.remove()
                        }
                       
                    })



                }
            })
            
        }
       })
       
       
        
    })


})
.catch(err=>{
    console.error(`Error http : ${err}`)
})
