'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      nombre : {
        allowNull: false,
        type: Sequelize.STRING,
      },

      precio : {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      descripcion : {
        allowNull: false,
        type: Sequelize.STRING,
      },

      es_alcohol : {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }  

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Productos');
  }
};
