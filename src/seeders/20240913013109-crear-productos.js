'use strict';
const { faker, de } = require('@faker-js/faker');
const currentDate = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const keywords = [
      'Anticucho', 'Empanada de Pino', 'Chicha', 'Piscola',
      'Terremoto', 'Choripán', 'Parrillada', 'Cazuela', 'Completo', 'Sopaipilla'
    ];

    const productos = [];
    for (let i = 0; i < 10; i++) {
      const nombreProducto = keywords[i]; 
      productos.push({
        nombre: nombreProducto,
        precio: faker.number.int({ min: 2000, max: 5000 }),
        descripcion: 'Tremendo producto para disfrutar en Fiestas Patrias',
        es_alcohol: (nombreProducto === 'Chicha' || nombreProducto === 'Piscola' || nombreProducto === 'Terremoto') ? true : false, 
        createdAt: currentDate,
        updatedAt: currentDate
      });
    }
    await queryInterface.bulkInsert('Productos', productos, {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
