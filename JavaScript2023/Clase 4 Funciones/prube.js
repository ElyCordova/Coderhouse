//let numero = prompt("Ingrese un número:");

//while (isNaN(numero)) {
  //numero = prompt("El dato ingresado no es un número válido. Ingrese nuevamente:");
//}

//console.log("El número ingresado es:", numero);

//let edad= prompt("¿Que edad tienes?: ");
//function esMayorDeEdad(edad) {
    //if (edad >= 18) {
    //    alert("Eres mayor de edad");
    //  } else {
    //    alert("Eres menor de edad");
    //  }
    //}

    function validarCorreoElectronico() {
        let correo = prompt("Ingrese su correo electrónico:");
      
        let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        while (!expresionRegular.test(correo)) {
          correo = prompt("El correo electrónico ingresado no es válido. Ingrese nuevamente:");
        }
      
        console.log("El correo electrónico ingresado es válido.");
      }
      
      // Llamar a la función para validar el correo electrónico
      validarCorreoElectronico();