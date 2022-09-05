Factura = require('./factura')
let pedidos = 0
class Pedido {
    constructor(lista,cliente){
        this._nombre = cliente._nombre
        this._lista = lista
        pedidos++
        this._nropedido=pedidos
        this.fecha = new Date ()
    }
    generarfactura(){
        this._factura= new Factura(this._nropedido,this.fecha,'targeta')
    }
}

module.exports = Pedido
