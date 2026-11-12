let arrayOriginal = new Array()

for(let i = 0 ; i<8;i++){
    let numeroAleatorio = Math.floor(Math.random()*10)
    arrayOriginal.push(numeroAleatorio)
}
console.log("El array original es : ",arrayOriginal )

valorAcumulado = 0

let arrayAcumulado = new Array()
arrayOriginal.forEach(num =>{
    valorAcumulado = valorAcumulado+num
    arrayAcumulado.push(valorAcumulado)
})
console.log("El valor acumulado es :", arrayAcumulado)