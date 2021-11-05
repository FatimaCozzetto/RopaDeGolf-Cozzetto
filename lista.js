import { productos } from ".productos.js";

class itemCarrito {
    constructor(cantidad, item){
        this.cantidad = cantidad
        this.item = item
    }
}

const carrito = JSON.parse(localStorage.getItem('carrito')) || []

for (const producto of productos) {

    let count = 1;

    $('#contenedor-lista-productos').append(
        `
            <div class="contenedor-producto>
            ${producto.nombre} <span>$ ${producto.precio}
            </div>

            cantidad:
            <!-- VALIDACIÓN DE STOCK -->
            <select id="select-count-${producto.id}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>

            <button id="btn-add-${producto.id}"> Agregar </button>;
        `
    )

    //ACCEDO AL SELECT DE CANTIDAD PARA CADA PRODUCTO
    $(`#select-count-${producto.id}`).change((event)=>{
        count = +event.target.value;
    })


    $(`#btn-add-${producto.id}`).on('click', ()=>{

        const itemCarrito = new itemCarrito(count, producto)
        addItemCarrito(itemCarrito)
        
    })
}

const addItemCarrito = (item) => {
    const itemCarrito = carrito.find(elemento => elemento.item === item['item'])
    if(itemCarrito){
        itemCarrito['cantidad'] = item.cantidad
        carrito.push(item)
        console.loge(itemCarrito)
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderCarrito()
}

const renderCarrito = () => {

    $('#contenedor-carrito').empty()

    for (let elemento of carrito) {
        $('#contenedor-carrito').append(

            `
            <div> ${elemento.item.nombre} - Cantidad: ${elemento.cantidad} </div>
            `

        )
    }
}

renderCarrito()