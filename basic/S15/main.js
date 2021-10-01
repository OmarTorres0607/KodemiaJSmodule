
// Acceder a un elemento por TAGNAME
let listItem = document.getElementsByTagName ("li")
console.log(listItem)

// Acceder a un elemento por clase
let byClass = document.getElementsByClassName ("'koder-item'")
console.log(byClass)

// Acceder a un elemento por ID
let ulById = document.getElementById("koders-list")

let li = document.querySelector("ul#koders-list li.koder-item")
console.log(li)

let lis = document.querySelectorAll("ul#koders-list li.koder-item")
console.log(lis)

lis.forEach(element => {
    console.log(element)
})