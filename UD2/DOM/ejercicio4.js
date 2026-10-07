let arrayInput = document.querySelectorAll(".texto")
let arrayDiv = document.querySelectorAll(".textoMostrar")
let aceptar = document.getElementById("aceptar").addEventListener("click" , ()=>{
    arrayInput.forEach((e , i) =>{
        if (arrayDiv[i]) {
            let parrafo = document.createElement("p");
            parrafo.textContent = e.value; // Usar textContent es más seguro que innerHTML
            
            arrayDiv[i].appendChild(parrafo);
        }
    })
})