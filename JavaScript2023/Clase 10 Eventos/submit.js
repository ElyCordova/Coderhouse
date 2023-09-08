// input

let miFormulario = document.getElementById("formulario");
//cuando el usuario envíe el formulario con el botón submit quiero que ejecute la respuesta validar formulario
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //e es un objeto llamado evento
    e.preventDefault();
    console.log("Formulario Enviado");
}