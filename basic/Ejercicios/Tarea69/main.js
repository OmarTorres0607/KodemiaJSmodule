/*
Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false
*/

// let palabra = prompt("Ingrese una palabra")
// let long = palabra.length
// let vocales = "aeiou"

// for (let i = 0, i < long; i++) {
//  let min = palabra.toLocaleLowerCase

// }

/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/
let numero = parseInt(prompt("Ingrese un numero del 1 al 10"))
if (numero >= 1 && numero >= 10){
for (let i = 0; i <= numero; i++){
    let result = numero * i
    console.log(`${numero} X ${i} = ${result}`)
}
} else {
    parseInt(prompt("Ingrese un numero del 1 al 10"))
}

/*
Ejercicio 3:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/
// let num = ""
// do 
// {num = parseInt(prompt("Ingrese un numero entre 10 y 100"))
// } while(num < 10 && num > 100 )
// // do 
// // {num = parseInt(prompt("Ingrese un numero entre 10 y 100"))
// // } while(num > 100)

// for (let i = 0; i <= num; i++){
//     console.log(i)
// }

/*
Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/
let str = "1234"

let long = str.length

let result =""

for (let i = 0; i <= long; i++){
    result = str[i] + str[i++]         
    }
    console.log(result)

/*
/*
Ejercicio 5:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

// let str = "**********"

// let long = str.length

// let result =""

// for (let i = 0; i <= long; i++){
//     result += str.charAt(i)
//         console.log(result)
//     }

/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/
/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders
*/
/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/