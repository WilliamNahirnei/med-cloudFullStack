const Sequelize = require('sequelize');
const database = require('../../database/database.js')
 
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
        type: Sequelize.DATE,
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
    }
})
 
module.exports = Patient;