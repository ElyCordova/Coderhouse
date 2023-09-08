//con JSONparse regresamos un objeto transformado en string a su estructura orignal como objeto JS

let valor = localStorage.getItem("objeto");

let objetoParseado = JSON.parse(valor)

console.log(objetoParseado);