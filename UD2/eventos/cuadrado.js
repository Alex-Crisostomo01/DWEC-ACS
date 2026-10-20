let caja = document.getElementById("idCaja")




document.addEventListener("keydown",(e)=>{
let posiciones = caja.getBoundingClientRect()
console.log(e)

switch (e.key){
    case "ArrowLeft" :
        caja.style.left = `${posiciones.left - 10}px`
        break;
    case "ArrowRight" : 
        caja.style.left = `${posiciones.left + 10}px`
        break;
    case "ArrowDown" : 
        caja.style.top = `${posiciones.top + 10}px`
        break;
    case "ArrowUp" : 
        caja.style.top = `${posiciones.top - 10}px`
        console.log(posiciones.top)
        break;

    
}




})