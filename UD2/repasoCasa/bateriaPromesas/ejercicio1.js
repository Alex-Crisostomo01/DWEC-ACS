let select = document.getElementById("peliculaSelect")
let listaFavoritos = document.getElementById("favoritosList")
let estadisticas = new Map()

let contadorPeliculas = 0
let contadorMinutos =0
estadisticas.set("total-peliculas" , contadorPeliculas)
estadisticas.set("duracionTotal" , contadorMinutos)
let totalFavoritos= document.getElementById("totalFavoritos")
let totalMinutos= document.getElementById("duracionTotal")
console.log(estadisticas)

fetch("peliculas.json")
.then((response)=>{
     if(!response.ok){
        throw new Error("Error HTTP")
    }
    return response.json()
})

.then((datos =>{

datos.peliculas.forEach(pel => {
    let opcion = document.createElement("option")
    opcion.value = pel.id
    opcion.innerHTML = `${pel.titulo} - ${pel.duracion}min`
    select.appendChild(opcion)

  
});
  select.addEventListener("change" , (e)=>{
    

        let productoSeleccionado = e.target.value
        datos.peliculas.forEach(pel=>{
            if(parseInt(productoSeleccionado) === pel.id){
                let li = document.createElement("li")
                li.innerHTML = `${pel.titulo} - ${pel.duracion}min`
                li.classList.add("pelicula-destacada")
                listaFavoritos.appendChild(li)
                contadorPeliculas++
                estadisticas.set("total-peliculas" , contadorPeliculas)
                contadorMinutos = parseInt(pel.duracion) + contadorMinutos
                estadisticas.set("duracionTotal" , contadorMinutos)
                totalFavoritos.innerHTML = estadisticas.get("total-peliculas")
                totalMinutos.innerHTML = estadisticas.get("duracionTotal")


                if(li.previousSibling !== null){
                    li.previousElementSibling.classList.remove("pelicula-destacada")
                }
        }

        
        })
        
    })

    listaFavoritos.addEventListener("dblclick" , (e)=>{
        e.target.remove()
    })

}))
.catch(error=>{
    console.log(`Error HTTP : ${error}`)
})
   
