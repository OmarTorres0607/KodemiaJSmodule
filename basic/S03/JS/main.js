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
// let nomcomplete = window.prompt ("Ingresa tu nombre completo")
// let contenom = nomcomplete.length
// let caracnom= `Su nombre tiene ${contenom} caracteres`
// console.log (caracnom)

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

// function conteovocal() {
//     let fullname = "Ana"
//     let nomvocal = fullname.match(/[aeiouAEIOU]/gi)
//     let contador = nomvocal.lenght
//     console.log(contador)
// }
// conteovocal()

// Ejercicio 4:
//     Del texto: 
//     "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
//     al estudiante que tiene a su lado"
//     - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
//         por la palabra "Koder", 
//     - y mostrar el mensaje de nuevo al usuario
// */

// let texto = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
// let koderchange = texto.replace("estudiante", "Koder")
// console.log(koderchange)
/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

function comparador (str1 , str2){
    let cont1 = str1.length
    console.log(cont1)
    let cont2 = str2.length
    console.log(cont2)
    // let maslargo = cont1 >= cont2 ? `el string ${str1} es mayor` : `el string ${str2} es mayor`
    if (cont1 > cont2) {
        console.log(`el string ${str1} es mayor`)
    } else {
        console.log(`el string ${str2} es mayor`)
    }
}
comparador("uno","cinco")

/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
