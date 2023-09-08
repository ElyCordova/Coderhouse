//Estructura de un carrito usando funciones de Orden Superior

class Producto {
    constructor(id, nombre, precio) {

    }

    descripcion() {
        return "id: " + id +
            "\nnombre: " + nombre +
            "\nprecio: " + precio + "\n"
    }
}

class Carrito {

    constructor() {
        this.listaProductos = []
    }

    cantidadProductos() {
        return this.listaProductos.length
    }

    calcularTotal() {
        //reduce
    }

    mostrarProductos() {
        //foreach
        this.listaProductos.forEach(el => {
            console.log(el.descripcion())
        })
    }

    buscarProducto() {
        //find porque filtra la primera coincidencia
    }

    buscarProductos() {
        //filter
    }

    ofertaDeVerano() {
        //map
    }

    ordenarPrecios() {
        //sort
    }
}