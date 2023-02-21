const Sequelize = require('sequelize')

const database = new Sequelize("alunos","root", "#H7puhcat941685", {
  host: 'localhost',
  dialect: 'mysql'
})

database.authenticate()
.then(() => {
  console.log("Conexão como MySQL bem sucedida!")
}).catch(() => {
  console.log("Conexão não realizada")
})

module.exports = database;