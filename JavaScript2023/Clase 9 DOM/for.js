let paises = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");

for (const pais of paises){
    console.log(pais.innerHTML);
}

for (const div of contenedores){
    console.log(div.innerHTML);
}

