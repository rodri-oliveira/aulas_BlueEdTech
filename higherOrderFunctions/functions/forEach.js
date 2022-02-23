const { passengers } = require('../data')

const passangerAge = passanger => passanger.age = 2022 - passanger.birthYear

passengers.forEach(passangerAge)
console.log(passengers)