//Constructor de la clase Date

console.log(new Date() )

console.log(new Date (2022, 1, 16)) //2022-02-16T06:00:00.000Z Enero = 0, Diciembre = 11

const casiNavidad = new Date(2021, 11, 24, 23, 59, 59)
console.log(casiNavidad) // Fri Dec 24 2021 23:59:59 GMT-0600 (hora estándar central)

//crea objetos date con fechas diferentes con parámetros tipo number

const hoy = new Date ("December 17, 2021")

console.log(hoy.toDateString()) // Fri Dec 17 2021
console.log(hoy.toLocaleString()) // 17/12/2021, 00:00:00
console.log(hoy.toLocaleDateString()) // 17/12/2021
console.log(hoy.toTimeString()) // 00:00:00 GMT-0600 (hora estándar central)

console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11
console.log(hoy.getDay()) // 5

//Diferencia de dias entre fechas
const navidad = new Date ("December 25, 2021")

console.log(navidad - hoy )// 691200000

const milisegundosporDia = 86400000

console.log( (navidad - hoy ) / milisegundosporDia ) // 8 

