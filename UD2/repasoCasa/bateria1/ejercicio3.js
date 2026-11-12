let imagen = document.getElementById("imagenPrincipal")

imagen.addEventListener("mouseover" , (e)=>{
    e.target.style.transform = "scale(1.2)"
})

imagen.addEventListener("mouseout" , (e)=>{
    e.target.style.transform = "scale(1)"
})

let boton = document.querySelectorAll("button")

boton.forEach(b =>{
    b.addEventListener("click" , (e)=>{
       
        imagen.src = e.target.dataset.src
        
    })
})