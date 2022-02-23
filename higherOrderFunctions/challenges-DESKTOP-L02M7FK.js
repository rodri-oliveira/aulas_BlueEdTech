const {
    childrenAge,
    mailList,
    shopCart
} = require('./data')

// adicione o ano de nascimento das crianças para cada elemento do arry

const children = childrenAge.map(child => {
    return {
        age: child,
        birthyear: 2022 - child
    }
})
console.log(children)

const children2 = childrenAge.reduce((list, age) => {
    list.push({
        age,
        birthYear: 2022 - age
    })
    return [...list]
} , [])
console.log(children2)

// --------------------------------------------------------

// crie um array somente com os dominios

const domains = mailList.map(mail => {
    const mailArray = mail.split('@')
    return mailArray[1]
})
console.log(domains)

const domains2 = mailList.reduce((list, item) => {
    const domain = item.split('@')
    list.push('@' + domain[1])
    return list
}, [])
console.log(domains2)

// ---------------------------------------

const precoAbaixo100 = shopCart.filter(preco => preco.unitPrice < 100)
    .reduce((acc, price) => acc < price ? price : acc)


console.log(precoAbaixo100)