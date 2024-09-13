'use strict';
const { faker } = require('@faker-js/faker');
const currentDate = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const keywords = [
      'Asado', 'Cueca', 'Chicha', 'Empanadas', 'UYUI', 'Pisco',
      'Terremoto', 'Choripán', 'Parrillada', 'Cazuela', 'dieciosho'
    ];

    const [fondas] = await queryInterface.sequelize.query(
      'SELECT id FROM "Fondas";'
    );

    const stands = [];
    for (let i = 1; i <= 20; i++) {
      stands.push({
        nombre: `${faker.helpers.arrayElement(keywords)} Mortal`,
        fondaId: faker.number.int({ min: 1, max: fondas.length }), 
        rating: faker.number.int(10),
        createdAt: currentDate,
        updatedAt: currentDate
      });
    }

    await queryInterface.bulkInsert('Stands', stands, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stands', null, {});
  }
};
