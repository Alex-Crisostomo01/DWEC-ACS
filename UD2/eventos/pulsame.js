let boton = document.getElementById("btnPulsame")





boton.addEventListener("click" , function(e){
    e.stopPropagation() // este metodo no le pasa este click a elementos superiores 
    document.body.style.backgroundColor = `#${parseInt(Math.random()*999999)}`
})

document.body.addEventListener("click", function(e){
    document.body.style.backgroundColor = "white"
})





