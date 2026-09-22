// Ejercicio 1 
alert("Ejercicio 1")
let nombre = prompt("Introduce el nombre")
let apellido  = prompt("Introduce el apellido")

let num1 = parseInt(prompt("Introduce un numero"))
let num2 = parseInt(prompt("Introduce un numero"))
let num3 = parseInt(prompt("Introduce un numero"))
let resultado = num1+num2+num3

console.log(`${nombre} ${apellido}`)
console.log(`La suma de los tres valores es ${resultado}`)
console.log(`La multiplicacion de los 3 valores es ${num1*num2*num3}`)

console.log(`La division entre el primer valor y el tercero es ${num1/num3}`)


alert("Ejercicio 2 ")
//Ejercicio 2 

let num4 = parseInt(prompt("Introduce un numero"))
let num5 = parseInt(prompt("Introduce un numero"))
let num6 = parseInt(prompt("Introduce un numero"))

if (num4 >10){
    console.log(`El numero ${num4} es mayor de 10`)
}
if (num5 >10){
    console.log(`El numero ${num5} es mayor de 10`)
}
if (num6 >10){
    console.log(`El numero ${num6} es mayor de 10`)
}
alert("Ejercicio 3 ")
// Ejercicio 3
let dia = parseInt(prompt("Introduce un numero"))
let mes = parseInt(prompt("Introduce un numero"))

if (dia === 14 && mes === 2){
    console.log("Feliz dia de San Valentin 💖")
}

alert("Ejercicio 4 ")
// Ejercicio 4 

let sueldo = parseInt(prompt("Introduce tu sueldo "))
let anyos = parseInt(prompt("Introduce los años que llevas en la empresa "))

if (sueldo<500 && anyos >= 10){
    console.log(sueldo*3)

}
if (sueldo<500 && anyos <10){
    console.log(sueldo*2)

}
if (sueldo>=500){
    console.log(sueldo)

}


alert("Ejercicio 5 ")
// Ejercicio 5 

let notas = "4;7;10;8;6"

let notasSeparadas = notas.split(";")

notasSeparadas.forEach(nota => {
    if(nota>=0 && nota<3){
        console.log(`La nota ${nota} es muy deficiente`)
    }
    if(nota>=3 && nota<5){
        console.log(`La nota ${nota} es  insuficiente`)
    }
    if(nota>=5 && nota<6){
        console.log(`La nota ${nota} es  Bien`)
    }
    if(nota>=6 && nota<9){
        console.log(`La nota ${nota} es notable`)
    }
    if(nota>=9 && nota<=10){
        console.log(`La nota ${nota} es sobresaliente`)
    }
    
});

alert("Ejercicio 6")
// Ejercicio 6 

let numeros = prompt("Introduce una secuencia de numeros separadoos por ,")

let numerosSeparados = numeros.split(",")
let confirmacion = "No"
numerosSeparados.forEach(numero=>{
    if(parseInt(numero) === 10){
        confirmacion = "Si"
    }

})
console.log(confirmacion)

alert("Ejercicio 7")
//Ejercicio 7 

let numAsteriscos = parseInt(prompt("Dame un numero de asteriscos"))
let asteriscos = ""
for(i=0;i<numAsteriscos;i++){
    asteriscos+="*"
    console.log(asteriscos)
}

alert("Ejercicio 8")
//Ejercicio 8

let anyo = parseInt(prompt("introduce un año "))
console.log(esBisiesto(anyo))




function esBisiesto(anyo){
    if(anyo%100 === 0){
        if (anyo %400 === 0){
            return "1"
        }else{
            return "0"
        }
    }else if(anyo%4 === 0){
        return "1"
    }else{
        return "0"
    }

    return "0"

    }

alert("Ejercicio 9")
// ejercicio 9 
let base = parseFloat(prompt("Introduce un numero"))
let altura = parseFloat(prompt("Introduce un numero"))
let resultadoRect =parseFloat(perimetroRectangulo(base, altura))
console.log(`El perimetro de un rectangulo es ${resultadoRect}`)
function perimetroRectangulo(base , altura){
    return 2*(base*altura)
}

alert("Ejercicio 10")

// Ejercicio 10
let numPrimo = parseInt(prompt("Introduce un numero para saber si es primo o no "))
if (numPrimo>1 && numPrimo<=10000){
    esPrimo(numPrimo)
}else{
    console.log("El numero no esta en el rango")
}

function esPrimo(n){
    if (n < 2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
        
    }
    return true
}

alert("Ejercicio 11")
// Ejercicio 11


