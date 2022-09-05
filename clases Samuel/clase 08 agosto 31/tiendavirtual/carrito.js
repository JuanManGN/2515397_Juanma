
class Carrito {
    constructor (cliente) {
        this._id_cuenta = cliente._id_cuenta
        this.productos = []
        
    }
    agregarproducto (producto,inventario){
        if (inventario._cantidad>0) {
            this.productos.push(producto)
            inventario._cantidad+=-1
        } else {
            console.log('el producto no esta disponible')
            
        }
        
    }
    get mostrarlista(){
        console.log(this.productos)
    }
    confirmacion(){
        return this.productos
    }
    quitarproducto(producto){}
}

module.exports = Carrito