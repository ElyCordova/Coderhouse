class Producto {
  //Vamos a utilizar un constructo para desesctructurar el objeto para instanciar un producto
  constructor({ id, nombre, precio, descripcion, img }) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.cantidad = 1
    this.descripcion = descripcion
    this.img = img
  }

  aumentarCantidad() {
    this.cantidad++
  }

  disminuirCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--
      return true
    }
    return false
    }
  descripcionHTMLCarrito() {
    return `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${this.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text">Cantidad: <button class="btn btn-dark" id="minus-${this.id}"><i class="fa-solid fa-minus fa-1x"></i></button>${this.cantidad}<button class="btn btn-dark" id="plus-${this.id}"><i class="fa-solid fa-plus"></i></button> </p>
                    <p class="card-text">Precio: $${this.precio}</p>
                    <button class="btn btn-danger" id="eliminar-${this.id}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    </div>`
  }



  descripcionHTML() {
    return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.nombre}</h5>
            <p class="card-text">${this.descripcion}</p>
            <p class="card-text">$${this.precio}</p>
            <button class="btn btn-primary" id="ap-${this.id}">Añadir al carrito</button>
        </div>
    </div>
        `
  }
}

class Carrito {
  constructor() {
    this.listaCarrito = []
    //Atributos exclusivos de la class Carrito
    this.contenedor_carrito = document.getElementById(`contenedor_carrito`)
    this.total = document.getElementById('total')
    this.finalizar_compra = document.getElementById("finalizar_compra")
    this.keyStorage = "listaCarrito"
  }

  levantarStorage() {
    //this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || []
    this.listaCarrito = JSON.parse(localStorage.getItem(this.keyStorage)) || []

    if (this.listaCarrito.length > 0) {
      let listaAuxiliar = []

      for (let i = 0; i < this.listaCarrito.length; i++) {
        let productoDeLaClaseProducto = new Producto(this.listaCarrito[i]); //[i]permite iniciar en la posición cero de la lista carrito. Asi mismo estamos instanciando un producto pero madándole un objeto y así pasa de un objeto literal a una instancia de Producto.
        //Con la lista auxiliar añado cada uno de esos productos.
        listaAuxiliar.push(productoDeLaClaseProducto)
      }

      this.listaCarrito = listaAuxiliar

    }
  }

  //Aquí se agrega el método para que se guarde en Storage los productos del carrito antes transformando la listaCarrito a formato JASON
  guardarEnStorage() {
    let listaCarritoJSON = JSON.stringify(this.listaCarrito)
    //localStorage.setItem("listaCarrito", listaCarritoJSON)
    localStorage.setItem(this.keyStorage, listaCarritoJSON)
  }

  agregar(productoAgregar) {
    //this.listaCarrito.push(productoAgregar)
    let existeElProducto = this.listaCarrito.some(producto => producto.id == productoAgregar.id)

    if (existeElProducto) {
      let producto = this.listaCarrito.find(producto => producto.id == productoAgregar.id)
      producto.cantidad = producto.cantidad + 1
    } else {
      this.listaCarrito.push(productoAgregar)
    }
  }

  //Para eliminar productos delcarrito se crea este método
  eliminar(productoEliminar) {
    //Se buscan los productos por medio de su id ya que los productos del carrito son objetos literales 
    let producto = this.listaCarrito.find(producto => producto.id == productoEliminar.id)
    //para encontrar el índice del producto que deseamos eliminar
    let indice = this.listaCarrito.indexOf(producto)
    //para remover el elemento del array usamos splice
    this.listaCarrito.splice(indice, 1)
   // if (this.listaCarrito.length == 0) {
     // this.contenedor_carrito.innerHTML = "h1 el precio es: prueba h1"
     // this.total.innerHTML = "h2 $0 h2"
  }

  limpiarContenedorCarrito(){
    this.contenedor_carrito.innerHTML = ""
  }

  mostrarProductos() {
    //Para que no se vayan acumulando los productos después de cada recorrido, es decir, limpiar el DOM (vaciarlo)
    this.limpiarContenedorCarrito()

    this.listaCarrito.forEach(producto => {
      contenedor_carrito.innerHTML += producto.descripcionHTMLCarrito()
    })

    //Hacemos un bucle para eliminar los productos deseados en caso de que existan
    this.listaCarrito.forEach(producto => {

      let btn_eliminar = document.getElementById(`eliminar-${producto.id}`)
      let btn_plus = document.getElementById(`plus-${producto.id}`)
      let btn_minus = document.getElementById(`minus-${producto.id}`)

      btn_eliminar.addEventListener("click", () => {
        this.eliminar(producto)
        this.guardarEnStorage()
        this.mostrarProductos()
      })

      btn_plus.addEventListener("click", () => {
        producto.aumentarCantidad()
        this.mostrarProductos()
      })

      btn_minus.addEventListener("click", () => {
        if (producto.disminuirCantidad()) {
          this.mostrarProductos()
        }
      })

    })
    const total = document.getElementById("total")
    total.innerHTML = "Precio Total: $" + this.calcular_total()
  }

  calcular_total() {
    return this.listaCarrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0)
  }

  mostrarMsjContenedorCarrito(msj = ""){
     this.contenedor_carrito.innerHTML = msj
  }


  eventoFinalizarCompra() {
    //Agregamos evento al botón finalizar compra
    this.finalizar_compra.addEventListener("click", () => {
      //Solamente cuando haya productos en el carrito
      if (this.listaCarrito.length > 0) {
        let precio_total = this.calcular_total()
        //Limpiar el carrito definiendolo como un arreglo vacío
        this.listaCarrito = []
        //Para borrar la lista de carrito borrando el storage
        localStorage.removeItem(this.keyStorage)
        //Mostramos el carrito
        this.limpiarContenedorCarrito()
        //Se renderiza el carrito con el mensaje `Compra realizada con éxito`
        this.contenedor_carrito.innerHTML = "<h3 class=`text-center`>¡Compra realizada con éxito!</h3>"
        this.total.innerText = "Total a pagar: $" + precio_total
      }else{
        this.contenedor_carrito.innerHTML = "<h3 class=`text-center`>No hay productos para finalizar la compra</h3>"
      }

    })

  }
}


class ProductoController {
  constructor() {
    this.listaProductos = []
  }

  agregar(producto) {
    this.listaProductos.push(producto)
  }

  mostrarProductos() { //También se le llama "Renderizar"
    let contenedor_productos = document.getElementById("contenedor_productos")
    this.listaProductos.forEach(producto => {
      /*Al contenedor de productos le añadimos la card de html copiada de bootstrap*/
      contenedor_productos.innerHTML += producto.descripcionHTML()
    })

    //Recorro en un forEach la lista de productos
    this.listaProductos.forEach(producto => {
      //Identifico a nuestro botón por Id
      const btn = document.getElementById(`ap-${producto.id}`)
      //Agregamos un evento a nuestro botón para que realice el método de agregar el producto al carrito
      btn.addEventListener("click", () => {
        //Para agregar el producto que está recorriendo de la lista y para guardarlo en el storage
        carrito.agregar(producto)
        carrito.guardarEnStorage()
        carrito.mostrarProductos()
      })
    })
  }
}

//Creando una plantilla como objeto literal

let objLiteral = { id: 1, nombre: "VOGUE", precio: 860, descripcion: "Recibe 12 ejemplares", img: "https://condenastmexico-latam.com/wp-content/uploads/2021/08/Portada-Vogue-Instagram-AGOSTO1.jpg" }

//Instancias de Producto
const p1 = new Producto({ id: 1, nombre: "VOGUE", precio: 860, descripcion: "Recibe 12 ejemplares", img: "https://condenastmexico-latam.com/wp-content/uploads/2021/08/Portada-Vogue-Instagram-AGOSTO1.jpg" })
const p2 = new Producto({ id: 2, nombre: "Harper's BAZAAR", precio: 800, descripcion: "Recibe 12 ejemplares", img: "https://www.malemodelscene.net/wp-content/uploads/2022/08/Bad-Bunny-John-Edmonds-Harpers-BAZAAR-01.jpg" })
const p3 = new Producto({ id: 3, nombre: "ELLE", precio: 720, descripcion: "Recibe 12 ejemplares", img: "https://assets.isu.pub/document-structure/230130165236-9f7cf1367e6506f49542e16bbfc20046/v1/1f52243b60be4df776f150ab5a720f1c.jpeg" })
const p4 = new Producto({ id: 4, nombre: "marie claire", precio: 750, descripcion: "Recibe 12 ejemplares", img: "https://i.blogs.es/a3c8e8/clewa50wgaamoix/1366_2000.jpg" })

//Instancia de carrito que el cliente va a escoger así como el guardado de estos en el storage y el que se muestren al usuario
const carrito = new Carrito()
 
carrito.levantarStorage()
carrito.mostrarProductos()
carrito.eventoFinalizarCompra()


//Instancia de Controlador de Producto que gestionará todas las acciones que se pueden hacer con los productos (mostrar, calcularTotal, eliminar, etc.)
const controlador_productos = new ProductoController()

controlador_productos.agregar(p1)
controlador_productos.agregar(p2)
controlador_productos.agregar(p3)
controlador_productos.agregar(p4)


//El ProductoController tiene la particularidad de poder mostrar los productos en el DOM así que vamos a llamar a su método
controlador_productos.mostrarProductos()

