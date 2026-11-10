

// 1. Selección de elementos del DOM
const valX = document.getElementById('val-x');
const valY = document.getElementById('val-y');
const zonaDibujo = document.getElementById('zona-dibujo');

// 2. Variables de estado
let desbloqueado = false;
const TARGET_X = 500;
const TARGET_Y = 500;

// --- LÓGICA ---

zonaDibujo.addEventListener("mousemove" ,(e)=>{
    valX.innerHTML = e.clientX
    valY.innerHTML = e.clientY

    console.log(desbloqueado)
    if(TARGET_X === e.clientX && TARGET_Y === e.clientY){
        zonaDibujo.classList.add("desbloqueado")
        desbloqueado = true
        
    }else{
        zonaDibujo.classList.remove("desbloqueado")
    }
})

document.addEventListener("keydown" , (e)=>{
            
            console.log(e.key)
            if(desbloqueado === true){
                let div = document.createElement("div")
                div.innerHTML=`${e.key}`
                
                div.classList.add("letra-dibujada")
                zonaDibujo.appendChild(div)
            }
        })