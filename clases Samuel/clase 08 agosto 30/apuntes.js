class Autos {
    constructor(numerosm, marca, año, precio) {
        this.#numerosm = numerosm;
        this._merca = marca;
        this._año = año;
        this._precio = precio;
    }
    get numerosm() {
        return `el numero de serie es ${this._numerosm}`
    }

    get marca() {
        return `la marca es ${this._marca}`
    }
    get año() {
        return `el año es ${this._año}`
    }
    get precio() {
        return `el precio es ${this._precio}`
    }
    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
    }
    set numerosm(numerosm) {
        this._numerosm = numerosm;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set año(año) {
        this._año = año;
    }
    set precio(precio) {
        this._precio = precio;
    }
}
class Compactos extends Autos {
    constructor(numerosm, marca, año, precio) {
        super(numerosm, marca, año, precio)
        this._cpasajeros = cpasajeros
    }
    get cpasajeros() {
        return `la cantidad de pasajeros es ${this._cpasajeros}`
    }

}
class Delujo extends Autos {
    constructor(numerosm, marca, año, precio, cpasajeros) {
        super(numerosm, marca, año, precio)
        this._cpasajeros = cpasajeros
    }
    get cpasajeros() {
        return `la cantidad de pasajeros es ${this._cpasajeros}`
    }
    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
        console.log(this._cpasajeros)
    }
    set cpasajeros(cpasajeros) {
        this._cpasajeros = cpasajeros
    }

}

class Vagonetas extends Autos {
    constructor(numerosm, marca, año, precio, cpasajeros) {
        super(numerosm, marca, año, precio)
        this._cpasajeros = cpasajeros
    }
    get cpasajeros() {
        return `la cantidad de pasajeros es ${this._cpasajeros}`
    }
    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
        console.log(this._cpasajeros)
    }
    set cpasajeros(cpasajeros) {
        this._cpasajeros = cpasajeros
    }

}
class Camioneta extends Autos {
    constructor(numerosm, marca, año, precio, capacidadk, cejes, crodadas) {
        super(numerosm, marca, año, precio)
        this._capacidadk = capacidadk
        this._cejes = cejes
        this._crodadas = crodadas
    }
    get capacidadk() {
        return `la capacidad de kilos es de ${this._capacidadk}`
    }
    get cejes() {
        return `la cantidad de ejes es de ${this._cejes}`
    }
    get crodadas() {
        return `la cantidad de rodadas es de ${this._crodadas}`
    }
    imprimirtodo() {
        console.log(this._numerosm)
        console.log(this._marca)
        console.log(this._año)
        console.log(this._precio)
        console.log(this._capacidadk)
        console.log(this._cejes)
        console.log(this._crodadas)

    }
    set capacidadk(capacidadk) {
        this._cpasajeros = capacidadk
    }
    set cejes(cejes) {
        this._cpasajeros = cejes
    }
    set capacidadk(capacidadk) {
        this._capacidadk = capacidadk
    }
}

//mision tienfda ecomerce