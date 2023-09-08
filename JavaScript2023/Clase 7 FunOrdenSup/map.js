/*MAP Crea un array con los elementos originales pero transformados segun la operación enviada por parámetro. Toma una propiedad del objeto y trabaja con ella*/

//const cursos = [
  //  {nombre: 'Javascript', precio: 15000},
    //{nombre: 'ReactJS', precio: 22000},
    //{nombre: 'Angular', precio: 20000},
    //{nombre: 'Desarrollo Web', precio: 16000}
//]

//const nombres = cursos.map((el) => el.nombre)
//console.log(nombres)

/*Si queremos modificar los precios*/

const cursos = [
      {nombre: 'Javascript', precio: 15000},
      {nombre: 'ReactJS', precio: 22000},
      {nombre: 'Angular', precio: 20000},
      {nombre: 'Desarrollo Web', precio: 16000}
  ]
  
  const actualizarPrecios = cursos.map((el) => el.precio * 1.1)
  console.log(actualizarPrecios)
