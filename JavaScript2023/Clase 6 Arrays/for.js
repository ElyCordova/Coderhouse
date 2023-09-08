    class Producto{
        constructor(id, nombre, precio){
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
        }

        sumar_iva(){
            return this.precio * 1.16
        }

        descripcion(){
            return "================" + 
            "\nProducto: " + this.id + 
            "\nNombre: " + this.nombre +
            "\nPrecio: " + this.precio +
            "\nPrecio más IVA: " + this.sumar_iva() +
            "\n=============="
        }
    }

    
    //const producto1 = {id:1, nombre:"jabon", precio:200}
    //const producto2 = {id:2, nombre:"shampoo", precio:400}   
    
    //const carrito = [producto1, producto2]
    //const carrito = [{id:1, nombre:"jabon", precio:200}, {id:2, nombre:"shampoo", precio:400}]

    //const producto1 = new Producto(1, "jabon", 200)
    //const producto2 = new Producto(2, "shampoo", 400)

    //const carrito = [producto1,producto2]
    const carrito = [new Producto(1, "jabon", 200)]

    carrito.push(new Producto(2, "shampoo", 400))
    carrito.push(new Producto(3, "acondicionador", 700))  
    
    for (const Producto of carrito){
        console.log( Producto.descripcion() )
    // 1.-   console.log(Producto)
    /* 2.-    console.log("==============");
        console.log("Producto: " + Producto.id);
        console.log("Nombre: " + Producto.nombre);
        console.log("Precio: " + Producto.precio);
        console.log("Precio más IVA: " + Producto.sumar_iva());
        console.log("==============");*/

    /* 3 .- console.log("================" + 
    "\nProducto: " + Producto.id + 
    "\nNombre: " + Producto.nombre +
    "\nPrecio: " + Producto.precio +
    "\nPrecio más IVA: " + Producto.sumar_iva() +
    "\n==============");*/
    }



