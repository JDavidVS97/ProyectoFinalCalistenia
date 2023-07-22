const BOTONNB = document.getElementById('botonNB')
const BOTONNI = document.getElementById('botonNI')
const BOTONNA = document.getElementById('botonNA')
const PARRAFO = document.getElementById("parrafo")
const PARRAFO1 = document.getElementById("parrafo1")
const PARRAFO2 = document.getElementById("parrafo2")
const MUSCULOS = document.getElementById("musculos")


BOTONNB.addEventListener("click", () =>{
    if (PARRAFO.style.display == "none"){
        PARRAFO.style.display = "block"
    }else{
        PARRAFO.style.display = "none"
    }
})
BOTONNI.addEventListener("click", () =>{
    if (PARRAFO1.style.display == "none"){
        PARRAFO1.style.display = "block"
    }else{
        PARRAFO1.style.display = "none"
    }
})
BOTONNA.addEventListener("click", () =>{
    if (PARRAFO2.style.display == "none"){
        PARRAFO2.style.display = "block"
    }else{
        PARRAFO2.style.display = "none"
    }
})


