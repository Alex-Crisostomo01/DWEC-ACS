let origen = document.getElementById("origen")

let destino = document.getElementById("destino")

let inputIda = document.getElementById("fechaIda")

let inputVuelta = document.getElementById("fechaVuelta")

let checkbox = document.getElementById("soloIda")

let botonCambiar = document.getElementById("swapButton").addEventListener("click", ()=>{
    let aux = origen.value
    origen.value = `${destino.value}`
    destino.value = `${aux}`
})

if(checkbox){
     inputVuelta.setAttribute("hidden")   
    }


let botonBuscar = document.getElementById("idBuscar").addEventListener("click" , ()=>{
    
    


})





