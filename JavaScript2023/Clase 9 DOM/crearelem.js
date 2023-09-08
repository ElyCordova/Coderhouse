//createElement : Permite crear elementos en JS

const abarrotes = document.getElementById("abarrotes")

//UNA MANERA DE CREAR UN PARRAFO//
//creo un parrafo//
let parrafo = document.createElement("p")
//modifico el parrafo creado//
parrafo.innerText = "AZUCAR"
//agregando atributos al parrafo creado
parrafo.setAttribute("id","id_harina")
//al contenedor de abarrotes añade (append) el parrafo modificado al final
abarrotes.append(parrafo)
//consguiendo el elemento por id
const nodoElemento = document.getElementById("id_harina")
//lo borramos
nodoElemento.remove()
//Eliminar elementos con remove()
parrafo.remove()

let parrafo2 = document.createElement("p")
parrafo2.innerText = "CAFE"
abarrotes.append(parrafo2)

//OTRA MANERA DE CREAR PARRAFO//
abarrotes.innerHTML += "<p>AZUCAR</P>"




