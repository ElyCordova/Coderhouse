//Ejemplo For Each que es para cada uno de los elementos del arreglo
function porCadaUno(lista, funcion){
    for(const el of lista){
        funcion(el)
    }
}

const numeros = [1,2,3,4,5,6]

numeros.forEach( (num) => {
    console.log(num)
}
)
