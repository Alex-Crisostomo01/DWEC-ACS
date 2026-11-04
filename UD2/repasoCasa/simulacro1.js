const notasBrutas = ["4.5", "7.0", "9.2", "3.8", "6.5", "9.2", "5.0", "4.5", "8.0"];

let notasSinRepetir = new Set(notasBrutas)

let registroAlumnos = new Map()


// Bloque 1 
let notas = Array.from(notasSinRepetir)
let notasAumentadas = new Array ;
notas.forEach((n)=>{
 n= (parseFloat(n)*1.05).toFixed(2)
    if(parseFloat(n)<10){
       
        notasAumentadas.push(parseFloat(n))

    }
        
})

let notasAprobadas = notas.filter(n => n >=5)

console.log(notasAumentadas.every(n => n>=5) ? "aprobadas" : "No aprobadas todas"
)

console.log(notasAumentadas.some(n=> n>9 )? "Existe una nota superior a 9": "No hay nigun sobresaliente")

// Bloque 2 


registroAlumnos.set(1 , "Fernando")
registroAlumnos.set(2 , "Alex")
registroAlumnos.set(3 , "Alonso")

console.log(registroAlumnos.has(2))
registroAlumnos.delete(3)
registroAlumnos.forEach((clave , valor) =>{
    console.log(`${clave} - ${valor}`)
})

let fecha = new Date()
let mostrarFecha = document.getElementById("mostrarFecha")
let p = document.createElement("p")
p.innerHTML = `Dia : ${fecha.toLocaleDateString()} , hora ${fecha.toLocaleTimeString()}`
mostrarFecha.appendChild(p)


//bloque 3
let datos = document.getElementById("datosProcesados")
let form = document.getElementById("formEvaluacion").addEventListener("submit" , (e)=>{
    e.preventDefault()
    let nombre = document.getElementById("nombreAlumno").value
    let p = document.createElement("p")
    p.innerHTML = nombre
    datos.appendChild(p)

})

let resultados = document.getElementById("resultados")

resultados.addEventListener("mouseout", (e)=>{
    e.target.style.borderColor = "white"

    
})


resultados.addEventListener("mouseover" , (e)=>{
    e.target.style.borderColor = "red"

    
})

let cuentaAtras= document.getElementById("cuentaAtras")
let cont =10
let intervalo =setInterval(()=>{
    cont --
    cuentaAtras.innerHTML = `Tiempo restante : ${cont} s`
    

    if(cont <= 0){
        clearInterval(intervalo)
        alert("Tiempo acabado")
       
    }

} , 1000)


