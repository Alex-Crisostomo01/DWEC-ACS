

setInterval(()=>{ 
    for(let i = 1; i<=50;i++){
        let x = parseInt(Math.random()* 100)
        let y = parseInt(Math.random()*100)

        let rojo = parseInt(Math.random()*255)
        let azul = parseInt(Math.random()*255)
        let verde = parseInt(Math.random()*255)
        document.body.innerHTML += `
        <div style= " background-color:rgb(${rojo}, ${verde}, ${azul}) ;
        top: ${y}%;
        left: ${x}%;"></div>
    `}},2000)