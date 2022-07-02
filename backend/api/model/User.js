const Sequelize = require('sequelize');
const database = require('./db');
 
const User = database.define('User', {
    idUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    UserFullName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: false
    },
    UserBirthDate: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false
    },
    UserCPF: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true
    },
    UserEmail: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: true,
    },
    UserLogin: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
    },
    UserPassword: {
        type: Sequelize.STRING(256),
        allowNull: true,
        unique: false,
    },
    idUserType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: 'UserType',
        referencesKey: 'idUserType'
    }
})
 
module.exports = User;