class Producto{
    constructor(id,nombre){
        this.id = id
        this.nombre = nombre
    }

    descripcion(){
        return `id: ${this.id} | nombre: ${this.nombre}`
    }
}
/*
let objeto = new Producto(1, "harina")

objetoJSON = JSON.stringify(objeto)

localStorage.setItem("producto", objetoJSON);
*/

//string
let objetoJSON = localStorage.getItem("producto");

//objeto literal 
let objeto = JSON.parse(objetoJSON)
console.log(objeto)

//Para obtener su método JS (descripcion) de vuelta se deben instanciar sus atributos
let producto = new Producto(objeto.id, objeto.nombre);

console.log(producto);
