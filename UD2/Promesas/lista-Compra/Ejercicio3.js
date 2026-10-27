let numProductos = 0
let precioProductos = 0
let seleccion = document.getElementById("productSelect")
let listaProductos = document.getElementById("productoList")
let totalProductos = document.getElementById("totalProductos")
let totalPrecio = document.getElementById("importeTotal")


fetch("productos.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error HTTP`)
        }
        return response.json()
    })
    .then(datos => {

        // Pintar los productos 
        datos.productos.forEach(prod => {
            let option = document.createElement("option")
            option.innerHTML = `${prod.nombre} - ${prod.precio}`
            option.value = `${prod.id}`
            seleccion.appendChild(option)
        })
        // Pintar productos y mostrar resumen
        seleccion.addEventListener("change", (e) => {

            let productoSeleccionado = e.target.value
            datos.productos.forEach(prod => {
                
                if (prod.id === parseInt(productoSeleccionado)) {
                    let li = document.createElement("li")
                    li.innerHTML = `${prod.nombre} - ${prod.precio}`
                    li.classList.add("product-item")
                    li.classList.add("nuevo-producto-rojo")
                    precioProductos = precioProductos + parseFloat(`${prod.precio}`)
                    numProductos ++
                    totalPrecio.innerHTML = precioProductos
                    totalProductos.innerHTML = numProductos
                    listaProductos.appendChild(li)
                    if (li.previousElementSibling !== null) {
                        
                        li.previousElementSibling.classList.remove("nuevo-producto-rojo")
                    }
                    li.addEventListener("click" , (e)=>{
                        console.log(e.target)
                        e.target.remove()
                    })
                    
                }
            })

        })


    })

    .catch(error => {
        console.error("Error al cargar json: ", error)
    })