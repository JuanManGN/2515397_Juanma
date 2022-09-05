//examen 

//llenar tres arreglos con numeros aleatorios el tamañano de lo arreglos estara entre min 5 y max 20 elementos 
var v1 = []
v2 = []
v3 = []
t1 = Math.round((Math.random() * 20 + 5) - 5)
t2 = Math.round((Math.random() * 20 + 5) - 5)
t3 = Math.round((Math.random() * 20 + 5) - 5)
p1 = 0
ip1 = 0
p2 = 0
ip2 = 0
p3 = 0
ip3 = 0
console.log(t1 + ' ' + t2 + ' ' + t3)
for (let i = 0; i < t1; i++) {
    v1[i] = Math.round(Math.random() * 100)
}
for (let i = 0; i < t2; i++) {
    v2[i] = Math.round(Math.random() * 100)
}
for (let i = 0; i < t3; i++) {
    v3[i] = Math.round(Math.random() * 100)
}
console.log('Arreglo 1 [' + v1 + ']\nArreglo 2 [' + v2 + ']\nArreglo 3 [' + v3 + ']')
    //cual de los tres arreglos es el mas grande
if (v1.length > v2.length) {
    if (v1.length > v3.length) {
        console.log('el arreglo v1 tiene mayor cantidad de indices con un total de: ' + v1.length)
    }
}
if (v2.length > v1.length) {
    if (v2.length > v3.length) {
        console.log('el arreglo v2 tiene mayor cantidad de indices con un total de: ' + v2.length)
    }
}
if (v3.length > v2.length) {
    if (v3.length > v1.length) {
        console.log('el arreglo v3 tiene mayor cantidad de indices con un total de: ' + v1.length)
    }
}
//de cada uno digo que cantidad de numeros pares y numeros inpares tiene
for (let i = 0; i < v1.length; i++) {
    if (v1[i] % 2 == 0) {
        p1 = p1 + 1
    } else {
        ip1 = ip1 + 1
    }
}
for (let i = 0; i < v2.length; i++) {
    if (v2[i] % 2 == 0) {
        p2 = p2 + 1
    } else {
        ip2 = ip2 + 1
    }
}
for (let i = 0; i < v3.length; i++) {
    if (v1[i] % 2 == 0) {
        p3 = p3 + 1
    } else {
        ip3 = ip3 + 1
    }
}
console.log('el arreglo 1 tiene: \npares:' + p1 + '\nimpares:' + ip1 + '\nel arreglo 2 tiene: \npares:' + p2 + '\nimpares:' + ip2 + '\nel arreglo 3 tiene: \npares:' + p3 + '\nimpares:' + ip3)

//rellenar los arreglos mas pequeños con los datos del arreglos mas grandes tiene de mas 

console.log(v1.length)
console.log(v2.length)
console.log(v3.length)
let p = v2.length
while (v1.length > v2.length) {
    v2[v2.length] = v1[v2.length]
}
while (v1.length > v3.length) {
    v3[v3.length] = v1[v3.length]
}
while (v2.length > v1.length) {
    v1[v1.length] = v2[v1.length]
}
while (v2.length > v3.length) {
    v3[v3.length] = v2[v3.length]
}
while (v3.length > v1.length) {
    v1[v1.length] = v3[v1.length]
}
while (v3.length > v2.length) {
    v2[v2.length] = v3[v2.length]
}

console.log('el arreglo 1 quedo con un total de ' + v1.length)
console.log('el arreglo 2 quedo con un total de ' + v2.length)
console.log('el arreglo 3 quedo con un total de ' + v3.length)
console.log('el arreglo 1 quedo con un total de [' + v1 + ']')
console.log('el arreglo 2 quedo con un total de [' + v2 + ']')
console.log('el arreglo 3 quedo con un total de [' + v3 + ']')