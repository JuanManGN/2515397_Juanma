class Producto {
    constructor(nombre,determinacionorigen,preciolata,preciobotella,añovenc,iva,nit,capacidad,tipounidad,categoria,id_producto){
        this._id_producto= id_producto
        this.nombre = nombre;
        this._determinacionorigen = determinacionorigen;
        this._preciolata = preciolata;
        this._preciobotella = preciobotella;
        this._añovenc = añovenc;
        this._iva =iva;
        this._nit =nit;
        this._capacidad = capacidad;
        this._tipounidad = tipounidad;
        this._categoria = categoria;
    }
}

module.exports = Producto