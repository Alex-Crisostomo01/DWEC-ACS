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
let fecha = new Date()

let botonCambiar = document.getElementById("swapButton").addEventListener("click", ()=>{
    let aux = origen.value
    origen.value = `${destino.value}`
    destino.value = `${aux}`
})



checkbox.addEventListener("click", ()=>{
    if(checkbox.checked){
    inputVuelta.setAttribute("disabled" ,"on")   
    }else{
         inputVuelta.removeAttribute("disabled" , "off")
    }
    })
     


let botonBuscar = document.getElementById("idBuscar").addEventListener("click" , (e)=>{
   e.preventDefault()
    
    
    if (origen.value=== "" || destino.value ==="" || origen.value === destino.value){
        
        alert("Los valores tienen que estar rellenos de origen y destino o ser diferentes")
        

    }else if(inputIda.value > `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}`){
       console.log("2. No entro")
       

    }else  if(!checkbox.checked && inputIda.value > inputVuelta.value) {
           
            alert("La fecha de vuelta no puede ser antes a la de ida ")
    }else{
           resultadoOrigen.innerHTML = origen.value;
    resultadoVuelta.innerHTML = destino.value;
    resultadoFechaIda.innerHTML = inputIda.value;

   
    if (checkbox.checked) {
        resultadoSoloIda.innerHTML = "Sí";
        resultadoFechaVuelta.hidden = true; 
    } else {
        resultadoSoloIda.innerHTML = "No";
        resultadoFechaVuelta.innerHTML = inputVuelta.value;
        resultadoFechaVuelta.hidden = false; 
    }
    }
    


})





