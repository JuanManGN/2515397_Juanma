//ejercicio de ciclos 1
/*var x = Math.round(Math.random()*10+5)
console.log(x)
for (i=1; i<=x; i++) {
    var p =""
    for (j=0;j<i;j++){
        p=p+"*"
    }
    console.log(p)
}*/

//ejercicio de ciclos 2
/*var x = Math.round(Math.random()*10+5)
console.log(x)
for (i=1; i>x; i++) {
    var p =""
    for (j=15;j>i;j--){
        p="*"+p
    }
    console.log(p)
}*/
var x = 0
var p;
console.log(x)
for ( i= Math.round(Math.random()*10+5); i>= 1; i=-2) {
    for ( j= 0; j<x;j++) {
        var p =""
    }
    for (k= 0; k <= i; k++) {
        p=p+"*"
    }
    console.log(p)
}
console.log(x+""+p)
x++;



