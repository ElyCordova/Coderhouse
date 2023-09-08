//Las clases son plantillas de donde podemos distanciar (crear) objetos.
//Un método es una función que va a trabajar con los atributos que le demos. Ya que es un comportamiento de clase, podríamos decir que es una función propia de la clase.

class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

//insertamos un método (siempre dentro de la construcción de la clase):

hablar(){
    console.log("Hola, soy: " + this.nombre)
    }
}

const objPersona1 = new Persona("Gonzalo", 26, "Eridanus")
const objPersona2 = new Persona("Ely", 41, "Eridanus")

//Asignamos el método a los objetos
objPersona1.hablar()
objPersona2.hablar()

//class Auto(){
    //propiedades
    //marca
    //modelo
    //no.serie

    //comportamientos
    //arrancar
    //desplazarse
    //frenar
    //acelerar
//}