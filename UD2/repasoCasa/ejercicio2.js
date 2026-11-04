let clase = new Map()

clase.set("profesor" , "Agustin")
clase.set("aula" , "daw2")
clase.set("numAlumnos" , 20)

console.log(clase.has("aula"))

clase.delete("numAlumnos")

clase.forEach(e=>{
    console.log(e)
})

let pilotos = ['Márquez', 'Rossi', 'Márquez', 'Lorenzo']

let pilotosSet = new Set(pilotos)
console.log(pilotosSet)
let vueltaArray = Array.from(pilotosSet)
console.log(vueltaArray)

vueltaArray.forEach(p =>{
    console.log(p)

})