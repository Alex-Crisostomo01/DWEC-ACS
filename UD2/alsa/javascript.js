let origen = document.getElementById("origen")

let destino = document.getElementById("destino")

let inputIda = document.getElementById("fechaIda")

let inputVuelta = document.getElementById("fechaVuelta")

let checkbox = document.getElementById("soloIda")
let resultadoOrigen = document.getElementById("resOrigen")
let resultadoVuelta = document.getElementById("resDestino")
let resultadoFechaIda = document.getElementById("resFechaIda")
let resultadoFechaVuelta = document.getElementById("resFechaVuelta")
let resultadoSoloIda = document.getElementById("resSoloIda")


let botonCambiar = document.getElementById("swapButton").addEventListener("click", ()=>{
    let aux = origen.value
    origen.value = `${destino.value}`
    destino.value = `${aux}`
})



checkbox.addEventListener("click", ()=>{
    if(checkbox.checked){
    inputVuelta.setAttribute("hidden" , "")   
    }else{
         inputVuelta.removeAttribute("hidden")
    }
    })
     


let botonBuscar = document.getElementById("idBuscar").addEventListener("click" , (e)=>{
   e.preventDefault()
    
    let fecha = new Date()
    if (origen === "" || destino ==="" || origen.value === destino.value){
        
        alert("Los valores tienen que estar rellenos de origen y destino")
    }else if(inputIda.value > fecha.getDay){
       
       alert("La fecha tiene que estar antes que el dia actual")
    }else if(inputIda.value > inputVuelta.value ){
       
         alert("La fecha de ida no puede ser despues de la de destino ")
    }else{
        
        resultadoOrigen.innerHTML = `${origen.value}`
        resultadoVuelta.innerHTML = `${destino.value}`
        resultadoFechaIda.innerHTML = `${inputIda.value}`
        
        if(checkbox.checked){
            resultadoFechaVuelta.setAttribute("hidden" , "")
            resultadoSoloIda.innerHTML = "Si"
        }else{
            resultadoFechaVuelta.innerHTML = `${inputVuelta.value}`
            resultadoFechaVuelta.removeAttribute("hidden")
        }
        
        
    }

    
    



    

    
    


})





