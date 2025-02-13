"use strict";
const { Model, Sequelize } = require("sequelize");
const sequelize = require("../../config/database.js");

module.exports = sequelize.define(
  "Task",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title cannot be Null",
        },
        notEmpty: {
          msg: "Title cannot be Empty",
        },
      },
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description cannot be null",
        },
        notEmpty: {
          msg: "Description cannot be Empty",
        },
      },
    },
    status: {
      type: Sequelize.ENUM("completed", "pending"),
      defaultValue: "pending",
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: "Task",
  }
);
