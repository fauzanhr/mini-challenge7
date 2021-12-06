var faker = require('faker')

var username = [...Array(3)].map( user => (faker.internet.userName()))

console.log(username)