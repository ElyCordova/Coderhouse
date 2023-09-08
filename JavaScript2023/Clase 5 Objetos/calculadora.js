class Calculadora {
    //propiedades
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
    //métodos
    sumar() {
        return this.num1 + this.num2
    }

    restar() {
        return this.num1 - this.num2
    }

    multiplicar() {
        return this.num1 * this.num2
    }

    dividir() {
        return this.num1 / this.num2
    }
}


const calculator = new Calculadora(5,5)

console.log(calculator.multiplicar())