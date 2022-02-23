const {
    passengers
} = require('../data')

// const addAge = addAge => addAge.age = 2022 - addAge.birthYear 
// const result = passengers.map(addAge)
// console.table(result)
// console.log(result)

// const newPassangers = passengers.map((passanger,index) => {
//     return `${index + 1} : ${passanger.name} tem ${2022 - passanger.birthYear} anos`
// })
// console.log(newPassangers)

const founds = passengers.map((passanger, index) => {
    const reverseName = [].map.call(passanger.name, letter => letter)
        .reverse()
        .join('')
    if (passanger.name.toLowerCase() === reverseName.toLowerCase()) {
        return `Indice ${index + 1} Nome: ${passanger.name} é palindromo `
    } else {
        return `Indice ${index + 1}: Nome: ${passanger.name} não é palindromo `
    }
})

console.log(founds)