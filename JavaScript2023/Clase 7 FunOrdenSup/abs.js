//Abstracción: resumir grupo complejo de funciones en una función con palabra clave
//Ejemplo de como REETORNAR UNA FUNCIÓN
function calculadora(operacion){

    switch(operacion){
        case "sumar":
            return (numA, numB) => numA + numB
        case "restar":
            return (numA, numB) => numA - numB 
        case "dividir":
            return (numA, numB) => numA / numB
        case "multiplicar":
            return (numA, numB) => numA * numB
    }
}
                    //Aquí invoco a la función calculadora
const operacion = calculadora("multiplicar");
//const operacion = (numA, numB) => numA + numB

console.log(operacion(5, 5) )
