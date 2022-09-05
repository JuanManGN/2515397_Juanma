/*var x=Math.round(Math.random()*100);
console.log(x)
if (x%5==0) {
    console.log("si es multiplo")
    console.log("x*x")
}*/

/*var x=Math.round(Math.random()*100);
console.log(x)
if (x%2==0) {
    console.log("si es PAR")
} else {
    console.log("ES IMPAR")
}*/

//genere dos numeros aleatorio y diga si b es factor de a 
//Cuando un número natural se expresa como el producto de dos números naturales, esos otros números son factores del número original. Por ejemplo, 
//dos factores del número 12 son 3 y 4, porque 3 • 4 = 12

/*var x=Math.round(Math.random()*10);
console.log(x)
if (x>0) {
    console.log("es positivo")
} else if (x<0) {
    console.log("Es negatvo")
    }  else 
    console.log("es cero")*/

/*genere dos numeros aleatorios diga cual de los dos es mayor o si son iguales
var x=Math.round(Math.random()*10);
var y=Math.round(Math.random()*10);
console.log(x+ " y "+y)
if (x>y) {
    console.log("el mayor es x: "+x)
} else if (x<y) {
    console.log("el mayor es y: "+y)
    } else [
    console.log("son iguales")]*/

/*genere tres numeros aleatorios diga cual es el menor no utilice operadores logicos*/
var x=Math.round(Math.random()*10);
var y=Math.round(Math.random()*10);
var a=Math.round(Math.random()*10);
console.log(x+ " y "+y+" y "+a)
if (x>y) {
    if (y>a) {
        console.log("el menor es: a "+a)
    }
    if (y<a) {
        console.log("el menor es: y "+y)
    }
} else if (y>a) {
    if (a>x) {
        console.log("el menor es: x "+x)
    }
    if (a<x) {
        console.log("el menor es: a "+a)
    }
} else {
    if (x>a) {
        console.log("el menor es: a "+a)
    }
    if (x<a) {
        console.log("el menor es: x "+x)
    }
}

