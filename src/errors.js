export class ProductoNoEncontradoError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ProductoNoEncontradoError";
    }
}

export class StockInsuficienteError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "StockInsuficienteError";
    }
}

export class ValidacionError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ValidacionError";
    }
}
