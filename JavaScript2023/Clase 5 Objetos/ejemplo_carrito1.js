class Producto{
    constructor(nombre, precio){ //establecer las propiedades del objeto
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    //métodos de la clase Producto
    sumaIva(){
        this.precio = this.precio * 1.16 ;
    }

    vender(){
        this.vendido = true;
    }

    estaVendido(){
        if(this.vendido == true){
            return "Fué vendido" //se considera buena práctica retornar un string en vez de hacer un console.log cuando estamos dentro de un METODO
        }else{
            return "Está en venta"
        }
    }

    descripcion(){ //Para que se desplieguen de forma más ordenada los valores del objeto al mostrarlos en pantalla
        return "Nombre: " + this.nombre +
        "\nPrecio: " + this.precio + "\n" + this.estaVendido()
    }
}
//Metiendo valores a las propiedades del objeto
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");

//Llamando a los métodos de la clase para que se apliquen al objeto
console.log(producto1.descripcion());

console.log( producto1.precio);
producto1.sumaIva();
console.log( producto1.precio);

console.log (producto2.vendido);
producto2.vender(),
console.log (producto2.vendido);

console.log( producto1.estaVendido())
producto1.vender()
console.log( producto1.estaVendido())

const producto3 = new Producto("lentejas", "80");
console.log(producto3.descripcion());



