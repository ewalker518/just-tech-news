const Sequelize = require('sequelize');
require('dotenv').config();

// Connect to the database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;