document.getElementById("boton").addEventListener("click", ()=>{
    document.querySelector("ul").aft
    let valor = document.createElement("li")
    let num = Math.random()
    valor.innerHTML = `Nuevo elemento : ${num}`
    valor.style.color='red'
    document.body.querySelector("ul").appendChild(valor)
})


