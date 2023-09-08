/*REDUCE * básicamente es un acumulador/
//Este método reduce() resume el valor del array a un único valor de retorno

/*const numeros = [1, 2, 3, 4, 5, 6]

const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0) //el cero es en dónde va a inicializar el acumulador del método reduce

console.log(total) // 21*/

//Para obener un promedio

const calif = [10, 9, 8]

const total = calif.reduce((acumulador, elemento) => acumulador + elemento, 0)

let promedio = total / calif.length

console.log(promedio) // 9

/*class curso{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }

    descripcion(){
        return "Nombre: " + this.nombre + "\nPrecio: " + this.precio + "\n"
    }
}

let Javascript = new curso ("Javascript", 22000)
let ReactJS = new curso ("ReactJS", 30000)
let C = new curso ("C", 1000)

const listaCursos = [Javascript, ReactJS, C]

const listaCursos.forEach( el => { console.log( el. descripcion() )})*/
