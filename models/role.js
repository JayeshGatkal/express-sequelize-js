"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User)
    }
  }
  Role.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      enabled: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Role",
      timestamps: false,
    }
  );
  return Role;
};
