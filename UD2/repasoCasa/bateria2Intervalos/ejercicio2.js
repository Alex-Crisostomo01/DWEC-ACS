let notificacion = document.getElementById("notificacion")

let boton = document.getElementById("btnGuardar")

boton.addEventListener("click" , ()=>{
    notificacion.style.display ="block"
    setTimeout(()=>{
        notificacion.style.display = "none"
    },4000)
})