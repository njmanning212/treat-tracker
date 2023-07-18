'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const date = new Date()
    await queryInterface.bulkInsert('Corgis', [
      {
        name: 'Toffee',
        age: 4,
        breed: 'Pembroke Welsh Corgi',
        createdAt: date,
        updatedAt: date
      },
      {
        name: 'Corgi 2',
        age: 16,
        breed: 'Pembroke Welsh Corgi',
        createdAt: date,
        updatedAt: date
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Corgis', null, {});
  }
};
