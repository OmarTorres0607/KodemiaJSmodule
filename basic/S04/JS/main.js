/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/

// <--------------Proceso-------------->
// 1. solicitar texto a usuario
// 2. almacenar en una variable = texto
// 3.solicitar la pallabra a buscar
// 4. almacenar entrada una
// 5. cambiar frase a minusculas
// 5. hacer conteo de palabra solicitada en frase 
// 6. mostrar coincidencias

// let frase = prompt("Ingrese frase solicitada")
// let palabra = prompt("Ingrese palabra que desea buscar")

// function gugul (frase, palabra) {
//     let fraseminus = frase.toLocaleLowerCase()
//     let banderas = 'gi'
//     let palabraclave = new RegExp(`${palabra}`, banderas)
    
//     let numeroPalabras = fraseminus.match(palabraclave).length;    
//     let resultado=`La palabra ${palabra} se repitio ${numeroPalabras} veces, ${frase}` 
//     return resultado
// }
//     console.log(gugul(frase, palabra))
/*
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/
// 

let op =  prompt("Seleccione operacion deseada: suma, resta, multiplicacion, division")
let num1 = parseInt(prompt("Ingrese primer valor para operacion"))
let num2 = parseInt(prompt("Ingrese segundo valor para operacion"))

function operando(op, num1, num2){
    let result
    switch(op){
        case "suma": 
            result = num1 + num2
        break;
        case "resta": 
            result = num1 - num2
        break;
        case "multiplicacion": 
            result = num1 * num2
        break;
        case "division": 
            result = num1 / num2
        break;
        default: 
            alert("operacion invalida")
    }
    return `El resultado de la ${op} de los numeros ${num1} y ${num2} es ${result}`;
}

console.log(operando(op, num1, num2))
