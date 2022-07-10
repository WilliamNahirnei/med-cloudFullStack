const Sequelize = require('sequelize')
const database = require('../../database/database.js')
const Address = require('../Address/Address.js')
 
const Patient = database.define('Patient', {
    idPatient: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    PatientFullName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: false
    },
    PatientBirthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false
    },
    PatientCPF: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true
    },
    PatientEmail: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: true,
    },
    PatientStatus: {
        type: Sequelize.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active'
    },
    address_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'addresses',
            key: 'idAddress'
        }
    }
})

module.exports = Patient