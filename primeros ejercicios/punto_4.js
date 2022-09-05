//punto 4
//Resolver la formula cuadratica generando a, b y c aleatoriamente. Defina ud un límite para las variables, por ejemplo de 0 a 100

var a = Math.round(Math.random() * 100);
var b = Math.round(Math.random() * 100);
var c = Math.round(Math.random() * 100);
console.log(a + " " + b + " " + c)
var bb = b ** 2
var ac = (4 * a) * c
var aa = 2 * a
var raiz = bb - ac
if (raiz < 0) {
    var raiz = raiz * -1
    var i = "i"
    var raiz = Math.sqrt(raiz)
    var b = b / (2 * a)
    var raiz = raiz / (2 * a)
    var x1 = aa + raiz
    var x2 = aa - raiz
    console.log("los resultados son: \nx1= " + x1 + " + " + i + "\n x2= " + x2 + " - " + i)
} else {
    var raiz = Math.sqrt(raiz)
    var x1 = (b + raiz) / aa
    var x2 = (b - raiz) / aa
    console.log("los resultados son: \nx1= " + x1 + "\n x2= " + x2)
}