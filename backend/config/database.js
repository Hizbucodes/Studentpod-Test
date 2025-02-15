require("dotenv").config({ path: `${process.cwd()}/.env` });
const { Sequelize } = require("sequelize");
const config = require("./config.js");

const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(config[env]);

module.exports = sequelize;
