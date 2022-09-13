//ejercicios con set time out
console.log('hola')

setTimeout(() => {
    console.log('2 segundos')
}, 2000);

setTimeout(function() {
    console.log('4 segundos')
}, 4000);

function externa() {
    console.log('6 segundos')
}
setTimeout(externa, 6000);

const funcionext = function() {
    console.log('8 segundos')
}
setTimeout(funcionext, 8000);

//ejercicios con set interval y clear interval
setInterval(function() {
    console.log('1 segundos')
}, 1000);

const segundos = setInterval(() => {
    console.log('2 segundos')
}, 2000);

setTimeout(() => {
    clearInterval(segundos);
    console.log('fin')
}, 16000);

//escribe un programa que muestre un contador desde uno hasta 10 donde cada numero se muestre cada dos segundos
const cadadossegundos = function() {
    let n = 10;
    setInterval(() => {
        for (let i = 1; i < n; i++) {
            console.log(i)
        }
    }, 2000);
}
cadadossegundos()

const hola = function() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}
setTimeout(hola, 2000);

for (let i = 1; i < 11; i++) {
    setTimeout(() => {
        console.log(i);
    }, (i * 1000))
}

for (let i = 1; i < 11; i++) {
    setInterval(() => {
        console.log(i);
    }, (i * 1000))
}