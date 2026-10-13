

// Almacenar en todo momento los elementos de la lista y su precio
const elementos = [
    
]

// Almacenar en todo momentos las estadísticas de la lista
const estadisticas = new Map()
estadisticas.set("total-unidades" , 0)
estadisticas.set("total-precio" , 0)

//Almacenar en todo momento la lista de productos sin repetir

let listaProductos = document.getElementById("product-list")
let input =  document.getElementById("product-input")
let totalPrecio = document.getElementById("total-price")
let unidades = document.getElementById("total-units")

document.getElementById("add-btn").addEventListener("click", ()=>{
   
   
    let inputSeparado = input.value.split(",")

    if(inputSeparado.length!==2){
        alert("Formato invalido")
    }else{
    
    elementos.push(inputSeparado[0 , parseFloat(inputSeparado[1])])
    crearElemento(inputSeparado)
   
    }
    calcularTotalPrecio(parseFloat(inputSeparado[1]))
    calcularTotalUnidades()
})







function calcularTotalPrecio(precioIncremento){
    let originalTotal = estadisticas.get("total-precio") + precioIncremento
    estadisticas.set("total-precio" , originalTotal)

 totalPrecio.innerHTML= originalTotal
}

function calcularTotalUnidades(){
    let unidadesTotales = estadisticas.get("total-unidades") +1
    estadisticas.set("total-unidades" , unidadesTotales)
    unidades.innerHTML = unidadesTotales

}

function crearElemento(valores){
    let padre = document.createElement("li")
    let v1 = document.createElement("span")
    v1.innerHTML = valores[0]
    let v2 = document.createElement("span")
    v2.innerHTML = `${valores[1]}€`
    let boton = document.createElement("button")
    boton.classList.add("delete-btn")
    boton.innerHTML = "Eliminar"

    padre.appendChild(v1)
    padre.appendChild(v2)
    padre.appendChild(boton)
    boton.addEventListener("click" ,function(){
            this.parentElement.remove()
        })
    listaProductos.appendChild(padre)

    


}
