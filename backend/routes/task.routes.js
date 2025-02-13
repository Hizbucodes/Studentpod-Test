const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.route("/tasks").post(taskController.createTask);

module.exports = router;
