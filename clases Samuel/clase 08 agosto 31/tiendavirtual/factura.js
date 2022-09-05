class Factura {
    #tipoPago
    constructor(nro_factura, fecha, tipoPago) {
        this._nro_factura = nro_factura;
        this._fecha = fecha;
        this.#tipoPago = tipoPago;
    }
}

module.exports = Factura