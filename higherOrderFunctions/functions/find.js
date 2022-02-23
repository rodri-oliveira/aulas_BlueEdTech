const { passengers } = require('../data')

const nomeEnzo = passanger => passanger.name === 'Enzo'
const result2 = passengers.find(nomeEnzo)
console.table(result2)