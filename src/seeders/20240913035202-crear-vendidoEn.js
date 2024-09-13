'use strict';
const { faker } = require('@faker-js/faker');
const producto = require('../models/producto');
const currentDate = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const [stands] = await queryInterface.sequelize.query(
      'SELECT id FROM "Stands";'
    );

    const [productos] = await queryInterface.sequelize.query(
      'SELECT id FROM "Productos";'
    );

    const vendidoEn = [];
    for (let i = 1; i <= 30; i++) {
      vendidoEn.push({
        standId: faker.number.int({ min: 1, max: stands.length }), 
        productoId: faker.number.int({ min: 1, max: productos.length }),
        createdAt: currentDate,
        updatedAt: currentDate
      });
    }

    await queryInterface.bulkInsert('vendidoEns', vendidoEn, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendidoEns', null, {});
  }
};
