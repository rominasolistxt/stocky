import { ProductoNoEncontradoError, StockInsuficienteError } from "./errors.js";
import { calcularStock, puedeSalir, registrarSalida, buscarPorId} from "./services/stockService.js"

//Datos
const productos = [
    {
        id: 1,
        nombre: "Teclado",
        precioCentavos: 10000,
        stock: 15,
        activo: true,
    },
    { id: 2, nombre: "Mouse", precioCentavos: 5000, stock: 8, activo: true },
    { id: 3, nombre: "HDMI", precioCentavos: 8000, stock: 2, activo: true },
];

//Uso
const encontrado = buscarPorId(productos, 5);

try {
    registrarSalida(encontrado, 5);
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
