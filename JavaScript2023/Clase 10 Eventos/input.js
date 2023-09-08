//Dándole entrada input para que se ejecute una fucnión cada que se escribe sobre el campo

let input1 = document.getElementById("nombre")

input1.addEventListener(`input`, () =>{
    console.log(input1.value)
})