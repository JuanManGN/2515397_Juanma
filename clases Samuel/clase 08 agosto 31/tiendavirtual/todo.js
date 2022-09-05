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
class proveedor{
    constructor (direccion,nombre,producto) {
        this._direccion= direccion
        this._nombre= nombre
        this.producto = producto
    }
}
class Cliente {
    constructor (nombre,direccion,correo,telefono) {
        this._nombre = nombre
        this._direccion = direccion
        this._correo = correo
        this._telefono=telefono
        
    }
}


class Empresa extends Cliente {
    constructor (nombre,direccion,correo,telefono,rut) {
        super(nombre,direccion,correo,telefono)
        this._rut = rut
    }
    
}

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

class Empaque {
    constructor(nroUnidades,preciounidad,capacidad){
        this._nroUnidades=nroUnidades;
        this._precioUnidad=preciounidad;
        this._capacidad=capacidad;
    }
    calcularPreciototal(){
        this._preciototal= this._precioUnidad*this._nroUnidades;
    }
    
}



class Pqr  {
    constructor (producto ) {
        this.nombreprodcuto= producto._nombre
        this._comentarios = []
    }
    
    añadircomentario(comentario){
        this._comentarios.push(comentario)
    }
    mostrarcomentarios(){
        console.log(this._comentarios)
    }
}

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
    //falta quitar producto 
}
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
class Factura {
    #tipoPago
    constructor(nro_factura, fecha, tipoPago) {
        this._nro_factura = nro_factura;
        this._fecha = fecha;
        this.#tipoPago = tipoPago;
    }
}

cliente1 = new Persona('hugo','calle 23 3 norte','hugoar@gmail.com','3147892345','12345','Mendez',25,'111111111111')
cliente2 = new Persona('paco','carrera 20 6-55','paquito@gmail.com','3203434232','34345324','perez',16,'22222222')
cliente3 = new Empresa('cervesacolombia S A','administracion@.colombia.co','3254654544','3434343232')
console.log(cliente1,cliente2,cliente3)

cervesa1 = new Producto('babaria','colombia',2000,3000,'26/02/2024',0.19,2342323,'300 ','ml','premium')
cervesa2 = new Producto('corona','colombia',2500,3100,'31/08/2023',0.19,2324344,'500','ml','generica','19281298')
cervesa3 = new Producto('poker','colombia',2500,3100,'31/08/2023',0.19,2324344,'300','ml','generica','2323233')

inventario1 = new Inventario (cervesa1,4)
inventario2 = new Inventario (cervesa2,1)
console.log('---------------',inventario1,'------------------')

carritocliente = new Carrito(cliente1)
carritocliente.agregarproducto(cervesa1,inventario1)
carritocliente.agregarproducto(cervesa2,inventario2)
carritocliente.agregarproducto(cervesa2,inventario2)//aqui muestra que no puede agregarlo ya que solo habia 1 disponible 
carritocliente.mostrarlista
console.log(carritocliente)

pedido1= new Pedido(carritocliente.confirmacion(),cliente1)//aqui se genera el pedido
console.log(pedido1)
pedido1.generarfactura()// aqui se genera la factura 
console.log(pedido1._factura)

comentarios = new Pqr(cervesa1)
comentarios.añadircomentario('me gusto mucho el producto lo comprare de nuevo ')
comentarios.añadircomentario('no llego el producto correctament tapado ')
comentarios.mostrarcomentarios()
//eval("pedido"+pedidos+"="+new Pedido(carritocliente.productos))
//console.log('/////////////////////////////////////////////////////',carritocliente.productos,'/////////////////////////////////////////////////////')
