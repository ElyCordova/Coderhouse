//Random genera un número pseudo aleatorio entre cero y uno, siendo el 0 el lmite inclusivo y el 1 el exclusivo

console.log(Math.random()) //0.2877613003043116
console.log(Math.random()) //0.739265736906445
console.log(Math.random()) // 0.18105922392648477

//para generar numeros aleatorios dentroo de un rango deseado mulplicamos su resultado por el rango esperado
//numeros entre 0 y 10
console.log(Math.random() * 9 + 1)

//numeros entre 0 y 50
console.log(Math.random() * 50)

//numeros entre 20 y 50
console.log(Math.random() * 30 + 20)

const genNumero = () => {
    return Math.round(Math.random() * 100 ) //0 a 100
   // return Math.ceil(Math.random() * 100 ) //1 a 100
   // return Math.round(Math.random() * 100 ) // 0 a 99
}

let esCien = false
let valor = 0
let i = 0 //contador que empieza en cero para saber cuantas veces se ejecutó el código

while (esCien == false ){
    valor = genNumero()
    console.log(valor)

    if (valor == 100){
        esCien = true
    }
    i++ //por cada vez que el código se ejecute el contador aumenta en 1

}
console.log("Cantidad de veces que se ejecuta el código: " + i)
console.log(valor ) 

