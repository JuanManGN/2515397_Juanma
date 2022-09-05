const Cliente = require('./cliente')

class Persona extends Cliente  {
    constructor (nombre,direccion,correo,telefono,nro_doc,apellidos,edad,id_cuenta) {
        super(nombre,direccion,correo,telefono)
        this._nro_doc=nro_doc
        this._apellidos=apellidos
        this._edad = edad
        this._id_cuenta=id_cuenta
    }
    mayoredad (){
        if (this._edad>=18) {
            this.mayor= true
        } else {
            this.mayor = false
        }
    }

}

module.exports = Persona
