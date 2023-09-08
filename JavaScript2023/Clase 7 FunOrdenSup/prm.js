//Recibir Funciones por Parámetro (funciones que reciben otra función como parémtro)

//arr = arreglo  ;  fn = función  ; el = elemento

function porCadaUno(arr, funcion){
    for(const el of arr) { //recorre los elementos del Array
        funcion(el)        //Muestra el resultado con la función console.log
    }
}
function acumular(num){
    //total = total + num
    total += num
}

const numeros = [1, 2, 3, 4]

let total = 0

porCadaUno(numeros, acumular);
console.log(total)
