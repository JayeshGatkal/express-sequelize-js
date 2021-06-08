const express = require("express");
const routes = express.Router();
const db = require("../models");

routes.get("/:id", async (req, res) => {
  const user = await db.User.findByPk(req.params["id"]);
  if (user) {
    res.status(200).json({
      user: user,
    });
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
});

routes.get("/", async (req, res) => {
  const users = await db.User.findAll({
    include: [
      {
        model: db.Role,
      },
    ],
  });
  if (users) {
    res.status(200).json({
      users: users,
    });
  } else {
    res.status(404).json({
      message: "users not found",
    });
  }
});

routes.post("/", async (req, res) => {
  const user = await db.User.create(req.body);
  if (user) {
    res.status(201).json({
      message: "user created successfully",
    });
  } else {
    res.status(400).json({
      message: "Bad Request",
    });
  }
});

routes.put("/:id", async (req, res) => {
  const id = req.params["id"];
  const user = await db.User.findByPk(id);
  if (user) {
    user.update(req.body);
    res.status(200).json({
      message: "user updated successfully",
    });
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
});

routes.delete("/:id", async (req, res) => {
  const id = req.params["id"];
  const user = await db.User.findByPk(id);
  if (user) {
    user.destroy();
    res.status(200).json({
      message: "user deleted successfully",
    });
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
});

module.exports = routes;
