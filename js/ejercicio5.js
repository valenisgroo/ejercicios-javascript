// 5) Calcula el precio final de un producto aplicando un descuento basado en su precio inicial.

let precioInicialProducto = 70;
let precioFinalProducto = 0;

if (precioInicialProducto > 100) {
    precioFinalProducto = precioInicialProducto - (precioInicialProducto * 0.1);

    console.log(`El precio inicial era de: ${precioInicialProducto}, se aplica un 10% de descuento, y el precio final es: ${precioFinalProducto}`);
} else if (precioInicialProducto >= 50) {
    precioFinalProducto = precioInicialProducto - (precioInicialProducto * 0.05);
    console.log(`El precio inicial era de: ${precioInicialProducto}, se aplica un 5% de descuento, y el precio final es: ${precioFinalProducto}`);
} else {
    precioFinalProducto = precioInicialProducto;
    console.log(`El precio inicial era de: ${precioInicialProducto}, no se aplica ningún descuento, y el precio final es: ${precioFinalProducto}`);
}