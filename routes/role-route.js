const routes = require("express").Router();
const db = require("../models");

routes.get("/", (req, res) => {
  db.Role.findAll({
    include: [
      {
        model: db.User,
      },
    ],
  })
    .then((roles) => {
      res.json({
        roles: roles,
      });
    })
    .catch((error) => {
      res.json({
        status: 0,
        message: error,
      });
    });
});

module.exports = routes;
