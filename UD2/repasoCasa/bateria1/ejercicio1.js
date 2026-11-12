let input = document.getElementById("buscador")
let sinResultados = document.getElementById("sinResultados")
let lista = document.querySelectorAll("li")

lista.forEach(l =>{
    console.log(l.innerHTML)
})

input.addEventListener("keydown" , (e)=>{
   
    if(e.key === "Escape"){
        console.log(e.key)
        input.value =""
    }
let encontrado = false
    lista.forEach(l =>{
        if(l.innerHTML.toLowerCase().includes(input.value.toLowerCase())){
            l.style.display=""
            encontrado = true
        }else{
            l.style.display="none"
        }
    })
    if(encontrado=== false){
        sinResultados.style.display= "block"
    }else{
        sinResultados.style.display= "none"
    }
    
})