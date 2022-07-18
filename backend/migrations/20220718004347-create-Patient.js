'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patient', {
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
              model: 'Address',
              key: 'idAddress'
          }
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patient');
  }
}