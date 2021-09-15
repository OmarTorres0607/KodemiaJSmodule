// // let dataArray = [
// //     ["Fernanda", "Palacios"],
// //     ["Alfred", "Altamirano"],
// //     ["Angel", "Resendiz"],
// //     ["Elda", "Corona"],
// //     ["Tux", "Tuxtla"],
// //     ["Jorge", "De Buen"]
// // ]

// //  dataArray.forEach((mentor) =>{
// //     let arrayMentor = []
// //     console.log()


// //  })
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

// let dataArray = [
//         ["Fernanda", "Palacios"],
//         ["Alfred", "Altamirano"],
//         ["Angel", "Resendiz"],
//         ["Elda", "Corona"],
//         ["Tux", "Tuxtla"],
//         ["Jorge", "De Buen"]
//     ]

// dataArray.forEach((arr, key)=>{
//   console.log(arr[1])

// })

let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    }
]
/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)

- Obtener el promedio indivual de cada mentor
- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"
- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

// - Obtener el score promedio de cada materia (HTML, CSS, JS)
const promediomaterias = arrayMentor => {
    let htmlacum = 0
    let cssacum = 0   // -Generar acumulaado para calificaciones
    let jsacum = 0
    let mentorQty = arrayMentor.lenght // Calcula cuantos mentores hay

    arrayMentor.forEach((mentorObject, index)=> {   //For each para entrar a cada objeto
        mentorObject.scores.forEach((scoreMentor)=>{ //For each para entrar a la propiedad de scores
            let signature = scoreMentor.signature
            let score = scoreMentor.score

            switch(signature) {
                case "HTML":
                    htmlacum += score
                    break;
                case "CSS":
                    cssacum += score
                    break;
                case "JS":
                    jsacum += score
                    break;
                default:
                    console.error("Asignatura no encontrada")
            }


        })

    })
}