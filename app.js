/*CARRITO DE COMPRAS*/

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }

    getPrecioCon10PorcDeDescuento(){
        return this.precio * 0.90;
    }
}

//REMERA
const producto1 = new producto('Remera', 1500);

console.log(producto1.getPrecio);
console.log(producto1.getPrecioCon10PorcDeDescuento());

//CHOMBA
const producto2 = new producto('Chomba', 1800);

console.log(producto2.getPrecio);
console.log(producto2.getPrecioCon10PorcDeDescuento());

//PANTALÓN
const producto3 = new producto('Pantalón', 3300);

console.log(producto3.getPrecio);
console.log(producto3.getPrecioCon10PorcDeDescuento);