'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Address', {
      idAddress: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      Number: {
          type: Sequelize.STRING(6),
          allowNull: false,
          unique: false
      },
      Observation: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false
      },
      Street: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false
      },
      Neighborhood: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false
      },
      City: {
          type: Sequelize.STRING(150),
          allowNull: false,
          unique: false
      },
      State: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false
      },
      Country: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: false,
          defaultValue: 'Brasil'
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
    await queryInterface.dropTable('Address');
  }
}