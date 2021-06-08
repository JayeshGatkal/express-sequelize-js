"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          title: "Role 1",
          description: "Descirption for Role 1",
          enabled: true,
        },
        {
          title: "Role 2",
          description: "Descirption for Role 2",
          enabled: true,
        },
        {
          title: "Role 2",
          description: "Descirption for Role 3",
          enabled: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
