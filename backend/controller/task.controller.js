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

const getTasks = catchAsync(async (req, res, next) => {
  try {
    const { status } = req.query;
    const tasks = status
      ? await Task.findAll({ where: status })
      : await Task.findAll();

    return res.status(200).json({
      status: "success",
      message: "successfully retrieved tasks",
      result: tasks,
    });
  } catch (err) {
    return next(new AppError("Internal Server Error", 500));
  }
});

const updateTask = catchAsync(async (req, res, next) => {});

const deleteTask = catchAsync(async (req, res, next) => {});

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
