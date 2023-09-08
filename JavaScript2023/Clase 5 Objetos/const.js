//El constructor de un objeto es una función que usamos para crear un nuevo objeto cada que sea necesario
function Persona (nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this. calle = calle;
}
//const es de constante y es una función
const persona1 = new Persona("Ely", 41, "eridanus")
const persona2 = new Persona("Zeus", 10, "eridanus")

console.log(persona1)
console.log(persona2)
