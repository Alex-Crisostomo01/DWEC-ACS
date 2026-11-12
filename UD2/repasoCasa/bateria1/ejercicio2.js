let zonaDeTrabajo =document.getElementById("zonaTrabajo")
let menu = document.getElementById("menuContextual")
zonaDeTrabajo.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
   
    menu.style.display="block" 
    menu.style.left = `${e.clientX}px` 
    menu.style.top = `${e.clientY}px`
})

document.addEventListener("click" , ()=>{
    menu.style.display = "none"
})