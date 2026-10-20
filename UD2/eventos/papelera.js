let papel = document.getElementById("papel")
let papelera = document.getElementById("papelera")
let llena = document.getElementById("papeleraLlena")
let reiniciar = document.getElementById("reiniciar")

let arrastrando = false

papel.addEventListener("mousedown" , (e) =>{
    arrastrando = true
   
})

document.addEventListener("mouseup",  ()=>{
   let rectPapel = papel.getBoundingClientRect()
    let rectPapelera = papelera.getBoundingClientRect()
    if(arrastrando){
    if(rectPapel.right > rectPapelera.left &&
  rectPapel.left < rectPapelera.right &&
  rectPapel.bottom > rectPapelera.top &&
  rectPapel.top < rectPapelera.bottom ){
        papelera.style.display = "none"
        papel.style.display = "none"
        llena.style.display = "block"
        reiniciar.style.display = "block"
    }
   }
    arrastrando = false
    

    
})


document.addEventListener("mousemove" , (e) =>{
    if(arrastrando){
     papel.style.top = `${e.clientY}px`
     papel.style.left = `${e.clientX}px`
    }
            
        })


reiniciar.addEventListener("click", () =>{
    papelera.style.display = "block"
    papel.style.display = "block"
    llena.style.display = "none"
    reiniciar.style.display = "none"
})