//Filter compara y devueleve los valores que coincidan con la busqueda en forma de arreglo

const listaCursos = [
    {nombre: 'Javascript', precio: '15000'},
    {nombre: 'ReactJS', precio:'20000'},
    {nombre: 'ReactJS', precio: '0'}
]

const resultado = listaCursos.filter((el) => el.nombre === "ReactJS")

resultado.forEach(el => {
    console.log(el.nombre)
    console.log(el.precio)
});