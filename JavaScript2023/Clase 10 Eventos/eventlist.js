//Obtengo el btnprincipal del html por el getElementById del objeto document
let boton = document.getElementById("btnPrincipal")
//Accedo al nodo del boton y mediante el metodo addEvent...le ASIGNAMOS el evento click y que haya una repuesta cuando se haga ese click. Esa respeusta es una función
boton.addEventListener("click", respuestaClick)
//se define la función respuestaClick
/*function respuestaClick(){
    console.log("El usuario hizo click en el botón!")
}*/
function respuestaClick(){
    let titulo = document.getElementById("titulo")
    //cambiamos el mensaje original del título al hacer click.
    titulo.innerText = "Hizo click en el botón!"
}
