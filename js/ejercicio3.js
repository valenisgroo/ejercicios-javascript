//3) Descripción: Determina si un número entero es primo.

let numero = 11;

function esPrimo(valor) {
    if (valor <= 1) {
        return `El número ${valor} no es primo`;
    }
    for (let i = 2; i <= Math.sqrt(valor); i++) {
        if (num % i === 0) {
            return `El número ${valor} no es primo`;
        }
    }
    return `El número ${num} es primo`;
}

console.log(esPrimo(numero));