let numbersArray = [2,6,7,10,5];

let doubleNumbers = numbersArray.map((number, index) =>{
    number*2
})

console.log(numbersArray)
console.log(doubleNumbers)

let numbersArray = [2,6,7,10,5];

let pares = numbersArray.filter((number,index) =>{
    if(number % 2 === 0){
        return number
    }

})