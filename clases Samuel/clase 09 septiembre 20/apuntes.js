//promesas .then .catch
function mayusculas(texto) {
    let contarma = 0;
    var mayusculas = 'QWEÉRTYUÚIÍOÓPAÁSDFGHJKLÑZXCVBNM'
    for (let i = 0; i < mayusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (mayusculas[i] == texto[x]) {
                contarma = contarma + 1
            }
        }
    }
    console.log(`la cantidad de mayusculas es ${contarma}`)
}

function minusculas(texto) {
    let contarmi = 0;
    var minusculas = 'qwertyuiopasdfghjklñzxcvbnméíóáú'
    for (let i = 0; i < minusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (minusculas[i] == texto[x]) {
                contarmi = contarmi + 1
            }
        }
    }
    console.log(`la cantidad de minusculas es ${contarmi}`)
}

function numeros(texto) {
    let contarnu = 0;
    var numeros = '1234567890'
    for (let i = 0; i < numeros.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (numeros[i] == texto[x]) {
                contarnu = contarnu + 1
            }
        }
    }
    console.log(`la cantidad de numeros es ${contarnu}`)
}

const general = (texto, cb1, cb2, cb3) => {
    let textomi = texto.toLowerCase();
    let textoma = texto.toUpperCase();
    setTimeout(() => {
        cb1(texto)
        cb2(texto)
        cb3(texto)
    }, 2000);
    return new Promise((resolve) => {
        resolve(`el texto es ${texto}\nel texto en mayuscula ${textoma}\nel texto en minuscula ${textomi}`)
    })
}

async function imprimirgeneral(texto, cb1, cb2, cb3) {
    const imprimir = await general(texto, cb1, cb2, cb3)
    console.log(imprimir)
}

imprimirgeneral('Hola',mayusculas,minusculas,numeros)

//ejercios sumar arreglo
function llenarArreglo(vec, t) {
    for (let i = 0; i < t; i++) {
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

function trabajoArreglos(cb1, cb2, t) {
    let vec1 = [];
    setTimeout(() => {
        console.log(vec1)
    }, 2000);
    console.log(cb1(vec1, t));
    console.log(new Promise((resolve, reject) => {
        resolve(cb2(vec1));
    }))
}
