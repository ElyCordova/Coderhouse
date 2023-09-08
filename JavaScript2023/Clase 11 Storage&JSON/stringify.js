//Con JSON.stringify podemos transformar un objeto JS a un string en formato JSON

let objeto = {id:1, producto: "harina"}
//Convertido a formato JSON
//{"id":1,"producto":"harina"} todo lo transforma a tipo string

console.log(objeto);//con formato de consola

let objetoJSON = JSON.stringify(objeto);
console.log(objetoJSON);//con formato de JS

//Almacenando el objeto en localStorage
localStorage.setItem("objeto", objetoJSON);