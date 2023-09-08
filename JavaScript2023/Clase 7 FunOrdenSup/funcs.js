const productos =[
    {id: 1, producto: "Arroz", precio: 125},
    {id: 2, producto: "Fideo", precio: 70},
    {id: 3, producto: "Pan", precio: 50},
    {id: 1, producto: "Flan", precio: 100}
]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) // {id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === "Harina")
console.log(existe) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos) // [(id: 2, producto: "Fideo", precio: 70),(id: 3, producto: "Pan", precio: 50)]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres) // ["Arroz", "Fideo", "Pan", "Flan"]

