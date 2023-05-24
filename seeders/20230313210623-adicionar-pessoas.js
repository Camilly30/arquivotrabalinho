'use strict';

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [
        {nome: 'Thor',sobrenome:'Odinsun',idade: 40},
        {nome: 'Diana',sobrenome:'Prince',idade: 38},
        {nome: 'Berry',sobrenome:'Alen',idade: 13},
        {nome: 'Steve',sobrenome:'Roger',idade: 12},
        {nome: 'Clark',sobrenome:'Kent',idade: 41},
        {nome: 'Bruce',sobrenome:'Wayne',idade: 43},
        {nome: 'Kara',sobrenome:'Jorel',idade: 33},
        {nome: 'Tony',sobrenome:'Stark',idade: 35},
        {nome: 'Lola',sobrenome:'Bunny',idade: 5},
        {nome: 'Perna',sobrenome:'Longa',idade: 73},
        {nome: 'Patolino',sobrenome:'Pato',idade: 50},
        {nome: 'Coisa',sobrenome:'Coisa',idade: 5000},
        {nome: 'Mio',sobrenome:'Melog',idade: 2}
    ], {});
  },
 
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
 }
};

