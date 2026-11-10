let listaFrameworks = document.getElementById("framework-lista")
let seleccionAmbito = document.getElementById("ambito")


fetch("frameworks.json")
.then(response =>{
    if(!response.ok){
        throw new Error("Error HHTP");
    }
    return response.json()
})

.then(datos =>{

    seleccionAmbito.addEventListener("load",cargarPagina(datos)) 
    
   seleccionAmbito.addEventListener("change",  () =>{
       cargarPagina(datos)
   })
   
})
.catch(error =>{
    console.log("Error :" + error)
})




function cargarPagina(datos){
       
        listaFrameworks.innerHTML = ""  
        let arraySeleccion = seleccionAmbito.querySelectorAll("input")
        arraySeleccion.forEach(elemento =>{
        datos.forEach(framework =>{
            if(elemento.value === framework.ambito && elemento.checked){
                let li = document.createElement("li")

                li.innerHTML = `${framework.framework} [${framework.lenguaje}]`
                li.classList.add("framework-elemento")
                listaFrameworks.appendChild(li)

            }
        })
    })
}