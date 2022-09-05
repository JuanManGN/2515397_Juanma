//tareas 
/*genere una medida de temperatura en grados celcius de forma aleatoria y conviertala a fahrenheit, kelvin y rankine*/

var c = Math.round(Math.random() * 100)
console.log(c)

function c_a_f(c) {
    return F = Math.round(c * 1.8 + 32)
}

function c_a_k(c) {
    return K = Math.round(c + 273.15)
}

function c_a_r(c) {
    return R = Math.round((c + 273.15) * 9 / 5)
}

var q_ejercicio = Math.round(Math.random() * 2)
console.log(q_ejercicio)

if (q_ejercicio == 0) {
    c_a_f()
} else if (q_ejercicio == 1) {
    c_a_k()
} else {
    c_a_r()
}

/*resolver la formula cuadratica generando a,b y c aleatoriamente. defina ud un limite para las variables por ejemplo de 0 a 100*/

var a = Math.round(Math.random() * 100);
b = Math.round(Math.random() * 100);
c = Math.round(Math.random() * 100);
radicando = 0
console.log(a + " " + b + " " + c)

function belevado(b) {
    return bb = b ** 2
}

function axc(a, c) {
    return ac = (4 * a) * c
}

function ax2(a) {
    return aa = 2 * a
}

function riazc(radicando) {
    for (let i = 0; i < radicando; i++) {
        return radicando += 1

    }
}
riazc()
var raiz = (belevado(b)) - (axc(a, c))
if (raiz < 0) {
    var raiz = raiz * -1
    var i = "i"
    var raiz = Math.sqrt(raiz)
    var b = b / (ax2(a))
    var raiz = raiz / (ax2(a))
    var x1 = (ax2(a)) + raiz
    var x2 = (ax2(a)) - raiz
    console.log("los resultados son: \nx1 = " + x1 + " + " + i + "\nx2 = " + x2 + " - " + i)
} else {
    var raiz = Math.sqrt(raiz)
    var x1 = (b + raiz) / (ax2(a))
    var x2 = (b - raiz) / (ax2(a))
    console.log("los resultados son: \nx1 = " + x1 + "\nx2 = " + x2)
}