const { Sequelize } = require('sequelize');

//Setup Sequelize
const sequelize = new Sequelize({
  database: 'medie',
  username: 'root',
  password: 'SokrateS13',
  host: 'localhost',
  dialect: 'mysql', // Specificerar vilken databas vi jobbar med
});

module.exports = sequelize