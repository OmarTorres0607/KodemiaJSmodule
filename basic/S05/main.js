/*
Ejercicio 1:
Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.
Ejemplo:
input   
   - Emi de Leon
   - Elias Herrera
   - Armando Rios
output: 
    koder 1: Emi de Leon
    koder 2: Elias Herrera
    koder 3: Armando Rios
*/
// let arraycoders = []
// let koderlong = arraycoders.length

// function kodename(){
// //     for (let i = 0, i < 0 && i > 5, i++){
// //         prompt("Ingresa nombre completo de Koder")

// //     }
// //     for (let i = 0; i < koderlong; i++) {
// //     return (`koder ${i++} ${arraycoders[i]}`)
// // }
// // }
// // console.log(kodename())

// const arrayKoders = [
//     "Fanny Alvarez",
//     "Elias Herrera", 
//     "Kraken Perez",
//     "Clau Rodriguez",
// ]
// let kodlengthen = arrayKoders.length
// // Funcion para ingresar nuevo Koder
// function addKoder (){
//     let koder = prompt("Agrega el nombre del Koder")
//     arrayKoders.push(koder)
// }
// // Funcion para imprimir el nombre de los Koders
// function printKoders(){
//     for( let i = 0; i < kodlengthen; i++ ){
//         console.log(`Koder ${i+1} : ${arrayKoders[i]}`)
//     }
// }
// // Funcion para separar nombres y apellidos
// function Kodersinitials () {
//     let arraykoderswithinitials = []
//     for (let i = 0;i < arrayKoders.length;i++) {
//         console.log(arrayKoders[i])
//         let arrayWords = arrayKoders[i].split(" ")
//         let initials = getInitial(arrayWords)
//         arraykoderswithinitials.push(nameComplete)
//     }
//     printKoders(arraykoderswithinitials)
// }
// function getInitial(wordsarray) {
//     let initials = ""
//     for (let i = 0; i < wordsarray.length; i++) {
//         initials += wordsarray[i].charAt(0).toLocaleUpperCase()+"."
//     }
//     return initials
// }


// -------------------Arrow Functions --------------------------------
// ---Previo---
// function suma (a, b){
//     return a + b
// }
// let resultsuma = suma(3,5)
// console.log(resultsuma)

// // // ---Con Arrow---
// // const resta = (a,b) => {
// //     return a -b
// // }

// // let resultresta = resta(10,7)
// // console.log(resultresta)
// // console.log(resta(8,6))

// const arrayKoders = [
//     "Fanny Alvarez",
//     "Elias Herrera", 
//     "Kraken Perez",
//     "Clau Rodriguez"
// ]

// const splitKoders = (array) => {
//     let splitnames = []
//     for(let i = 0; i < array.length; i++){
//         splitnames.push(array[i].split(" "))
//     }
//     return splitnames
// }
// let somearray = splitKoders(arrayKoders)

// console.log(somearray)


// // Si solo recibe un parametro, podemos omitir los parentesis

// const printKoders = array => {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }

// Cuando recibimos 2 o mas parametros es necesario agregar los parentesis

// const multiplicacion = (a,b) => {
//     return a * b
// }

const multiplicacion = (a,b) => a * b

console.log(multiplicacion(5,10))