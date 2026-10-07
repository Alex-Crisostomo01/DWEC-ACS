let contenedor = document.getElementById("contenedor")


document.getElementById("boton").addEventListener("click" , ()=>{
   let max = document.getElementById("valor").value
   for(let i = 0 ; i<max;i++){
    //Creamos el elemento
    let nombre = document.createElement("label")
    nombre.innerHTML = `${Math.random()}`
    let cb = document.createElement("input")
    cb.type = "checkbox"
    cb.name = "checkboxes"
    

    nombre.appendChild(cb)

    contenedor.appendChild(nombre)
   }
})