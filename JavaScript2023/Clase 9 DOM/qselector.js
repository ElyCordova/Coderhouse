//AL usar Query Selector me trae UN SOLO objeto del arreglo

const p = document.querySelector("div .texto")

console.log(p.innerHTML)
//si hay más elementos dentro del parrafo siempre traerá la primera coincidencia, es como el método FIND.

//con Query Selector ALL nos trae todo el arreglo con todos sus objetos

const pList = document.querySelectorAll("div .texto")

console.log(p)

//Le decimos que itere cada parrafo
for (const p of pList){
    //nos muestre de cada parrafo el innerHTML
    console.log(p.innerHTML)
}