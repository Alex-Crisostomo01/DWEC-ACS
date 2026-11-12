
let reloj = document.getElementById("reloj")
let intervalo =setInterval(()=>{
    let fecha = new Date()
    reloj.innerHTML = fecha.toLocaleTimeString()
}, 1000 )