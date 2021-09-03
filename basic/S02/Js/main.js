console.error("esto es un error")
console.warn("esto es un warning")

// Metodos interaccion
// alert("esto es un mensaje para los Koders!")
// let name = prompt("Ingresa tu nombre")

// console.log(name)

let operacion = 5 + (5 - 10) *3

console.log(operacion)

// Condicionales

let age = prompt("Ingresa tu edad")
// if(age >= 18) {
//     console.log("eres Mayor de edad")
// } else {
//     console.log("Eres menor de edad")
// }

// Rangos

// 0hrs a 5hrs - Dejenos DOrmir 
// 6hrs - 11hrs - Buenos dias
// 12hrs - 19hrs - Buenas tardes
// 20hrs - 23hrs - Buenas noches


let hora = 16

if(hora >= 0 && hora <=5){
    console.log("Dejame dormir")
} else if( hora >= 6 && hora <= 11){
    console.log("Buenos dias")
} else if( hora >= 12 && hora <=19){
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}

// Operadores ternarios


let EresMayor = age >= 18 ? "eres Mayor de edad" : "eres menor de edad"

// Switch

// Domingo - 0
// Lunes - 1
// Martes - 2
// Miercoles - 3
// Jueves - 4
// Viernes - 5
// Sabado - 6

let today = 4
switch(today) {
    case 0: 
        console.log("Domingo")
        break;
    case 1: 
        console.log("Lunes")
        break;
    case 2: 
        console.log("Martes")
        break;
    case 3: 
        console.log("Miercoles")
        break;
    case 4: 
        console.log("Jueves")
        break;
    case 5: 
        console.log("Viernes")
        break;
    case 6: 
        console.log("Sabado")
        break;
    default: 
        console.log("Dia Invalido")
        break;
}