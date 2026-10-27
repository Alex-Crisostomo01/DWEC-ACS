
let seleccion = document.getElementById("productSelect")


fetch("productos.json")
.then((response)=>{
    if(!response.ok){
        throw new Error(`Error HTTP`)
    }
    return response.json()
})
.then(datos=>{
    datos.productos.forEach(prod  => {
        let option = document.createElement("option")
        option.innerHTML = `${prod.nombre} - ${prod.precio}`
        option.value = `${prod.id}`
        seleccion.appendChild(option)
    });
    
})

.catch(error=>{
    console.error("Error al cargar json: " , error)
})