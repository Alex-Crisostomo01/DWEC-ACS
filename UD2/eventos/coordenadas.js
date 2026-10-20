let x = document.getElementById("idInfoX")
let y = document.getElementById("idInfoY")


document.body.addEventListener("mousemove" , (e)=>{
    x.innerHTML = `${parseInt(e.clientX)}`
    y.innerHTML = `${parseInt(e.clientY)}`
})