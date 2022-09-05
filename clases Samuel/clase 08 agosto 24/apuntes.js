//continucacion 
/*objetos estados y comportamieto*/
//clases
//var x = 20; // las variables tienen solo estados
class animale {
    xcv () {} //funcion normal dentro de clase no es necesario anotar el termino function
}
class animal {
     //si le dejamos el interior vacio hace un constructor automaticamente
     //un metodo y una funcion es lo mismo solo que dentro de una clase se le dice metodo
    constructor (nombre) {
        this._nombre=nombre
    }
    //tipos de get
    /*camell case (separar palabras)
    getNombre() {
        return this.nombre
    }*/
    get nombre() {
        return this._nombre
    }
    //tipos de set
    /*setNombre (nombre) {
        return this.nombre=nombre
    }*/
    set nombre(nombre) {
        return this._nombre=nombre
    }
    //los otros metodos no se activan automaticamente solo el constructor
    mensaje () {
        console.log('soy un mensaje')
    }
}
var objeto1= new animal ();
objeto1.mensaje();
console.log(typeof(objeto1))
//objeto1.setNombre('liebre)
objeto1.nombre='Conejo domestico'
//console.log(objeto1.getnombre())
console.log(objeto1.nombre)

/*function suma (num1,num2) {
    return num1+num2
}*/

//suma(100,200)
//suma(onjeto1,"sirve?")

//nueva clase

class Numeros1 {
    constructor (vector){
        this._vector=vector; //usamos this para que las variables no c repitan y podamos crear varias variables
    }
    llenarVector (tam) {
        for (let i = 0; i < tam; i++) {
            this._vector[i]=Math.round(Math.random()*100)
        }
    }
    get vector(){
        return this._vector;
    }
}

let vec1 =[]
let ob1=new Numeros1 (vec1)
ob1.llenarVector(8)
console.log(ob1.vector);


//mision
//1. escriba metodos para suma, promedio, mayor, menor
class Numeros {
    constructor (vector){
        this._vector=vector;
        this._suma = 0;
        this._promedio = 0;
        this._max = 0;
        this._min = 0;
    }
    llenarVector (tam) {
        for (let i = 0; i < tam; i++) {
            this._vector[i]=Math.round(Math.random()*100)
        }
    }
    sumaVector () {
        for (let j = 0; j < this._vector.length; j++) {
            this._suma += this._vector[j] 
        }
    }
    promedioVector () {
        this._promedio = this._suma / this._vector.length;
    }
    mayorVector () {
        for (let i = 0; i < this._vector.length; i++) {
            for (let j = i + 1; j < this._vector.length; j++) {
                if (this._vector[i]<this._vector[j]) {
                    this._max=this._vector[j]
                }
            }
        }
    }
    menorVector (){
        for (let i = 0; i < this._vector.length; i++) {
            for (let j = i + 1; j < this._vector.length; j++) {
                if (this._vector[i]>this._vector[j]) {
                    this._min=this._vector[j]
                }
            }
        }
    }
    get vector(){
        return `el vector es [${this._vector}]`;
    }
    get suma(){
        return `la suma del vector es ${this._suma}`;
    }
    get promedio(){
        return `el promedio es ${this._promedio}`;
    }
    get mayor (){
        return `el numero mayor ${this._max}`
    }
    get menor (){
        return `el numero menos es ${this._min}`
    }
}

let vec =[]
let ob=new Numeros (vec)
ob.llenarVector(10)
ob.sumaVector()
ob.promedioVector()
ob.mayorVector()
ob.menorVector()
console.log(ob.vector)
console.log(ob.suma)
console.log(ob.promedio)
console.log(ob.mayor)
console.log(ob.menor)

/*2. escriba una clase que represente un producto cormecial de cualqueir area
debe tener constructor, setters, getters y un metodo para calcular el valor despues de IVA*/
class Portatil {
    constructor (ram,almacenamiento,procesador,precio) {
        this._ram = ram;
        this._almacenamiento = almacenamiento;
        this._procesador = procesador;
        this._precio = precio;
        this._iva = 0;
    }
    portatilIVA () {
        this._iva = this._precio * 0.19
    }
    get iva () {
        return `el iva es ${this._iva}`
    }
}

let hp=new Portatil (16,512,'AMD_R5',2599000)
hp.portatilIVA()
console.log(hp.iva)

//leer de la 149 hasta la 161

function sumaVector1 () {
    vector = [23,3,5,7,10];
    suma = 0;
    for (let j = 0; j < vector.length; j++) {
        suma += vector[j] 
    }
    promedio = suma / vector.length;
    return `la suma es ${suma}\nel promedio es ${promedio}`
}
console.log(sumaVector1())

/* promedioVector () {
        for (let j = 0; j < this._vector.length; j++) {
            this._suma += this._vector[j] 
        }
        this._promedio = this._suma / this._vector.length;
    }*/