let listaCompra = [];
let seleccion = document.getElementById("productSelect")
let listaProductos = document.getElementById("productoList")
let totalProductos = document.getElementById("totalProductos")
let totalPrecio = document.getElementById("importeTotal")
const estadisticas = new Map();

estadisticas.set("total-unidades" , 0)
estadisticas.set("total-precio" , 0)

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
                    estadisticas.set("total-unidades" , estadisticas.get("total-unidades")+1)
                    estadisticas.set("total-precio" , estadisticas.get("total-precio")+prod.precio)
                   
                    totalPrecio.innerHTML = estadisticas.get("total-precio")
                    totalProductos.innerHTML = estadisticas.get("total-unidades")
                    listaProductos.appendChild(li)
                    if (li.previousElementSibling !== null) {
                        
                        li.previousElementSibling.classList.remove("nuevo-producto-rojo")
                    }
                    li.addEventListener("dblclick" , (e)=>{
                        estadisticas.set("total-unidades" , estadisticas.get("total-unidades")-1)
                        estadisticas.set("total-precio" , estadisticas.get("total-precio")-prod.precio)
                   
                    totalPrecio.innerHTML = estadisticas.get("total-precio")
                    totalProductos.innerHTML = estadisticas.get("total-unidades")
                        e.target.remove()
                    })
                    
                }
            })

        })


    })

    .catch(error => {
        console.error("Error al cargar json: ", error)
    })