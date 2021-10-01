let arrayPersons = [
    {
        name: "Alice", age: 25, voted: true, gender: "mujer"
    },
    {
        name: "Jenifer", age: 26, voted: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, voted: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, voted: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, voted: false, gender: "hombre"
    },
    {
        name: "Luis", age: 38, voted: true, gender: "hombre"
    },
    {
        name: "David", age: 29, voted: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, voted: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, voted: false, gender: "mujer"
    },
    {
        name: "Albert", age: 45, voted: true, gender: "hombre"
    },
    {
        name: "Mike", age: 22, voted: false, gender: "hombre"
    },
    {
        name: "Tami", age: 35, voted: true, gender: "hombre"
    },
    {
        name: "Mari", age: 28, voted: true, gender: "mujer"
    },
    {
        name: "Mireya", age: 18, voted: true, gender: "mujer"
    },
    {
        name: "Tamara", age: 18, voted: true, gender: "mujer"
    },
]

// Usar reduce para obtener la siguiente informacion
// - Un array con aquellas personas que votaron

const voters = arrayVote => {
    return votetrue = arrayVote.reduce((accum, votante) =>{
        const {voted} = votante
        return !accum[voted] ? accum : [...accum, {voted}, votante]
    },{})
    console.log(votetrue)
}

console.log(voters(arrayPersons))

// - la edad promedio de todos los votantes
// - un array con aquellos votantes que votaron y que son menores a 30 años
// - la edad promedio de los no votantes
// - el porcentaje de votantes vs no votante
// - el procentaje de mujeres que votaron
// - el porcentaje de los hombres que votaron
