//ejercicio uno callbacks
function receptora(cb1, cb2, parametro) {
    cb1()
    setTimeout(() => {
        console.log('Dentro de la funcion receptora')
    }, 0);
    cb2(parametro)
}

function funcionArgumento(parametro) {
    console.log(`${parametro} de la funcion argumento`);
}

receptora(() => console.log('funcion anonima'), funcionArgumento, 100)

//ejercicio dos callbacks
function trabajoArreglos(cb1, cb2) {
    let vec1 = [];
    setTimeout(() => {
        console.log(vec1)
    }, 2000);
    vec1 = cb1(vec1);
    console.log(cb2(vec1));
}

function llenarArreglo(vec) {
    for (let i = 0; i < 10; i++) {
        vec[i] = Math.round(Math.random() * 1000);
    }
    return vec
}

function sumarArreglo(vec) {
    let suma = 0;
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i]
    }
    return suma
}
trabajoArreglos(llenarArreglo, sumarArreglo)

//ejercicio funcion general, tiene dos callbacks. uno que cuenta letras mayusculas de un string y otro que cuenta minusculas. La cadena de texto se debe ingresar como parametro a la misma funcion general La funcion general imprime la cadena de texto en minuscula y en mayuscula. Tenga cuidado de no perder la conformacion original de la cadena.
function general(cb1, cb2, texto) {
    let textomi = texto.toLowerCase();
    let textoma = texto.toUpperCase();
    console.log(`el texto original es ${texto}\nen minuscula es ${textomi}\nen mayuscula es ${textoma}`)
    cb1(texto)
    cb2(texto)
}

function mayusculas(texto) {
    let contar = 0;
    var mayusculas = 'QWEÉRTYUÚIÍOÓPAÁSDFGHJKLÑZXCVBNM'
    for (let i = 0; i < mayusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (mayusculas[i] == texto[x]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de mayusculas ${contar}`)
}

function minusculas(texto) {
    let contar = 0;
    var minusculas = 'qwertyuiopasdfghjklñzxcvbnméíóáú'
    for (let i = 0; i < minusculas.length; i++) {
        for (let x = 0; x < texto.length; x++) {
            if (minusculas[i] == texto[x]) {
                contar = contar + 1
            }
        }
    }
    console.log(`el total de minusculas ${contar}`)
}

general(minusculas, mayusculas, 'Juan Ma')