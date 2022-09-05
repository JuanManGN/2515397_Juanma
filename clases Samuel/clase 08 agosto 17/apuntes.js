//funciones
//determinar numeros perfecto
/*function perfecto(num) {
    let suma = 0
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            suma += i
        }
    }
    if (suma == num) {
        return `${num} es perfecto`
    } else {
        return `${num} no es perfecto`
    }
}
console.log(perfecto(31))*/

//triangulos escriba una funcion que dando los tres lados de un trangulo diga cual es 
function triangulos(a, b, c) {
    if ((a == b) && (c == b)) {
        return `son iguales es un triangulo equilatero`
    } else if ((a != b) && (c != b)) {
        return `no son iguales es un triangulo escaleno`
    } else
        return `no todos son iguales es un triangulo isoceles`

}
console.log(triangulos(27, 28, 28))

//teorema de pitagoras
function pitagoras(a, b) {
    let c = Math.sqrt((a ** 2) + (b ** 2))
    return `la hipotenusa es ${c}`
}
console.log(pitagoras(6, 8))

//funciones anonimas
//no tienen nombre
const mifuncion = function(a, b) {
    let c = Math.sqrt((a ** 2) + (b ** 2))
    return `la hipotenusa es ${c}`
}
console.log(mifuncion(6, 8))

//funciones flecha
//si no tiene parametros o mas de uno ponemos parentesis
const saludar = () => {
    return `Hola querido soacha`
}
console.log(saludar())

//si tenemos solo un parametro podemos obviar los parentesis
const saludar1 = nombre => {
    return `Hola ${nombre} bienvenido a soacha`
}
console.log(saludar1('Juan'))

//si tenemos solo una linea de codigo podemos obviar los corchetes
const saludar2 = nombre => `Hola ${nombre} bienvenido a soacha`

console.log(saludar2('Juan'))

// 1 Determinar los divisores de un número introducido por teclado 
/*
const divisores = (n) => {
    let num = []
    for (i = 1; i <= n; i++) {
        d = n % i
        if (d == 0) {
            num.push(i)
        }
    }
    return `${num} son divisores de ${n}`
}
console.log(divisores(26))
*/
//2 Determinar si un numero es o no es primo
/*
const primos = (n) => {
    c = 0
    for (x = 1; x <= n; x++) {
        var d = n % x
        if (d == 0) {
            c = c + 1
        }
    }
    if (c == 2) {
        return `${n} es primo`
    } else {
        return `${n} no es primo`
    }
}
console.log(primos(32))*/