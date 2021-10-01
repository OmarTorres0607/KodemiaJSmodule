/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Mana",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Mana",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Mana",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

// - Agrupar el nombres de la bandas, que no esten repetidas
// let Bandname = songsData.map((banda,index) => {
//     return banda.band
// })
// let uniqueBand = [...new Set (Bandname)]
// console.log(uniqueBand)
// // - Agrupar las canciones por banda
// const songsbyBand =(arraySong, index) => {
    
//     let songs = arraySong.filter((song, index)=> {song.band === uniqueBand})
//     return songs
// }

// console.log(songsbyBand(songsData, "Jaguares"))
// // - La cancion con más reproducciones
// - La cancion con más likes


// Obtener una lista de strings con el siguiente formato:
// // "La cancion {name} es de {banda}"

// const songwName = (arraySong) =>{

//     let songName = arraySong.map((banda,index) => {
//         return `La cancion ${banda.name} es de ${banda.band}`
//     })

//     return songName
// }

// console.log(songwName(songsData))

// crear una funcion que me permita Obtener las canciones que contengan un criterio de busqueda
// criterio: cel
// [
//     {
//         name: "La celula que explota",
//         band: "Jaguares",
//         releaseYear: "1999",
//         statistics: {
//             likes: 12000,
//             reproductions: 23421
//         },
//     }
// ]

// const searcher = (arraySong, property, wordToSearch) =>{

// let song = arraySong.filter((song) => song.[property].toLocaleLowerCase().includes(wordToSearch.toLocaleLowerCase()))

// return song
// }



// let numbersArray = [20, 15, 2, 5]

// const total = numbersArray.reduce((accum, number)=>{
//     return accum + number
// },0)

// console.log(total)

// let arrayFruits = ["fresa", "piña", "fresa","manzana","pera","kiwi"]

// const result = arrayFruits.reduce((accum, fruit, index) => {
//     let count = accum[fruit] ? accum[fruit] + 1 : 1
//     // console.log (count)
//     // console.log (accum)
//     return {
//         ...accum,
//         [fruit] : count
//     }
// },{})

// console.log(result)

/*
 Práctica:
   - obtener los productos de tipo chips and drink
   - obtener todos los productos < a $50 y obtener >= $50
   - obtener el inventario total en valor de todos los productos
   - obtener el inventario total en valor de los productos tipo chips
   - obtener el inventario total en valor de los productos tipo drink
*/
const products = [
    {
        name: 'Coca lata 355ml',
        description: 'Coca lata 355ml',
        price: 11,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 1lt',
        description: 'Boing Mango 1lt',
        price: 18,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 3lt No Retornable',
        description: 'Coca-Cola 3lt No Retornable',
        price: 40,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 600ml',
        description: 'Coca-Cola 600ml',
        price: 14,
        type: 'drink'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      price: 27.5,
      type: 'chip'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      price: 25.5,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Jalapeño 100 g',
      description: 'Botanas Chips Papas Jalapeño 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Botana Paketaxo Quexo 215 g',
      description: 'Botana Paketaxo Quexo 215 g',
      price: 52.8,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Incógnita 64 g',
      description: 'Botana Doritos Incógnita 64 g',
      price: 18.15,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Sal y Limón 57 g',
      description: 'Botana Fritos Sal y Limón 57 g',
      price: 15.4,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 58 g',
      description: 'Botana Doritos Nacho 58 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Flamin Hot 62 g',
      description: 'Botana Doritos Flamin Hot 62 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Fuego Limón 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 42 g',
      description: 'Papas Sabritas Original 42 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Adobadas 42 g',
      description: 'Papas Sabritas Adobadas 42 g',
      price: 16.5,
      type: 'chip'
    },
    {
      name: 'Cacahuates Hot Nuts Multintenso 50 g',
      description: 'Cacahuates Hot Nuts Multintenso 50 g',
      price: 11,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Chorizo Chipotle 57 g',
      description: 'Botana Fritos Chorizo Chipotle 57 g',
      price: 15.95,
      type: 'chip'
    },
    {
      name: 'Botana Chips Sal de Mar Bolsa 170 g',
      description: 'Botana Chips Sal de Mar Bolsa 170 g',
      price: 49.5,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Poffs 100 g',
      description: 'Botana Cheetos Poffs 100 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Fritas Stax Cheddar 156 g',
      description: 'Papas Fritas Stax Cheddar 156 g',
      price: 47.85,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 240 g',
      description: 'Papas Sabritas Original 240 g',
      price: 75.35,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 370 g',
      description: 'Botana Doritos Nacho 370 g',
      price: 82.5,
      type: 'chip'
    },
    {
      name: 'Chicharrón de Cerdo Sabritas 115 g',
      description: 'Chicharrón de Cerdo Sabritas 115 g',
      price: 55,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Torciditos 150 g',
      description: 'Botana Cheetos Torciditos 150 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Ruffles Queso 290 G',
      description: 'Papas Ruffles Queso 290 G',
      price: 71.5,
      type: 'chip'
    },
    {
      name: 'Dip Tostitos Queso Suave 255 g',
      description: 'Dip Tostitos Queso Suave 255 g',
      price: 69.3,
      type: 'chip'
    }
  ]

//   - obtener los productos de tipo chips and drink

const productOrder = arrayProducts => {
    return products = arrayProducts.reduce((accum, product) =>{
        const {type} = product
        return accum[type]  ? {...accum, [type] : [] }  : {...accum, [type] : [...accum[type],product]}
    },{})
}
console.log(productOrder(products))




// - obtener todos los productos < a $50 y obtener >= $50

// const getProd = (isMayor, arrayProducts) =>{
//     return arrayProducts.filter((product) => isMayor ? product.price >= 50 : product.price <= 50 )
// }

// getProd(true, products)

// // - obtener el inventario total en valor de todos los productos

// const totalWH = products.reduce((accum, product) => accum + product.price , 0)

// console.log(`El inventario total es de $ ${totalWH}`)
// // - obtener el inventario total en valor de los productos tipo chips
// // - obtener el inventario total en valor de los productos tipo drink
// const getTotalbyType = (type, arrayProducts)=> {
// return arrayProducts.reduce((accum, product) => {
//     return product.type === type ? accum += product.price : accum
//     },0)
// }
// console.log(totalDrink)

const cartShoppings = [
    {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
    },
    {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    }
]
/*
Obtener el importe total a pagar del carrito de los productos selecionados
nombre prodcuto                | cantidad | importe
Dip Tostitos Queso Suave 255 g |    2     |  138.3
Boing Mango 500ml              |    2     |  20
total                                     |   158.3
*/