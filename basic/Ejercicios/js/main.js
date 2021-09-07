/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/
// let palabra = "kodemia"

// let palabrasep = [...palabra]
// let palabrarev = palabrasep.reverse()
// let resultado = palabrarev.join('')
// console.log(resultado)

/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"
*/

let str = "kodemia"

let long = str.length

let result =""

for (let index = 0; index < long; index++) {
    if (index % 2 === 0){
         result += str.charAt(index).toLocaleUpperCase()
    } else {
        result += str.charAt(index).toLocaleLowerCase()
    }
}
console.log(result)

// while (index < long) {
//     if (index % 2 === 0){
//        result = result + str.charAt(index).toLocaleUpperCase()
//     } else {
//        result = result + str.charAt(index).toLocaleLowerCase()
//     }
//     index ++
// }





/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/
