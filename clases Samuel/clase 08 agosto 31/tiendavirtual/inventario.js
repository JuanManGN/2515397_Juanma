class Inventario  {
    constructor(producto,cantidad ) {
        this.id_producto= producto._id_producto
        this.nombre= producto.nombre
        this._cantidad=cantidad
        
    }
    añadirproducto(cantidad){
        this._cantidad+=cantidad
    }
    restarproducto(cantidad){
        this._cantidad+=-cantidad
    }
    
}

module.exports = Inventario