/*¿Cuáles y cuántos son los números primos comprendidos
entre 1 y 1000?*/
var x=1
var c =0
for (n=1; n<=10; n++) {
    while (x<n) {
        var d = n % x
        x = x + 1
        if (d==0) {
            c = c+1   
        } 
    }
    if (c==2) {
        console.log(n+" es primo")
    }
}
