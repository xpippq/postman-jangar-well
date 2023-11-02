"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        judul: "Jujutsu Kaisen 08",
        penerbit: "Elex Media Komputindo",
        deskripsi:
          "Jujutsu Kaisen adalah serial manga Jepang yang ditulis dan diilustrasikan oleh Gege Akutami. Ini telah diserialkan di majalah manga shōnen Shueisha Weekly Shonen Jump sejak Maret 2018, dengan bab-babnya dikumpulkan dan diterbitkan dalam 20 volume tankōbon per Agustus 2022.",
        gambar: "jjk8.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", nulll, {});
  },
};
