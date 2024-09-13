'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Stands', {
      id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      nombre: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      fondaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Fondas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      rating: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Stands');
  }
};
