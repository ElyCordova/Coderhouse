//para eliminar info almacenada en el sessionStorage o localStorage usamos el método removeItem o clear

localStorage.setItem(`bienvenida`, `¡Hola Coder!`);
sessionStorage.setItem(`esValido`, true);

localStorage.removeItem(`bienvenida`);
sessionStorage.removeItem(`esValido`);

localStorage.clear() //elimina toda la información
sessionStorage.clear() //elimina toda la información