// Declaracion de variables 




// Ejercicio 1 

let id= setTimeout(()=>{ 
    alert("Ten cuidado te estoy observando")}
    , 7000)

//Ejercicio 2 
let ocultar = setTimeout(()=>{
    fijo.style.display = 'none';
    
},5000)

let parpadeo =setInterval(()=>{
  
    if(parpadeando.style.display === "none"){
        parpadeando.style.display = 'block'
    }else{
        parpadeando.style.display = "none"
    }
  
},500)

let cambioColor = setTimeout(()=>{
    setInterval(()=>{
        let color = parseInt(Math.random()*999999)
        document.body.style.backgroundColor = `#${color}`
    },1000)
},7000)