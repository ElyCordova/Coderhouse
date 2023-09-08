//event

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //obtenemos el elemento desde el cual se disparo el evento
    let formulario = e.target
    //obtengo el valor del primer hijo <input type = "text">
    console.log(formulario.children[0].value);
    //obtengo el valor del segundo hijo <input type = "number">
    console.log(formulario.children[1].value);
    //reseteamos los datos del formulario
    miFormulario.reset();
}