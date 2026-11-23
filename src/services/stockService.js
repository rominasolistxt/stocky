import { ProductoNoEncontradoError, StockInsuficienteError } from "../errors.js";

export function calcularStock(entradas, salidas) {
    //calcula la cantidad de stock disponible despues de restar la cantidad pedida
    return entradas - salidas;
}

export function puedeSalir(stockActual, cantidadSalida) {
    //se fija si es posible retirar tal cantidad de productos del stock
    if (stockActual >= cantidadSalida) {
        return true;
    } else {
        return false;
    }
}

export function registrarSalida(producto, cantidad) {
    //hace efectivo el retiro de x cantidades de productos del stock actual
    //Buenas practicas: primero las guardas y despues el happy path.
    //Guarda 1: si no hay producto, error y sale
    if (producto === null) {
        throw new ProductoNoEncontradoError("Producto no encontrado");
    }
    // Guarda 2: si no puede salir el producto, error y sale
    if (!puedeSalir(producto.stock, cantidad)) {
        throw new StockInsuficienteError(
            "No alcanza el stock para registrar la salida del producto");
    } //Esto seria happy path, si llega hasta aca, registra la salida del producto
    producto.stock = producto.stock - cantidad;
    console.log("Se registra la salida de ", cantidad, " productos.");
}

export function buscarPorId(productos, id) {
    for (const producto of productos) {
        if (id === producto.id) {
            return producto;
        }
    }
    return null;
}