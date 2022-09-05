/*Escribe un programa que pida tres números y que escriba si son los tres
iguales, si hay dos iguales o si son los tres distintos*/ 
var n1 =Math.round(Math.random()*20)
var n3 =Math.round(Math.random()*20)
var n2 =Math.round(Math.random()*20)
console.log(n1+" "+n2+" "+n3)
if (n1==n2) {
    if (n1==n3) {
        console.log('los tres numeros son iguales')
    }
    else {
        console.log('solo hay dos numeros iguales ya que '+n3+' no es igual a '+n1+', '+n2)
    }
}
else {
    if (n2==n3) {
        console.log('solo hay dos numeros iguales ya que '+n1+' no es igual a '+n3+', '+n2)
    }
    else {
       if (n3==n1) {
        console.log('solo hay dos numeros iguales ya que '+n2+' no es igual a '+n1+', '+n3)
       }
       else {
        console.log('los tres numeros son distintos')
       }
    }
}