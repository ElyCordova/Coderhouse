//podemos acceder a lo almacenado en localStorage por medio de getItem. Las claves y valores de storage se guardan en formato de cadenas de caracteres (DOMstring)*/

let mensaje = localStorage.getItem(`bienvenida`);
let bandera = localStorage.getItem(`esValido`);
let numero = localStorage.getItem(`unNumero`);

console.log(mensaje); //en el navegador//
console.log(bandera);
console.log(numero);

