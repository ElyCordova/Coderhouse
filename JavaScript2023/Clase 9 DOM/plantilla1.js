//Uso de plantillas literales en JS ES6

class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;

    }
    /*
    descripcion(){
        return "id: " + this.id+
        "\nnombre: " + this.nombre + 
        "\nprecio: " + this.precio
    }*/

    //Usando el método de plantilla de ES6 para concatenar
    descripcion(){
        return `id: ${this.id}
        nombre: ${this.nombre}
        precio: ${this.precio}`

    }
}

let harina = new Producto(1, "harina", 150)
/*Usando plantilla para console log
console.log(harina.descripcion())*/

console.log(`ID: ${harina.id}
NOMBRE: ${harina.nombre}
PRECIO: ${harina.precio}`)


