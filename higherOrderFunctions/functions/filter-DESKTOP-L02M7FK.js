const { childrenAge, mailList, passengers } = require('../data')

const children2To11 = item => item > 2 && item < 11
const result = childrenAge.filter(children2To11)
console.table(result)

// const mails = item => item !== "diego@rocketseat.com" &&
//     item !== 'fulano@gmail.com'
const mails = item => item.includes('fulano')
const result1 = mailList.filter(mails)
console.table(result1)

const nomeEnzo = item => item.nome === 'Enzo'
const result2 = passengers.find(nomeEnzo)
console.log(result2)
