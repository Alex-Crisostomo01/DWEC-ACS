

let imagenes = document.querySelectorAll(".imagen")

imagenes.forEach((img, index)=>{
    let url = `imagenes/pic${index+1}.jpg`
    fetch(url)
    .then(response =>{
     if (!response.ok) {
            throw new Error(`Error HTTP:`);
        }
        return response.blob(); 
    
})
    .then( (contenido) =>{
       
        img.setAttribute("src" , url)

        img.addEventListener("click" , function(e){

           imagenes.forEach((imagen)=>{
                imagen.className = "imagen oscurecer"
            })
            e.target.className = "expandir"
        })



        img.addEventListener("dblclick" , function(e){
            console.log(e)
            imagenes.forEach(imagen =>{
                imagen.className = "imagen"
            })
        })

        
    })

    .catch(error =>{
        img.title = `Imagen no encontrada`
    })

})