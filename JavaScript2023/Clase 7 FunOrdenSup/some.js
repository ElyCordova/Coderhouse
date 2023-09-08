//SOME recibe una función de busqueda que retorna un TRUE o un FALSE. Es para saber si una propiedad del objeto existe o no

const listaCursos = [
{nombre: 'Javascript', precio: 15000},
{nombre: 'ReactJS', precio: 250000},
{nombre: 'ReactJS', precio: 0},
] 

let existe = listaCursos.some((el) => el.nombre == "Javascript")

if(existe /*== true*/){
    console.log("Tenemos en venta el curso: ")
    let curso = listaCursos.find((el) => el.nombre == "Javascript")
    console.log(curso)
}else{
    console.log("El curso que buscas no existe")
}
