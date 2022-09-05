//Los objetos son una estructura de datos bastante usada en el lenguaje, de hecho, considero que es la más importante 
//y que muchas veces no llegamos a comprender del todo
let perro = {
    nombre: "Scott",
    color: "Cafe",
    edad: 5,
    macho: true
};
console.log(perro)
console.log(perro.nombre)

//añadir columnas
perro.tamaño = "Grande"
console.log(perro)

//reescribir dato
perro.edad = 8;
console.log(perro);

//eliminar columnas
delete perro.color;
console.log(perro);

//añadiendo fuction
let perro1 = {
    nombre: "Zeus",
    color: "Blanco",
    edad: 3,
    macho: true,
    ladrar: function() {
        return ('no le gusta ladrar')
    }
};
console.log(perro1)
perro1.ladrar()

console.log('buscar platzy y u demi\nrevisar temario de samuel')

//del libro leer el tema de arreglos (48-59)
//traer en una hoja el nombre de la competencia y de los resultados del trimestres