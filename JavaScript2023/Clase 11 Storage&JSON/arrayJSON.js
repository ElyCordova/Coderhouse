//Para almacenar un array de objetos en el Storage

/*let listaProductos = [
    {id:1,producto:"harina"},
    {id:2,producto:"jabón"}
]

//lo convertimos a string con el método stringify
let listaProductosJSON = JSON.stringify(listaProductos);

//lo guardamos en el localStorage usando el setItem
localStorage.setItem("listaProductos", listaProductosJSON);*/

//Para transformar de nuevo el array a formato Javascript

//Obtenemos el array del localStorage usando el método getItem
let listaProductosJSON = localStorage.getItem("listaProductos");

//al tenerlo, lo parseamos para convertirlo en JS
let listaProductos = JSON.parse(listaProductosJSON);

console.log(listaProductos);
    