'use strict';

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuarios', [
        {nome: 'Ahsoka'},
        {nome: 'Padmé'},
        {nome: 'Anakin'},
        {nome: 'Leia'},
        {nome: 'Luke'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
