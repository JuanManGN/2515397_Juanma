// 1 Determinar los divisores de un número introducido por teclado 
function divisores(n) {
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