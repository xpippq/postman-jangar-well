"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        nama: "Rafif",
        alamat: "Vegas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Harry",
        alamat: "Uganda",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Yuna",
        alamat: "Seoul",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Jayson",
        alamat: "Los Angeles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
