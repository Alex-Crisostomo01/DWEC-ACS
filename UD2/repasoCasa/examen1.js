// Bloque 1

const catalogoBruto = [" teclado 25.50 ", " RATÓN 12.00 ", " monitor 150.00 ", " teclado 25.50 ", " AURICULARES 35.80 ", " alfombrilla 8.50 "];
let catalogoSinDuplicados  = new Set(catalogoBruto)

let catalogo = Array.from(catalogoSinDuplicados)


catalogo.forEach( (c , i) =>{
   catalogo[i] = c.trim().toUpperCase()
})
console.log(catalogo)
let catalogoCompleto = new Array()
catalogo.forEach(c =>{
    catalogoCompleto.push(c.split(" "))

})
let precios = new Array()

catalogoCompleto.forEach(producto =>{
    producto.forEach( (valor , i)=> {
        if(!i %2==0){
            valor = valor *1.21
            precios.push(parseFloat(valor.toFixed(2)))
        }
    });
})

console.log(`Todos los precios son mayor de 10€ : ${precios.every((p)=> p>10)}`)
console.log(`Al menos uno de los precios es mayor a 100€: ${precios.some((p)=> p>100)}`)
let preciosMayordeCincuenta = precios.filter((p)=> p>50)
console.log(preciosMayordeCincuenta)

let inventarioMap = new Map()

inventarioMap.set("PROD1" ,"teclado")
inventarioMap.set("PROD2" ,"raton")
inventarioMap.set("PROD3" ,"alfombrilla")

console.log(inventarioMap.has("PROD1"))
inventarioMap.delete("PROD2")
inventarioMap.forEach((valor , clave) =>{
    console.log(`${clave} - ${valor}`)
})

let fecha = new Date()
let infoFecha = document.getElementById("infoFecha")

infoFecha.innerHTML = `Emitido ${fecha.toLocaleDateString()} a las ${fecha.toLocaleTimeString()}`

// Bloque 2 


let formulario = document.getElementById("formProducto")
let listaProducto = document.getElementById("listaProductos")

formulario.addEventListener("submit" , (e)=>{
    e.preventDefault()
    let nombreProd = document.getElementById("nombreProd").value
    let precioProd = document.getElementById("precioProd").value
    let producto = document.createElement("p")
    producto.innerHTML = `${nombreProd} - ${precioProd}  `
    listaProducto.appendChild(producto)

})

let panelControl = document.getElementById("panelControl")

panelControl.addEventListener("mouseover", (e)=>{
    e.target.style.borderColor = "#3498db"
})
panelControl.addEventListener("mouseout", (e)=>{
    e.target.style.borderColor = "#e0e0e0"
})


let nombreProd = document.getElementById("nombreProd")
let precioProd = document.getElementById("precioProd")
nombreProd.addEventListener("keydown" , (e)=>{
    
    if(e.key === "Enter"){
        nombreProd.value = ""
        
    }
    
})


let cuentaAtras = document.getElementById("cuentaAtras")
let cont = 15
let intervalo = setInterval(()=>{
    

    if (cont >=0 ){
        cuentaAtras.innerHTML = `Cierre de sesion en ${cont} segundos`
        cont--
        
    }else{
        clearInterval(intervalo)
        nombreProd.disabled = true
        precioProd.disabled = true
        alert("Finalizacion del tiempo")
    }



}, 1000)
