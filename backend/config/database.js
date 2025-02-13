require("dotenv").config({ path: `${process.cwd()}/.env` });
import { Sequelize } from "sequelize";
import config from "./config.js";

const env = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(config[env]);

export default sequelize;
