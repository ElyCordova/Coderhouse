//Construccion del objeto

let nombre = "Homero ";
let edad = 39;
let calle = "Av. Siempreviva 742"

//Como las varibles anteriores están relacionadas entre si mejor usamos un OBJETO 

const personal = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"
}

//Para obtener los valores del objeto:

console.log(personal.nombre)
console.log(personal.edad)
console.log(personal.calle)

//Otra forma de obtener los valores del objeto:

console.log(personal["nombre"])
console.log(personal["edad"])
console.log(personal["calle"])

//Asignar valores a las propiedades

personal["nombre"] = "Marge"
personal.edad= 36

