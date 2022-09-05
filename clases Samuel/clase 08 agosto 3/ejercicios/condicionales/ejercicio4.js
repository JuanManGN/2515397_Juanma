/*Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores
*/ 
var n = Math.round(Math.random()*10)
console.log(n)
if (n>=9) {
    console.log('sobresaliente')
}
else {
    if(n>=7) {
        console.log('bueno')
    }
    else {
        if (n>=5) {
            console.log('suficiente')
        }
        else {
            if (n>=3) {
                console.log('deficiente')
            }
            else {
                console.log('muy deficiente')
            }
        }
    }
}