let lista = document.querySelector(".product-list")



fetch ("products.json")
    .then(response =>{
     if (!response.ok) {
            throw new Error(`Error HTTP:`);
        }
        return response.json(); 
    })
    .then (datos =>{
      console.log(datos)
        datos.products.forEach(dato => {
            let li = document.createElement("li")
            li.innerHTML = `${dato.Name} - ${dato.Price} - ${dato.Location}`
            lista.appendChild(li)
            
        });
    
    })
    .catch(error =>{
        console.error("Error al cargar json: " , error)
    })
    