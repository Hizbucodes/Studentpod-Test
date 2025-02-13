const AppError = require("../utils/AppError.js");
const catchAsync = require("../utils/catchAsync.js");

const Task = require("../db/models/task.js");

const createTask = catchAsync(async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({ title, description });

    return res.status(201).json({
      status: "success",
      message: "Task Created Succcessfully",
      result: task,
    });
  } catch (err) {
    return next(new AppError("Internal Server Error", 500));
  }
});

const getTasks = catchAsync(async (req, res) => {});

const updateTask = catchAsync(async (req, res) => {});

const deleteTask = catchAsync(async (req, res) => {});

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
