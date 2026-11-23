import { ProductoNoEncontradoError, StockInsuficienteError } from "./errors.js";
import { calcularStock, registrarSalida, buscarPorId} from "./services/stockService.js";
import {Producto} from "./models/producto.js";

//Uso
const productos = [
    new Producto(1, "Teclado", 15000, 5, true),
    new Producto(2, "Mouse", 1000, 15, true),
    new Producto(3, "HDMI", 18000, 9, true),
]

const encontrado = buscarPorId(productos, 99);

try {
    registrarSalida(encontrado, 2);
    console.log("Salida exitosa");
} catch (error) {
    if (error instanceof ProductoNoEncontradoError) {
        console.log("Intente con otro producto");
    } else if (error instanceof StockInsuficienteError) {
        console.log("No hay suficientes productos");
    } else {
        console.log("Error inesperado", error.message);
    }
}
