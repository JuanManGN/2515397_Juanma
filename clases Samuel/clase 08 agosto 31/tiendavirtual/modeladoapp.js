const Cliente = require('./cliente')
const Persona = require('./persona')
const Empresa = require('./empresa')
const Producto = require('./producto')
const Inventario = require('./inventario')
const Carrito = require('./carrito')
const Pedido = require('./pedido')
const Factura = require('./factura')
const Pqr = require('./pqr')



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


module.exports = Cliente
