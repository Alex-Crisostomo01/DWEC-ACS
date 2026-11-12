let boton = document.getElementById("btnSolicitar")
let p = document.getElementById("mensajeEstado")
boton.addEventListener("click" , ()=>{
    
    let cont = 10
    
  let intervalo= setInterval(()=>{
      
    
       boton.disabled = true
        cont--
        p.innerHTML = `Quedan ${cont} segundo para reenviar el codigo`

        if(cont<=0){
             setTimeout(()=>{
            boton.disabled = false
             },100)
            clearInterval(intervalo)
             p.innerHTML = "Puede reenviar de nuevo el codigo"
            
            
        }
        
    },1000)

    
})