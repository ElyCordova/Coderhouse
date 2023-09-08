//Código que solicita datos de usuario, determina si es mayor de edad y a partir de ahí decidir el tipo de información que se le enviará
let rta = ""
while (rta != "ESC") {

    //Preguntar su nombre
    let nombre = prompt("¿Cuál es tu nombre?: ");

    //Preguntar su edad
    function mayoriaEdad() {
        let edad = prompt("¿Que edad tienes?: ");

        //Comprobar que la edad es un dato numérico
        while (isNaN(edad) || edad < 0) {
            edad = prompt("El dato ingresado no es un número válido. Ingrese nuevamente:");
        }
        alert("Tu edad es: " + edad);

        //Determinar si es Mayor de edad
        if (edad >= 18) {
            alert("Eres mayor de edad por lo que recibirás noticias de todas las casas de moda :)");
        } else {
            alert("Eres menor de edad pero te enviaremos noticias curadas especialmente para ti ;)");
        }
    }
    mayoriaEdad();

    //Preguntarle si desea inscribirse al news letter
    
    let sign = prompt("¿Deseas inscribirte a nuestro News Letter? s/n");
        if(sign == "s"){
        //Solicitarle su correo para enviarle la info
            let email = prompt("Ingresa tu correo electrónico para recibir las últimas novedades del mundo de la moda");
        //Avisarle que su correo ha sido registrado
            alert("Tu correo ha sido ingresado con éxito");
        }else{
            alert("Esperemos pronto cambies de opnión ;)")
        }

    //Desea continuar cargando usuarios? Ingrese ESC para finalizar
    rta = prompt("Desea ingresar más datos de usuarios?(Ingrese ESC para finalizar) ").toUpperCase()
}

