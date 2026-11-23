function calcularStock(entradas, salidas) {
    return entradas - salidas;
}

const stock = calcularStock (25,25)

function puedeSalir(stockActual, cantidad){
    if (stockActual >= cantidad) {
        return true;
    } else {
        return false;
    }
}

console.log(stock)
console.log (puedeSalir(stock,25))