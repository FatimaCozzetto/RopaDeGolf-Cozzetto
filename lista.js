import { productos } from ".productos.js"

//AGREGO IMPUT Y BOTÓN
$('body').prepend('<button id="btn">Enviar</button>')
$('body').prepend('<input is="input" type="texto" />)

$('#input').change((event)=>{
    console.log(event.target.value)
})

for (const producto of productos) {
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

            <button id="btn-ass-${producto.id}"> Agregar </button>;
        `
    );

    //ACCEDO AL SELECT DE CANTIDAD PARA CADA PRODUCTO
    $(`#select-count-${producto.id}`).change((event)=>{
        console.log(event.target.value)
        $(`#btn-add-${producto.id}`).trigger('click')
    })

    $(`#btn-add-${producto.id}`).on('click', ()=>{
        console.log(producto);
    })
}