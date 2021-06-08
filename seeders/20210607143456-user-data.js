"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "User 1",
          email: "user1@gmail.com",
          phone: 123,
          roleId: 1
        },
        {
          name: "User 2",
          email: "user2@gmail.com",
          phone: 456,
          roleId: 2
        },
        {
          name: "User 3",
          email: "user2@gmail.com",
          phone: 789,
          roleId: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
