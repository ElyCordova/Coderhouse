//Función anónima usando arrow function
function porCadaUno(lista, funcion){
    for(const el of lista){
        funcion(el)
    }
}

const listaNumerica = [1, 2, 3, 4]
const duplicado = []

porCadaUno(listaNumerica, (el) => {
    duplicado.push(el * 2)
})

console.log(duplicado)
