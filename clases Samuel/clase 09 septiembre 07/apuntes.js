//asincronismo
// Usando función anonima
/*console.log('A')
setTimeout(function() {
    console.log('B')
}, 10000)
console.log('C')
    /* Resultado del código anterior
     A
     C
     B  Despues de (1000 = 1 segundo) segundo*/
//Promesas*/
/*let x = 11
const p = new Promise((n, reject) => {
    if (x == 10) {
        n('La variable es igual a 10');
    } else {
        reject('La variable no es igual a 10');
    }
});
p.then(m => {
        console.log(m)
    }).catch(function(n) {
        console.log(n);
    })
    //promesas ej 2
let mensaje = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Este es el mensaje');
    }, 2000);
})

mensaje.then(m => {
        console.log(m)
    }).catch(function() {
        console.log('error');
    })
    //promesa ej 3
let n = 11
const c = new Promise((r1, r2) => { //se puede cambiar el nombre del resolve y el reject pero no se pueden tener mas de dos parametros
    if (n == 10) {
        r1('La variable es igual a 10');
    } else {
        r2('la varible no es igual a 10');
    }
});
c.then(m => {
        console.log(m)
    }).catch(function(n) {
        console.log(n);
    })
    //mesa q mas apluada
setTimeout(function() {
    for (let i = 0; i < 3; i++) {
        console.log('Mesa')
    }
}, 2000)

console.log('Prueba')
for (let i = 0; i < 2; i++) {
    setTimeout(function() { console.log('Mesa') }, 2000 * i)
}
for (let i = 0; i < 3; i++) {
    setTimeout(function() { console.log('Mesa que mas aplauda') }, 4000 * i)
}*/
//setintervlar

const repetir = setInterval(() => {
    console.log('han pasado dos segundos')
}, 2000);


setTimeout(() => {
    clearInterval(repetir);
    console.log('se acabo')
}, 7000)


//setclear
/*class animal {
    constructor(nombre) {
        this._nombre = nombre
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nombre) {
        return this._nombre = nombre
    }
    mensaje() {
        console.log('soy un mensaje')
    }
    clear () {
        this._nombre
    }
}
let objeto1 = new animal('Ratas');
console.log(objeto1);
console.log(objeto1);

// Create a new set using Set() constructor
let hola = new Set();

// Append new elements to the
// set using add() method
hola.add(2);  

// Print the modified set
console.log(hola);
console.log(hola.size);

// The clear() method will remove
// all elements from the set
hola.clear();

// This will return 0 as there
// are no elements present in the Set
console.log(hola.size);*/