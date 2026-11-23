function calcularStock(entradas, salidas) { //calcula la cantidad de stock disponible despues de restar la cantidad pedida
    return entradas - salidas;
}

function puedeSalir(stockActual, cantidadSalida){   //se fija si es posible retirar tal cantidad de productos del stock
    if (stockActual >= cantidadSalida) {
        return true;
    } else {
        return false;
    }
}

function registrarSalida(producto, cantidad){   //hace efectivo el retiro de x cantidades de productos del stock actual 
    if (producto === null) {
        console.log('Producto no encontrado');
        return false
    } 
    if (puedeSalir(producto.stock, cantidad)) { //si puede salir es true, se resta la cantidad solicitada al stock actual y lo imprime en consola
        producto.stock = producto.stock - cantidad;
        console.log('Se registra la salida de ', cantidad, ' productos.')
        return true;
    } else {
        console.log('No alcanza el stock para registrar la salida del producto')     //si no alcanza imprime un mensaje en pantalla
        return false;
    }
    
}

function buscarPorId(productos, id) {
    for( const producto of productos){
        if(id === producto.id){
            return producto;
        } 
    }
    return null;
}

const productos = [
    {id: 1, nombre: "Teclado", precioCentavos: 10000, stock: 15, activo: true}, 
    {id: 2, nombre: "Mouse", precioCentavos: 5000, stock: 8, activo: true},
    {id: 3, nombre: "HDMI", precioCentavos: 8000, stock: 2, activo: true}
];

const encontrado = buscarPorId(productos, 99);

// console.log(productos.length); //para ver cuantos productos hay
/*for (const producto of productos)   {   //para ver nombren y stock de cada uno
    console.log(producto.nombre);
    console.log(producto.stock);
}
*/

productos.push({id: 4, nombre: "Audiculares On Ear", precioCentavos: 25000, stock: 4, activo: true})
console.log(productos.length); //para ver cuantos productos hay

console.log(buscarPorId(productos, 3));

//console.log(calcularStock(producto.stock, 20));
//console.log(puedeSalir(producto.stock,20)); //hay que ver que espera cada funcion, esta espera un numero, por eso se especifica el producto.stock
console.log(registrarSalida(encontrado, 5)); //este espera un objeto, por eso es solo producto.
//console.log(encontrado.stock); // encontrado apunta al mismo objeto que está en la lista (no es una copia),por eso al cambiar encontrado.stock también cambia en productos
console.log(productos);