const { shopCart , passengers} = require('../data')

// const ordenar1 = (a, b) => a.quantity - b.quantity
// const result = shopCart.sort(ordenar1)
// console.log(result)

// const ordenar2 = (a, b) => b.quantity - a.quantity
// const result2 = shopCart.sort(ordenar2)
// console.log(result2)

const ordenar3 = (passangerA, passangerB) => {
    if(passangerA.name.toLowerCase() < passangerB.name.toLowerCase()) return -1
    if(passangerA.name.toLowerCase() > passangerB.name.toLowerCase()) return 1
    return 0
}
const result3 = passengers.sort(ordenar3)
console.log(result3)