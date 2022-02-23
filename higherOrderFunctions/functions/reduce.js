const { shopCart } = require('../data')

const total = (acc, item) => 
    acc + item.unitPrice * item.quantity
     
const result = shopCart.reduce(total,0)
console.table(result)




const totalProdutos = (acc, itemQtd) => 
    acc + itemQtd.quantity
const result2 = shopCart.reduce(totalProdutos,0)
console.log(result2)