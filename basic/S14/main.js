// let h1 = document.createElement("h1")
// let text = document.createTextNode("Hola Mundo")

// h1.appendChild(text)
// console.log(h1)

// document.body.appendChild(h1)

// let namesArray = ["Elias",
//                     "Paola",
//                     "Nancy",
//                     "Adolfo"
//                 ]

// let ul = document.createElement("ul")

// namesArray.forEach(name => {
//     let li = document.createElement("li")
//     let text = document.createTextNode(name)

//     li.appendChild(text)
//     ul.appendChild(li)
// })

// document.body.appendChild(ul)

// // // Ejercicio

// let mentorsArray = [
//     {
//         name: "Angel Resendiz",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//             {
//                 signature:  "CSS",
//                 score: 10
//             },
//             {
//                 signature:  "JS",
//                 score: 9
//             },
//         ]
//     },
//     {
//         name: "Elda Corona",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//             {
//                 signature:  "CSS",
//                 score: 9
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//         ]
//     },
//     {
//         name: "Alfred Altamirando",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 9
//             },
//             {
//                 signature:  "CSS",
//                 score: 10
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//         ]
//     },
//     {
//         name: "Tux Tuxtla",
//         scores: [
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//             {
//                 signature:  "CSS",
//                 score: 8
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//         ]
//     },
//     {
//         name: "Fernanda Palacios",
//         scores: [
//             {
//                 signature:  "CSS",
//                 score: 9
//             },
//             {
//                 signature:  "JS",
//                 score: 10
//             },
//             {
//                 signature:  "HTML",
//                 score: 10
//             },
//         ]
//     }
// ]

// let table = document.createElement("table")
// document.body.appendChild(table)
// let tr = document.createElement("tr")
// document.body.appendChild(tr)
// table.appendChild(tr)


// let titleArr = ["Mentor",
//                 "HTML",
//                 "CSS", 
//                 "JS",
//                 "Average"]

// // // creating all cells
// // for (var i = 0; i < 2; i++) {
// //     // creates a table row
// //     var tr = document.createElement("tr");

// // for (var j = 0; j < 2; j++) {
// //     // Create a <td> element and a text node, make the text
// //     // node the contents of the <td>, and put the <td> at
// //     // the end of the table row
// //     var cell = document.createElement("td");
// //     var cellText = document.createTextNode("cell in row "+i+", column "+j);
// //     cell.appendChild(cellText);
// //     row.appendChild(cell);
// //     }



// titleArr.forEach(titulo => {
//     let th = document.createElement("th")
//     let campo = document.createTextNode(titulo)

//     th.appendChild(campo)
//     tr.appendChild(th)
// })
// document.appendChild(tr)
// mentorsArray.forEach(nombre => {
//     let td = document.createElement ("td")
//     let mentorName = document.createTextNode({nombre.name})

// })





//                 let namesArray = ["Elias",
//                 "Paola",
//                 "Nancy",
//                 "Adolfo"
//             ]

// let ul = document.createElement("ul")

// namesArray.forEach(name => {
// let li = document.createElement("li")
// let text = document.createTextNode(name)

// li.appendChild(text)
// ul.appendChild(li)
// })

// document.body.appendChild(ul)

// mentorsArray.forEach(nombre => {
    
//     let th = document.createElement("th")
//     let text = document.createTextNode(nombre.name)

//     th.appendChild(text)
//     tr.appendChild(th)

// })

// document.body.appendChild(tr)
// /*
// - Obtener el score promedio de cada materia (HTML, CSS, JS)

// - Obtener el promedio indivual de cada mentor

// - Crear un array de string con la siguiente forma:
//   "Mi nombre es {name} y mi promedio es {promedio}"

// - Obtener la lista de mentores cuyo promedio sea mayor a 9.5

// */

// /*
// - Obtener el score promedio de cada materia (HTML, CSS, JS)

// html
// css
// js
// */


// const getAverageAsignatures = arrayMentors => {
//     let htmlAccum = 0
//     let cssAccum = 0
//     let jsAccum = 0
//     let mentorsQty = arrayMentors.length
//     arrayMentors.forEach((mentorObject, index) => {
//         // console.log(mentorObject)
//         mentorObject.scores.forEach((scoreMentor)=> {
//             // console.log(scoreMentor)
//             let signature = scoreMentor.signature
//             let score = scoreMentor.score

//             switch(signature) {
//                 case "HTML": 
//                     htmlAccum += score
//                     break;
//                 case "CSS":
//                     cssAccum += score
//                     break;
//                 case "JS":
//                     jsAccum += score
//                     break;
//                 default:
//                     console.log("Asignatura no encontrada")
//             }

//         })
//     })

//     let avgHtml = htmlAccum / mentorsQty
//     let avgCss = cssAccum / mentorsQty
//     let avgJs = jsAccum / mentorsQty

//     let objectAvg = { avgHtml, avgCss, avgJs}
//     return objectAvg
// }

// //invocar
// let avgSignatures = getAverageAsignatures(mentorsArray)
// console.log(avgSignatures)

// /*
// - Obtener el promedio indivual de cada mentor
// */

// const getAvgForMentor = scoresArray => {
//     let accumMentor = 0
//     let scoresQty = scoresArray.length
//     scoresArray.forEach((scoreMentor)=> {
//         let valueScore = scoreMentor.score
//         accumMentor += valueScore
//     })
//     let avgMentor = accumMentor / scoresQty
//     return avgMentor
// }

// /*
// arrayAverage = [
//     { 
//         name: "",
//         average: 9.0
//     }
// ]

// */


// const getAvgMentors = arrayMentors => {
//     let arrayAverageMentors = []
//     arrayMentors.forEach((mentor)=> {
//         let avg = getAvgForMentor(mentor.scores)
//         let objectMentor = { 
//             name: mentor.name, 
//             average: avg
//         }
//         arrayAverageMentors.push(objectMentor)
//     })
//     return arrayAverageMentors
// }

// let avgMentors = getAvgMentors(mentorsArray)

// console.log(avgMentors)

// /*
// - Crear un array de string con la siguiente forma:
//   "Mi nombre es {name} y mi promedio es {promedio}"
// */


// /*
// arrayAverage = [
//     { 
//         name: "",
//         average: 9.0
//     }
// ]

// */
// let arrayStringsMentors = []

// avgMentors.forEach((mentor)=> {
//     // destructuring
//     let { name, average,  } = mentor
//     arrayStringsMentors.push(`Mi nombre es ${name} y mi promedio es ${average}`)
// })
// console.log(arrayStringsMentors)

// // let arrayLabelsMentors = avgMentors.map((mentor) => {
// //     const { name, average,  } = mentor
// //     const label = `Mi nombre es ${name} y mi promedio es ${average}`
// //     return label
// // })

// //
// const arrayLabelsMentors = avgMentors.map((mentor) => `Mi nombre es ${mentor.name} y mi promedio es ${mentor.average}`)


// console.log("Con Map:")
// console.log(arrayLabelsMentors)


// // - Obtener la lista de mentores cuyo promedio sea mayor a 9.5

// let mentorsTop = []

// avgMentors.forEach((mentor)=> {
//     mentor.average >= 9.5 ? mentorsTop.push(mentor) : null
// })
// console.log(mentorsTop)

// let newArraySuperMentors = avgMentors.filter((mentor) => {
//     if(mentor.average >= 9.5) {
//         return mentor
//     }
// })

// console.log("Filter")
// console.log(newArraySuperMentors)


let mentorArray = [
    {
        name: "Fernanda"
        mail
    }
]