let arrayInput = document.querySelectorAll(".texto")
let arrayDiv = document.querySelectorAll(".textoMostrar")
let aceptar = document.getElementById("aceptar").addEventListener("click" , ()=>{
    arrayInput.forEach((e , i) =>{
        if (arrayDiv[i]) {
            let parrafo = document.createElement("p");
            parrafo.textContent = e.value; 
            console.log(e)

            if(e.value !== ""){
                arrayDiv[i].style.color = "green"
                parrafo.style.color = "blue"
            }else{
                arrayDiv[i].style.color = "red"
            }

            arrayDiv[i].appendChild(parrafo);
        }
    })
})