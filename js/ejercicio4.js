// 4) Realiza operaciones aritméticas básicas y muestra el mayor resultado.

let numero1 = 5;
let numero2 = 10;
let numero3 = -3;

let suma = numero1 + numero2 + numero3;
let resta = numero1 - numero2 - numero3;
let multiplicacion = numero1 * numero2 * numero3;

if (suma > resta) {
    if (suma > multiplicacion) {
        console.log(`El resultado mayor es la suma, y es: ${suma}`);
    } else {
        console.log(`El resultado mayor es la multiplicación, y es: ${multiplicacion}`);
    }
} else {
    if (resta > multiplicacion) {
        console.log(`El resultado mayor es la resta, y es: ${resta}`);
    } else {
        console.log(`El resultado mayor es la multiplicación, y es: ${multiplicacion}`);
    }
}
