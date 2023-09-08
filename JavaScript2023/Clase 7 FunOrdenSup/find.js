//Find compara y devueleve el PRIMER valor que coincida con la busqueda

const listaCursos = [
    {nombre: 'Javascript', precio: '15000'},
    {nombre: 'ReactJS', precio:'20000'},
    {nombre: 'ReactJS', precio: '0'}
]

const resultado = listaCursos.find((el) => el.nombre === "ReactJS" && el.precio === "20000")

console.log(resultado)