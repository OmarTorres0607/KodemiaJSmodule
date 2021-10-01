// function Persona (name, lastName, birthDate) {
//     this.name = name
//     this.lastName = lastName
//     this.birthDate = birthDate
//     this.initials = `${this.name.chartAt(0).toLocaleUpperCase()}. ${this.lastName.chartAt(0).toLocaleUpperCase}`
// }

// Persona.prototype.saludar = function () {
//     console.log(`Hola, soy ${this.name} ${this.lastName}`)
// }



class Person {
    constructor(name, lastName, birthDate) {
        this.name = name
    this.lastName = lastName
    this.birthDate = birthDate
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}`
    }

    saludar () {
        return `Hola mucho gusto, mi nombre es ${this.name}`
    }
}

let nancy = new Person ("Nancy", "Soriano", "1987/09/23")

console.log(nancy)

class Koder extends Person {
    constructor(name, lastName, birthDate, bootcamp) {
        super(name, lastName, birthDate)
        this.bootcamp = bootcamp
    }
    saludar(){
       return `Hola, me llamo ${this.name}, y soy Koder`
    }
    static info () {
        return `Koder que pertenece a la comunidad de Kodemia`
    }
    get getBootcamp() {
        return this.bootcamp
    }
    set setBootcamp (value) {
        this.bootcamp = value
    }
}

let koder1 = new Koder ("Clau", "Rodriguez", "1987/09/27","Js")

console.log(koder1)
console.log(koder1.saludar())
console.log(Koder.info())
console.log(koder1.getBootcamp)
console.log(koder1.setBootcamp = "Python")
