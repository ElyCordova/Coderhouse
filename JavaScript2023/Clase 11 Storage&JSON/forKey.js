//Ciclo para recorrer las claves almacenadas en el objeto localStorage

for(let i=0; i< localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}