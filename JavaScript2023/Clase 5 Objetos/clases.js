//Las Clases en JS son equivalentes a la función constructora pero de sintaxis más clara y permiten difinir diferentes tipos de métodos.
//Crear objeto a partir de una clase:

class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

//obj significa objeto
const objPersona = new Persona("Ely", 41, "Eridanus")

console.log(objPersona)