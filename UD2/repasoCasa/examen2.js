const contador = document.getElementById("contador")
const inputTarea = document.getElementById("inputTarea")
const boton = document.getElementById("btnAgregar")
let hora = document.getElementById("relojHora")
const formTarea = document.getElementById("formTarea")

let listaTareas=document.getElementById("listaTareas")
let cont = 15

setInterval(()=>{
    let fecha = new Date()
    hora.innerHTML = fecha.toLocaleTimeString()
},1000)




let intervalo = setInterval(()=>{
     
    if (cont<= 0){
        clearInterval(intervalo)
        inputTarea.disabled = true
        boton.disabled = true
        alert("Desconexion por inactividad")
    }else{
        cont--
        contador.innerHTML = `${cont}`

    }
},1000)

document.addEventListener("mousemove", ()=>{
    cont = 16
})
document.addEventListener("keydown", ()=>{
    cont = 16
})

formTarea.addEventListener("submit" , (e)=>{
    e.preventDefault()
    
    if(inputTarea.value !== ""){
        let fechaInput = new Date();
        let li = document.createElement("li")
        li.innerHTML = `${inputTarea.value} - Creado el dia ${fechaInput.toLocaleDateString()} a las ${fechaInput.toLocaleTimeString()}`
        listaTareas.appendChild(li)

    }
})

inputTarea.addEventListener("keydown",(e)=>{
    if(e.key === "Escape"){
        inputTarea.value =""
    }
})

listaTareas.addEventListener("click" , (e)=>{
       e.target.classList.add("completada")
    })

listaTareas.addEventListener("dblclick" , (e)=>{
       e.target.classList.remove("completada")
    })
