//Sort permite reordenar un arreglo dependiendo del método que definamos

const items =[
    { name : 'Pikachu', price: 21 },
    { name : 'Charmander', price: 37 },
    { name : 'Pidgey', price: 45 },
    { name : 'Pikachu', price: 60 },
]

items.sort( (a, b) => {
    if (a.name > b.name) {
        //usamos return por consecuencia de la arrow function sin llaves =>
        return 1;
    }
    if (a.name < b.name){
        return -1;
    }
    //a es igual a b
    return 0;
})

console.log(items)
