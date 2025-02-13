const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.route("/tasks").post(taskController.createTask);
router.route("/tasks").get(taskController.getTasks);
router.route("/tasks/:id").put(taskController.updateTask);

module.exports = router;
