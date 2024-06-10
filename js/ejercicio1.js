//1) Convierte una temperatura dada en grados Celsius a grados Fahrenheit y determina si la temperatura en Fahrenheit es alta, baja o moderada


let celsius = 10;

function convertir(grados) {
    let fahrenheit = (grados * 1.8) + 32;
    if (fahrenheit > 85) {
        console.log('Temperatura alta');
    } else {
        if (fahrenheit < 32) {
            console.log('Temperatura baja');
        } else {
            console.log('Temperatura moderada');
        }
    }
}

convertir(celsius);
