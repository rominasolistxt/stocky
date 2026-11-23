// Funciones
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
    //Buenas practicas: primero las guardas y despues el happy path. 
    //Guarda 1: si no hay producto, error y sale
    if (producto === null) {
        throw new Error("Producto no encontrado");
    } 
    // Guarda 2: si no puede salir el producto, error y sale
    if (!puedeSalir(producto.stock, cantidad))  {
        throw new Error("No alcanza el stock para registrar la salida del producto")
    }   //Esto seria happy path, si llega hasta aca, registra la salida del producto
        producto.stock = producto.stock - cantidad;
        console.log('Se registra la salida de ', cantidad, ' productos.');
}

function buscarPorId(productos, id) {
    for( const producto of productos){
        if(id === producto.id){
            return producto;
        } 
    }
    return null;
}

//Datos
const productos = [
    {id: 1, nombre: "Teclado", precioCentavos: 10000, stock: 15, activo: true}, 
    {id: 2, nombre: "Mouse", precioCentavos: 5000, stock: 8, activo: true},
    {id: 3, nombre: "HDMI", precioCentavos: 8000, stock: 2, activo: true}
];

const encontrado = buscarPorId(productos, 99);

//Uso

try{
    registrarSalida(encontrado, 50);
    console.log("Salida exitosa");
} catch (error) {
    console.log("Error: ", error.message);
}