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
const imprimirgeneral = (texto, cb1, cb2, cb3) => {
    let textomi = texto.toLowerCase();
    let textoma = texto.toUpperCase();
    setTimeout(() => {
        cb1(texto)
        cb2(texto)
        cb3(texto)
    }, 2000);
    return new Promise((resolve, reject) => {
        resolve(`el texto es ${texto}\nel texto en mayuscula ${textoma}\nel texto en minuscula ${textomi}`)
    })
}
imprimirgeneral('hola', mayusculas, minusculas, numeros)
    .then(res => {
        console.log(res)
    })
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

 
//ejercicio async await
function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('prueba ' + x);
        }, 2000);
    })
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words)
}
talk(2);
talk(4);
talk(8);

function saySomething(x) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('prueba ' + x);
        }, 2000);
    })
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words)
}
talk(2);
talk(4);
talk(8);

/*Práctica
1. Cree un valor global para un contador.
2. Cree una función que tome un argumento. Retorna el resultado de una nueva Promesa, configurando una función setTimeout() que contendrá la instancia de resolución.
3. Incremente el contador dentro de setTimeout(), agregando uno cada segundo. Resolver la Promesa con el valor de la ficha y el valor de la
variable que estaba en el argumento de la función.
4. Cree una función asíncrona que envíe a la consola el valor de el contador global y el valor del argumento de la función.
5. Cree una variable para capturar el valor de resolución devuelto de la espera función. Envíe ese resultado a la consola.
6. Cree un ciclo para iterar 10 veces, incrementando el valor e invocando el función asíncrona, pasando el valor de la variable de incremento como parámetro en la función
*/
let cont = 0;

function retorna(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            cont++;
            resolve(`el valor ingresado es ${x}\nel contador vale ${cont}.`)
        }, 1000);
    })
}
async function llamar(x) {
    console.log(`contador global ${cont}\nel valor ingresado ${x}.`)
    const capt = await retorna(x);
    console.log(capt)
}
for (let i = 0; i < 10; i++) {
    llamar(i);
}