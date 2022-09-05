//datos compuestos 
let v=[],
    t=Math.round((Math.random()*20-10)+10)
console.log('valor de variable t: '+t)

for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
}
console.log(v)
console.log('tamaño vector: '+v.length)

for (let i = 0; i < v.length; i++) {
    if (v[i]%2==0) {
        console.log(v[i]+' es par')
    } else {
        console.log(v[i]+' es im19acvb par')
    }   
}
//guardar las raizes cuadradas del los numeros guardados en el vector
let r=[]
for (let i = 0; i < v.length; i++) {
    r[i]=Math.sqrt(v[i],2)
}
console.log(r)