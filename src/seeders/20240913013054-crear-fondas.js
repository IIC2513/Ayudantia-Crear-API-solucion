'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ciudades = ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Temuco', 'Rancagua', 'Arica', 'Iquique', 'Punta Arenas', 'Puerto Montt'];
    const keywords = ['Don Pepe', 'La Tía', 'El Chino', 'La Pepa', 'El Pato', 'La Chica', 'El Gato', 'Donde Juan', 'La Pancha', 'El Loco'];

    const fondas = [];

    for (let i = 0; i < 10; i++) {
      fondas.push({
        nombre: `$Fonda ${keywords[i]} `, 
        ubicacion: faker.helpers.arrayElement(ciudades),  
        capacidad: 500,  
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Fondas', fondas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Fondas', null, {});
  }
};
