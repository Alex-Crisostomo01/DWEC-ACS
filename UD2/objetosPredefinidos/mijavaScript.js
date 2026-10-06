// Matriz de pacientes
const pacientes = [
    ["Antonio", "Perez Garcia", 44, "85kg", "12345678A"],
    ["Maria", "Lopez Martinez", 32, "62kg", "87654321B"],
    ["Carlos", "Gonzalez Ruiz", 28, "78kg", "23456789C"],
    ["Laura", "Rodriguez Sanchez", 51, "68kg", "34567890D"],
    ["Pedro", "Fernandez Diaz", 39, "92kg", "45678901E"],
    ["Ana", "Torres Jimenez", 25, "58kg", "56789012F"],
    ["Javier", "Moreno Alvarez", 47, "88kg", "67890123G"],
    ["Elena", "Navarro Romero", 36, "65kg", "78901234H"],
    ["David", "Hernandez Castro", 29, "76kg", "89012345I"],
];

// calcular edad Promedio
let informacion = new Map()

function mostrar() {

    // Inicializamos variables
    informacion.set("edadSum", 0)
    informacion.set("total", pacientes.length)
    informacion.set("edadMin", 999)
    informacion.set("edadMax", -1)
    informacion.set("pesoTotal", 0)

    // Lógica de negocio   

    // Mostrar resultados en la página
    //idEdadProm.innerHTML = ` <strong> Edad promedio :</strong> ${informacion.get("edadSum") / pacientes.length}`
 


}


function ordenado() {
    alert("ordenado")
}


document.getElementById("btnMostrar").addEventListener("click",mostrar)
document.getElementById("btnOrdenado").addEventListener("click",ordenado)