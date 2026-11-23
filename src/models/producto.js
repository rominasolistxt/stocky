import {ValidacionError} from "../errors.js";

export class Producto {
    constructor(id, nombre, precioCentavos, stock, activo){

        if (stock <0 || precioCentavos <0 ){
            throw new ValidacionError("El stock y el precio no pueden ser menor a cero");
        }

        this.id = id;
        this.nombre = nombre;
        this.precioCentavos = precioCentavos;
        this.stock = stock;
        this.activo = activo;
    }

    tieneStock(cantidad){
        return this.stock >= cantidad;
    }
}
