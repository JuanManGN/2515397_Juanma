//sisntaxis
/*new Promise((resolve, reject) => {
    
})*/
//Promesas
let x = 10
const p = new Promise((n, reject) => {
    if (x == 10) {
        n('La variable es igual a 10');
    } else {
        reject('La variable no es igual a 10');
    }
});
p.then( (n)=> {
        console.log(n)
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
function crearnumero (cb) {
    let n = Math.round(Math.random()*21)
    cb(n)
}
function seramayor (n) {
    return new Promise((resolve,reject) => { 
    if (n > 10) {
        resolve('La variable es mayor a 10 ya q es '+n);
    } else {
        reject('la varible es menor a 10 ya q es '+n);
    }
})};
crearnumero(seramayor)
    .then((resolve) => {
        console.log(resolve)
    }).catch(function() {
        console.log();
})

//ejemplos profesor
function base(){
    return new Promise ((resolve,reject)=>{
        resolve();
        setTimeout(() => {
            console.log('linea de codigo dentro de la funcion promesa');
        }, 1000);
    })
}
const miFuncion = new Promise ((resolve,reject)=>{
    resolve();
    setTimeout(() => {
        console.log('linea de codigo dentro de la funcion promesa pero const');
    }, 1000);
})
base()
    .then(()=> {
        console.log();
    })
    .then(auxiliar)

    function auxiliar () {
        console.log()
};
miFuncion.then (()=> console.log('en el then pero const'))

//ejercicio samuel 2
function base(){
    return new Promise ((resolve,reject)=>{
        if (true) {
        resolve();
        setTimeout(() => {
            console.log('linea de codigo dentro de la funcion promesa');
        }, 1000);
    }else{
        reject()
    }
    });
}
base()
    .then(()=> {
        console.log('en el .then');
    })
    .then(auxiliar)
    function auxiliar () {
        console.log('Funcion auxiliar')
    
};
miFuncion.then (()=> console.log('en el .then pero const'))

//ejercios sumar arreglo
function trabajoArreglos(cb1, cb2) {
    let vec1 = [];
    setTimeout(() => {
        console.log(vec1)
    }, 2000);
    vec1 = cb1(vec1);
    console.log(cb2(vec1));
}

function llenarArreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i] = Math.round(Math.random() * 1000);
    }
    return vec
}

function sumarArreglo(vec) {
    let suma = 0;
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i]
    }
    return suma
}
trabajoArreglos(llenarArreglo, sumarArreglo)

//ejercicios texto
function general(cb1, cb2, cb3, texto) {
    let textomi = texto.toLowerCase();
    let textoma = texto.toUpperCase();
    console.log(`el texto original es ${texto}\nen minuscula es ${textomi}\nen mayuscula es ${textoma}`)
    setTimeout(() => {
        cb1(texto)
    }, 2000);
    setTimeout(() => {
        cb2(texto)
    }, 3000);
    setTimeout(() => {
        cb3(texto)
    }, 4000);
}

function mayusculas(texto) {
    let contar = 0;
    var mayusculas = 'QWEÉRTYUÚIÍOÓPAÁSDFGHJKLÑZXCVBNM'
    for (let i = 0; i < mayusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (mayusculas[i] == texto[x]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de mayusculas ${contar}`)
}

function minusculas(texto) {
    let contar = 0;
    var minusculas = 'qwertyuiopasdfghjklñzxcvbnméíóáú'
    for (let i = 0; i < minusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (minusculas[i] == texto[x]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de minusculas ${contar}`)
}

function numeros(texto) {
    let contar = 0;
    var numeros = '1234567890'
    for (let i = 0; i < numeros.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (numeros[i] == texto[x]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de numeros es ${contar}`)
}

general(minusculas, mayusculas, numeros, 'Pepito tiene 8 manzanas y 9 mangos XD en conclusion pepito es envidioso y no da')

//leer libro tema promesas async y await
//tambien los dos ejercicios