//Carrito de compras para adquirir merchandise de la página "Le Collectour"

class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    //Método para aumentar la cantidad de productos seleccionados
    aumentarCantidad(cantidad){
        this.cantidad = cantidad + this.cantidad

    }
    //Creo una método para obtener y mostrar una descripción del producto al usuario
    descripcion() {
        return "id: " + this.id + "\n" +
            "nombre: " + this.nombre + "\n" +
            "precio: " + this.precio + "\n"     
    }

    //Creo una método para obtener y mostrar una descripción del producto ya ingresado EN EL CARRITO DE COMPRAS
    descripcionDeCompra() {
        return "nombre: " + this.nombre + "\n" +
                "precio: " + this.precio + "\n" +
                "cantidad: " + this.cantidad + "\n"
    }
}

//creamos una class para controlar los productos (mostrar,añadir, eliminar, filtrar, etc)

class ProductoController {
    constructor() {
        this.listaProductos = []
    }

    agregar(producto) {
        this.listaProductos.push(producto);
    }

    // Para buscar los productos en un carrito de compras creamos un método
    buscarproductoPorID(id){
        return this.listaProductos.find(producto => producto.id == id)
    }
        
    //Para mostrar los productos creamos un método
    mostrarProductos() {
        let listaEnTexto = ""
        this.listaProductos.forEach(producto => {
         
            listaEnTexto = listaEnTexto + producto.descripcion() + "\n"
        })
        alert(listaEnTexto)
    }
}

//Creamos el carrito de compras por medio de una clase
class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    //Realizamos un método para una vez seleccionados los productos se agreguen en el carrito
    agregar(producto, cantidad){
        //el producto ya existe?
        let existe = this.listaCarrito.some(el => el.id == producto.id)
        if(existe){
            producto.aumentarCantidad(cantidad)
        }else{
            producto.aumentarCantidad(cantidad)
            this.listaCarrito.push(producto)
        }  
    }

    //Al tener ya agregados los productos necesitamos un método para mostrarlos en el carrito
    mostrarProductos(){
        let listaEnTexto = "Carrito de compras:\n"
        this.listaCarrito.forEach(producto => {
            listaEnTexto = listaEnTexto + producto.descripcionDeCompra() + "\n"
            //console.log(producto.descripcionDeCompra())
        })
        alert(listaEnTexto)
    }

    //Creamos un método para calcular el total de los productos contenidos en el carrito usando la higher function reduce
    calcularTotal(){
        return this.listaCarrito.reduce( (acumulador,producto) => acumulador + producto.precio * producto.cantidad, 0)
    }

    //Método para calcular el IVA del total de la compra
    calcularIVA(){
        return this.calcularTotal() * 1.16
    }
}

//Creamos un controlador de producto para gestonar sus propiedades así como las del carrito

const ContProd = new ProductoController()
const CARRITO = new Carrito()

ContProd.agregar(new Producto(1, "totebag", 350, 1))
ContProd.agregar(new Producto(2, "t-shirt", 200, 1))
ContProd.agregar(new Producto(3, "funda", 250, 1))
ContProd.agregar(new Producto(4, "pin", 50, 1))

//Llamamos al método para ver el comportamiento del objeto
//comenzamos la parte de interacción con el usuario
let rta
//a través de un ciclo do mostramos los productos y le damos al usuario la opción de seleccionar la opción que desee 
do{
    ContProd.mostrarProductos()
    let opcion = Number(prompt("Ingresa el código del producto que deseas agregar"))
    let producto = ContProd.buscarproductoPorID(opcion)
    let cantidad = Number(prompt("Ingresa la cantidad del producto que deseas agregar"))
    CARRITO.agregar(producto,cantidad)
    alert("Producto añadido al carrito exitosamente")
    CARRITO.mostrarProductos()

    rta = prompt("Ingresa 'ESC' para salir").toUpperCase()
}while(rta != "ESC")

//Al hacer ESC pedimos se nos muestre el carrito con los productos y su precio total escogidos al final
alert("Total de la compra: " + CARRITO.calcularTotal())
alert("Total de la compra con IVA: " + CARRITO.calcularIVA())