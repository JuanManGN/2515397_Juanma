//nuevo operador ternario 
//sintaxis 
//condicion + ? + valor si es verdadero: valor si falso
var x = 10
x % 2 == 0 ? console.log('par') : console.log('impar')

/*Repaso tema funciones:
- el paquete Math que trae java son funciones preinstaladas
CONSIDERAR:
- cual es el problema que voy a resolver con la funcion
- plantear la funcion (analizar que entra y que sale de la funcion)
- desarrolo logico de la funcion
EJEMPLO:
determinar si un numero es primo*/
function primos(n) {
    var cont = 0
    for (let i = 0; i < n; i++) {
        n % i == 0 ? cont++ : cont = cont
    }
    return cont > 2 ? 'el valor ' + n + ' es primo' : 'el valor ' + n + ' no es primo'
}
console.log(primos(4))

/*escriba una funcion que lea una cadena de texto y diga cuantas vocales cuantas consonantes y 
cuantas q no son ni consonantes ni vocales */
const contar = palabra => {
    var vocales = 'aáeéiíoóuú',
        consonantes = 'hlqwrtypsdfghjklñzxcvbnm',
        cantidadVocales = 0,
        cantidadconsonantes = 0
    for (const l of palabra) {
        if (vocales.includes(l.toLowerCase())) {
            cantidadVocales++
        } else if (consonantes.includes(l.toLowerCase())) {
            cantidadconsonantes++
        }
    }
    return `cantidad de vocales: ${cantidadVocales}\ncantidad de consonantes: ${cantidadconsonantes}`;
};
console.log(contar('Alfonso Gonzales'))

//programacion enfocada en objetos
//literales 
let a = [] //esto es un arreglo
var o = {} //esto es un objeto
var persona = {
    nombre: 'pedro perez',
    id: 123456,
    datosc: () => {
        console.log(`${persona.nombre} ${persona.id}`)
    }
}
console.log(persona); //mostrar el objeto
console.log(persona.nombre); //mostrar una clave dentro del objeto
persona.datosc(); //mostrar una funcion dentro del objeto
persona.dirrecion = 'calle 15 sur'; //agregar otra clave
console.log(persona);
persona.nombre = 'Juan Ramirez'; //reescribir una clave
console.log(persona);
delete persona.dirrecion //eliminiar una clave
console.log(persona);


/*crear objetos para cuatro figuras toca hallales perimetro y area*/
var cuadrado = {
    tamañol: 20,
    areac: () => {
        console.log('el perimetro es ' + cuadrado.tamañol * cuadrado.tamañol)
    },
    perimetroc: () => {
        console.log('el area es ' + (cuadrado.tamañol + cuadrado.tamañol + cuadrado.tamañol + cuadrado.tamañol))
    }
}
console.log(cuadrado);
cuadrado.perimetroc();
cuadrado.areac();

var rectangulo = {
    base: 20,
    altura: 7,
    arear: () => {
        console.log('el perimetro es ' + rectangulo.base * rectangulo.altura)
    },
    perimetror: () => {
        console.log('el area es ' + (rectangulo.base + rectangulo.altura + rectangulo.base + rectangulo.altura))
    }
}
console.log(rectangulo);
rectangulo.perimetror();
rectangulo.arear();


var triangulo = {
    lado1: 16,
    lado2: 16,
    base: 12,
    altura: 15,
    perimetrot: () => {
        console.log('el perimetro es ' + (triangulo.lado1 + triangulo.lado2 + triangulo.base))
    },
    areat: () => {
        console.log('el area es ' + (triangulo.base * triangulo.altura) / 2)
    }
}
console.log(triangulo);
triangulo.perimetrot();
triangulo.areat();

var circuloci = {
    radio: 9,
    perimetroci: () => {
        console.log('el perimetro es ' + (2 * Math.PI) * circuloci.radio)
    },
    areaci: () => {
        console.log('el area es ' + (Math.PI * (circuloci.radio ** 2)))
    }
}
console.log(circuloci);
circuloci.perimetroci();
circuloci.areaci();

//saber si un objeto es un circulo 

const saberci = objeto => {
    if (objeto = objeto.radio) {
        return `es una circuferencia`
    } else {
        return `no es un circuferencia`
    }
}
console.log(saberci(circuloci))

//mision
/*terminar la funcion de circuferencia*/