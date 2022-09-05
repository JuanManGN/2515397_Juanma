/*Determinar cuales y cuantos números perfectos hay entre 1 y
1000? */
var n = 1,
    c = 0
console.log(n);
for (i = 1 ; i <= 1000 ; n++) {
    while (i<n) {
        d = n % i
        i += 1
        if (d == 0) {
            c = c + i
            console.log(c)
        }
    if (c==n) {
        console.log (n+' es un numero perfecto')
    } else {
        console.log (n+' no es un numero perfecto')
    }
    }
    
}

    
    