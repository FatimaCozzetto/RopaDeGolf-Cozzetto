/*CARRITO DE COMPRAS*/
class Producto {
    constructor (nombre, color, talle, precio) {
        this.nombre = nombre.toLowerCase();
        this.color = color.toLowerCase();
        this.talle = talle.toLowerCase();
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }

    getColor(){
        return this.color;
    }

    getTalle(){
        return this.talle;
    }

    getPrecioCon10PorcDeDescuento(){
        return this.precio * 0.90;
    }
}

//LISTA DE PRODUCTOS 
const productos = [];

//RETORNA LISTA DE PRODUCTO
const getAll = () => {
    productos = JSON.parse(localStorage.getItem('productos'));
    return productos;
}

//AGREGAR UN PRODUCTO A LA LISTA
const creat = (producto) => {
    productos.push(producto);
}

//HALLAR UN PRODUCTO POR EL NOMBRE
const findOne = (nombre) => {
    nombre = nombre.toLowerCase();
    const producto = productos.find( producto => producto.nombre === nombre);
    if (!producto){
        throw new Error(`No existe ${nombre}`);
    }
    return producto;
}

//ELIMINAR PRODUCTOS
const remove = (nombre) => {
    const producto = findOne(nombre);
    const index = productos.indexOf(producto);
    productos.splice (index, 1);
}

//MODIFICAR UN PRODUCTO
const update = (nombre, color, talle, precio) => {
    const producto = findOne(nombre);
    producto.color = color;
    producto.talle = talle;
    producto.precio = precio;
}

//REMERA
const producto1 = new Producto('Remera', 'Blanca', 'L' ,1500);

console.log(producto1.getColor);
console.log(producto1.getTalle);
console.log(producto1.getPrecio);
console.log(producto1.getPrecioCon10PorcDeDescuento());

//CHOMBA
const producto2 = new producto('Chomba', 'Azul', 'M', 1800);

console.log(producto2.getColor);
console.log(producto2.getTalle);
console.log(producto2.getPrecio);
console.log(producto2.getPrecioCon10PorcDeDescuento());

//PANTALÓN
const producto3 = new producto('Pantalón', 'Nude', 'M', 3300);

console.log(producto3.getColor);
console.log(producto3.getTalle);
console.log(producto3.getPrecio);
console.log(producto3.getPrecioCon10PorcDeDescuento);

//AGREGO PRODUCTO A LA LISTA
creat(producto1);
creat(producto2);
creat(producto3);

//OBTENER LISTA COMPLETA DE PRODUCTOS
console.log(getAll());

//AGREGAR PRODUCTOS A LA LISTA PARA EL BROWSER
for(let producto of productos) {
    console.log(producto);
    let itemProducto = document.createElement('li');
    itemProducto.textContent = `El nombre del producto es $(producto.nombre)`;
    listaProductos.appendChild(itemProducto);
}

// TODO: DESACOPLAR
itemProducto.onclick = () => {
    remove(Producto.id);
    document.location.reload();
}

