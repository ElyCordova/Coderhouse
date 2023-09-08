//min & Max devuelven los valores máximos y mínimos al recibir una serie de argumentos numéricos

console.log(Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log(Math.min(55, 13, 0, -25, 93, 4) ) // -25

//Infinity devuelve infinitos positivos o negatvos

console.log(Math.min(55, 13, Infinity, 0, -25, 93, 4) ) // Infinity
console.log(Math.min(55, 13, -Infinity, 0, -25, 93, 4) ) // -Infinity
