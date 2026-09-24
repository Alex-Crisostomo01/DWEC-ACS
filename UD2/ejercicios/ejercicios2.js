// Ejercicio 2 

let cambiarFondo = () =>{
    return `#${parseInt(Math.random()*999999)}`
}

document.body.style.backgroundColor = cambiarFondo()

// Ejercicio 3 


do{
        let numAle = parseInt(Math.random()*100)
        console.log(numAle)
        let cont =0
        let numAdivinar = 0
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
    alert(`Juego finalizado lo has adivinado en ${cont} intentos`)
}while(confirm("Quieres volver a jugar"))



// Ejercicio 3 

alert("Ejercicio 3")

let numFactorial = parseInt(prompt("Introduce un numero para sacar su factorial"))
let resultado = 1
for(let i = numFactorial;i>1;i--){
    console.log (`${i}`)
    resultado = resultado *i
   
}

alert(`El factorial de ${numFactorial} es ${resultado}`)


// ejercicio 5 



