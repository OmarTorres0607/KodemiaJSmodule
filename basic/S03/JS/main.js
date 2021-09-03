// // String
// // Dato primario

// let nombre = "Omar"
// let apellido = 'Torres'
// let saludo = new String("Hola Amigos")

// // Concatenar

// // let nombreCompleto = nombre + " " + apellido
// // console.log(nombreCompleto)

// // Template String

// let nuevosaludo = `Hola mi nombre es ${nombre} ${apellido}`
// console.log(nuevosaludo)

// // primitive wrapper object

// let somestring = "Hola a todos"
// console.log(somestring.length)

// // Funciones

// // Metodo tradicional
// let numone = 10
// let numtwo = 20

// // let suma = numone + numtwo

// // console.log(suma)

// // Definicion de la funcion

// function sumadenumeros (numone, numtwo) {

//     let suma = numone + numtwo

//     console.log(suma)
// }
// sumadenumeros(200 , 500)
// sumadenumeros(300 , 800)

// function mayorque (num1, num2) {
//     let resultado = num1 >= num2 ? "el primer numero es mayor" : "el segundo numero es mayor"
//     return resultado
// }

// ejercicios

// // ejercicio 1
// // Solicitar al usuario nombre y apellido
// regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas 
// input nombre = "Omar" 
// input apellido = "Torres Angeles"
// Output ; "omar TORRES ANGELES"

// let nombre = window.prompt("ingresa tu Nombre(s)")
// let apellido = window.prompt("ingresa tus apellidos")

// let nommin = nombre.toLocaleLowerCase()
// let apemay = apellido.toLocaleUpperCase()

// let nomcompleto = `Bienvenido ${nommin} ${apemay}`
// console.log (nomcompleto)

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
let nomcomplete = window.prompt ("Ingresa tu nombre completo")
let contenom = nomcomplete.length
let caracnom= `Su nombre tiene ${contenom} caracteres`
console.log (caracnom)

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/
