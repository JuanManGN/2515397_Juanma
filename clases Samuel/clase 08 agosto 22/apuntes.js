//paso 1
var v=[]
function llenarv  (v) {
        t= (Math.round(Math.random()*25-5)+5)
    for(let i=0; i<t; i++){
        v[i]= (Math.round(Math.random()*30))
    }
return `el vector es ${v}`}
console.log(llenarv(v))

//paso 2
var v2 = []
const llenarv2 = (v,v2) => {
    for (var i = 0; i < v.length; i++) {
      for (let j = i + 1; j < v.length; j++) {
        if (v[i] > v[j]) (
        a =  v[i],
        v[i] = v[j],
        v[j] = a
        )
      }
    }
    if (v.length%2==0) {
        Mediana=Math.round((v.length)/2)
    } else {
        Mediana=Math.round((v.length+1)/2)
    }
    
    for(let i=0; i<v.length; i++){
        v2[i]= v[i] - Mediana
    }
    return `el vector es v ${v}\ny el v2 es ${v2}\nla mediana es ${Mediana}`
    }
    console.log (llenarv2(v,v2))
console.log(v2)
console.log(Mediana)

//paso 3 
var d = []
const diferencias = (v,m,d)  => {
    
    for(let i= 0; i<v.length; i++){
        if (v[i] >= m) {
            d[i] = v[i] - m
        } else {d[i] = v[i] + m}
        
    } return d
}
console.log (diferencias(v2,Mediana,d))
for(let i= 0; i<v.length; i++){
    if (v2[i] > Mediana) {
        console.log ("le sobra "+d[i]+" a v["+v2[i]+"]")
    } else {console.log ("le falta "+d[i]+" a v["+v2[i]+"]")}}