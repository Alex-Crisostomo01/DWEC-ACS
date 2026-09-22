let parrafo = document.getElementById("idParrafo")

parrafo.innerHTML = "hola me sobrescribo"


console.log("Hola desde el visual")
console.warn("Esto es un aviso")
console.error("Esto es un error")

console.log("%c Hola a todos " , "font-size: 17px; color: green; ")


let empleados = [{'nombre': 'Marcos' , 'edad': 24},
{'nombre': 'Lena' , 'edad': 23},
{'nombre': 'Omar' , 'edad': 27}

]

console.group("Pasajeros")
console.log("Juan")
console.log("Liam")
console.log("Leia")
console.log("Alex")
console.log("Pedro")
console.groupCollapsed("hidden")
console.log('(Frankey & Benji)')
console.groupEnd("Hidden");
console.groupEnd("Pasajeros")
