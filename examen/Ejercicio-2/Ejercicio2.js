// --- VARIABLE GLOBAL ---
const historico = new Map();

// --- SELECTORES ---
const btnIniciar = document.getElementById('btnIniciar');
const inputInicial = document.getElementById('valorInicial');
const inputFinal = document.getElementById('valorFinal');
const estadoTexto = document.getElementById('estado');

// --- LÓGICA ---

let contClave = 0
btnIniciar.addEventListener("click" , (e)=>{
   
    console.log(inputInicial.value , inputFinal.value)
    if(parseInt(inputInicial.value) > parseInt(inputFinal.value)){
        console.error("Error el valor inicial no puede ser mayor que el final ")
    }else{
    let cont = inputInicial.value
    let intervaloContador = setInterval(()=>{
        let fecha = new Date()
        if(cont <= parseInt(inputFinal.value)){
            console.log(cont)
            cont++

        }else{
            clearInterval(intervaloContador)
            setTimeout(()=>{
                alert("Proceso completado con existo")
                contClave++
               
                historico.set(contClave , `Hora : ${fecha.toLocaleTimeString()} , Valor inicial : ${inputInicial.value},  Valor Final : ${inputFinal.value} `)
                console.log(historico)
            }, 3000)
        }
},1000)
}



})
