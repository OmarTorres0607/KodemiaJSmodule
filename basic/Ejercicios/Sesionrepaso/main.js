// Para todos los ejercicios generarlas con funciones donde puedan identificar si recibira o no parametros:

//1. Dado un string de palabras, devolver la palabra más larga.

// let comparador = () =>{

// let palabra1 = prompt("Ingrese primer palabra: ")

// let palabra2 = prompt("Ingrese segunda palabra: ")

// let result = palabra1.length > palabra2.length ? `La palabra ${palabra1} es mas larga` : `La palabra ${palabra2} es mas larga`

// return result
// }
// console.log(comparador())

// ----------------------------------------------------------------------

//2. Crear un programa que permita detectar si una frase finaliza con punto.

// let fraseini = prompt("Ingrese frase a analizar")

//     let puntofinal = (str) =>{
    
//         let punto = str.endsWith(".")

//         let resultado = punto === true ? "la frase termina en punto" : "la frase no termina en punto"

//         return(resultado)
//     }
// console.log(puntofinal(fraseini))

// -----------------------------------------------------------------------------------------------

// //3. Crear un programa que permita al usuario retornar el numero de coincideas de una palabra en una frase que el mismo usuario introduzca

// let fraseini = prompt ("Ingrese frase a analizar")

// let str = prompt("Que palabra desea buscar")

// let gugle = fraseini.count(str)

// // let coincidencias = gugle.length

// console.log(gugle)


//4. Crear un programa que permita al usuario extraer uns subcadena de una cadena dada.

//5. Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.

// let comparador = (palabra1, palabra2) =>{ let result = (palabra1.toLocaleLowerCase() == palabra2.toLocaleLowerCase()) ? `Ambas palabras son iguales` : `Ambas palabras son diferentes`}

// let palabra1 = prompt("Ingrese primer palabra: ")

// let palabra2 = prompt("Ingrese segunda palabra: ")

// console.log(comparador())

// --------------------------------------------------------------------------------------------------------------------

//6. Crear un programa que permita a una cadena de texto muestra el caracter '-' ebtre cada caracter de la cadena.

// let separador = () => { 
//     let frase = prompt("Ingrese frase deseada")
//     let splitter = frase.replaceAll("", "-")
//     let result = splitter.slice(1,-1)
//     return result
// }

// console.log(separador())

// ----------------------------------------------------------------------------------------------------------------------------

//7. Sabiendo que una cadena de texto contiene parentesis. Crear un programa qye me devuelva la cadena que se encuetra entre los parentesis.



//8. Realizar un programa que muestre una piramide del 1 al 10 de las siguiente formas:


// Forma 1:

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Forma 2:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

// let filas = ""

// let piramide = (n) =>{
//     let n = parseInt(prompt("Ingrese numero de filas deseadas"))
//     for (let i = 1; i <= n; i++) {
//         for (let x = 1; x <= i; x++) {
//         filas += i}

//         console.log(filas)
//     }
// }
// console.log(piramide())


//10. Solicitar al usuario un nombre por medio del promt e ingresarlo a una coleccion , validando que no se repita ningun nombre.

//11. Dado una coleccion de numeros. obtener el elemento Mayor, Menor, el Promedio y la Suma de los elementos.

//12. Solicitar al usuario por medio de un promt una cadena de numeros separados por algun caracter y que cada numero se agregue a una collecion de numeros.

//13. Dado un array de números, detarminar por cada elemento si es un multiplo de 4, 3, 5, 2.

//14. Crear un programa que dado un array de strings, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado.

//15. Crear un programa que dados los datos de 3 lados de un triangulo con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno.

//16. Crear un programa que genere un string con "n" caracteres aleatorios, con la unica condicion de que no haya caracteres repetidos en el string.



let dataArray = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]

    const getarrayobject = (arrayMentors) => {
        let newArrayMentors = []
        for (let i = 0; i < arrayMentors.length; i++) {
            console.log(arrayMentors[i])
            let name = arrayMentors[i][0]
            let lastName = arrayMentors[i][1]
            let mentorObject = {name, lastName}
            newArrayMentors.push(mentorObject)
        }
        return newArrayMentors
    }

    let result = getarrayobject(dataArray)
    console.log(result)

// /*
// arrayMentor = [
//     {
//         name: "Fernanda",
//         lastName: "Palacios"
//     },
//     {
//         name: "Alfred",
//         lastName: "Altamirano"
//     },
//     ...,
//     {...}
// ]
// */
// Contraer



