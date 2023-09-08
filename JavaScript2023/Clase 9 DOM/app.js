/*console.dir(document);
console.dir(document.head);
console.dir(document.body);
//en el navegador en la pestaña consola : 
//#document
//head
//body
console.log(document.title)
//Clase 09 | DOM*/

let div = document.getElementById("app");
let parrafo1 = document.getElementById("parrafo1");

console.log(div.innerHTML); // <p id="parrafo1">Hola mundo</p>
console.log(parrafo1.innerHTML); //Hola mundo