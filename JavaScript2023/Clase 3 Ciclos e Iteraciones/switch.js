let entrada = prompt("Ingresa un nombre: ");
//repetimos hasta que se ingresa un ESC
while (entrada != "ESC") {

    switch (entrada) {
        case "ANA":
            alert("Hola ANA")
            break;
        case "JUAN":
            alert("Hola JUAN")
            break;
        default:
            alert("¿Quién eres?");
            break;
    }
    entrada = prompt("Ingresa un nombre: ")
}
