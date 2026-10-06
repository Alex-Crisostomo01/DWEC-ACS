

const parrafo1 = {
    "titulo" : "Primer Parrafo",
    "hijos" : ["primer contenido" , "segundo contenido","tercer contenido"]
}
const parrafo2 = {
    "titulo" : "Segundo Parrafo",
    "hijos" : ["primer contenido P2" , "segundo contenido P2","tercer contenido P2"]
}

let informacion = new Set()
informacion.add(parrafo1)
informacion.add(parrafo2)

console.log(informacion)


informacion.forEach(e =>{
    let titulos = document.createElement("h2")
    titulos.innerHTML = e.titulo
    document.body.appendChild(titulos)
    
    e.hijos.forEach(h=>{

        let hijo = document.createElement("p")
        hijo.innerHTML = h
        document.body.appendChild(hijo)

    })
})

