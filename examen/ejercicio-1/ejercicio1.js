let secuenciaAcumulada = new Array()

for(let i = 0 ; i<8;i++){
    let numeroAleatorio = Math.floor(Math.random()*10)
    secuenciaAcumulada.push(numeroAleatorio)
}
valorAcumulado = 0
console.log(secuenciaAcumulada)
let secuencia = new Array()
secuenciaAcumulada.forEach(num =>{
    valorAcumulado = valorAcumulado+num
    secuencia.push(valorAcumulado)
})
console.log(secuencia)