// Ejercicio 2 

let cambiarFondo = () =>{
    return `#${parseInt(Math.random()*999999)}`
}

document.body.style.backgroundColor = cambiarFondo()

// Ejercicio 3 

let numAle = parseInt(Math.random()*100)
let cont =0
let numAdivinar = 0
let volverJugar = true
do{
    while (true){
        numAdivinar = parseInt(prompt("Introduce un numero"))
        if (isNaN(numAdivinar)|| numAdivinar > 100){
            break;
        }

        if(numAdivinar > numAle){
            alert("El numero es menor")
        }
        if(numAdivinar< numAle){
            alert("El numero es mayor")
        }
        if(numAdivinar === numAle){
            alert("FELICIDADES LO ADIVINASTE")
            break
        }

    cont++
        
    }
    alert("Juego Finalizado")
}while(volverJugar===true)

