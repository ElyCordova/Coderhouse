//Eventos de teclado
let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")

input1.onkeyup = () => {console.log("keyUp")}
input1.onkeydown = () => {console.log("keyDown")}