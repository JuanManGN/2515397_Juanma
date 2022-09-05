//Determinar si un numero es o no es primo
var n =Math.round(Math.random()*20)
var c =0
console.log(n)
for (x=1; x<=n; x++) {
    var d = n % x
    if (d==0) {
        c = c+1
    }
}
if (c==2) {
    console.log(n+" es primo")
}

