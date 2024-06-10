//2) Calcula el Índice de Masa Corporal (IMC) de una persona y clasifica el resultado.

let peso = 70;
let altura = 1.73;
let imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log(`Tiene un IMC de ${imc}, su peso es bajo`);
} else if (imc < 25) {
    console.log(`Tiene un IMC de ${imc}, su peso es normal`);
} else if (imc < 30) {
    console.log(`Tiene un IMC de ${imc}, tiene sobrepeso`);
} else {
    console.log(`Tiene un IMC de ${imc}, tiene obesidad`);
}