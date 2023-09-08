//Ejemplo de do_while (como la condición se ejecuta al final del código esto garantiza que se ejecute al menos una vez )

//establecer variable
let rta = "ESC";

do{
    let nombre = prompt("Ingrese su nombre: ")
    let apellido = prompt("Ingrese su apellido: ")

    alert("Datos guardados con exito");
    alert("Nombre: " + nombre + "\nApellido: " + apellido);

    rta = prompt("¿Desea ingresar más datos?(Ingrese ESC para salir)").toLocaleUpperCase()
}
while( rta != "ESC")

alert("Saliste del bucle do_while");