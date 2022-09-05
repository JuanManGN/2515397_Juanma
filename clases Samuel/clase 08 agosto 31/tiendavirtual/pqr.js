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
module.exports = Pqr
