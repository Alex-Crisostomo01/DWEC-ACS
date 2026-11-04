let notas = [4.5, 7.0, 9.2, 3.8, 6.5, 8.0]

notas.push(4.5)
notas.unshift(5.6)

let notasAprobadas = notas.filter((n)=> n>5.0)
console.log(notasAprobadas)

let notasAumentadas =notas.map((n)=> n+0.5)
console.log(notasAumentadas)



let comprobarAprobados = notasAumentadas.every((n)=>n>5)
console.log(comprobarAprobados + "SI/NO")
let algunSobresaliente = notasAumentadas.some((n)=>n>9)

console.log(algunSobresaliente + "SI/NO")


let notasOrdenadas =notasAumentadas.sort()
let notasORdenadasPorSuspenso = notasAumentadas.reverse()