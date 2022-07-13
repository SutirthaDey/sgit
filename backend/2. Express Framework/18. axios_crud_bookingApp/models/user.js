//creating sequelizer for database
const Sequelize = require('sequelize');
const sequelize = require('../util/database');


// defining table for database using sequelizer

const Users = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Users