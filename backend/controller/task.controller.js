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

const updateTask = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const task = await Task.findByPk(id);

  if (!task) {
    return next(new AppError("Task not Found", 404));
  }

  task.title = title;
  task.description = description;

  await task.save();

  return res.status(200).json({
    status: "success",
    message: "successfully updated the task",
  });
});

const deleteTask = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);

  if (!task) {
    return next(new AppError("Task not found", 404));
  }

  await task.destroy();

  return res.status(200).json({
    status: "success",
    message: "Task deleted successfully",
  });
});

const toggleTaskStatus = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);

  if (!task) {
    return next(new AppError("Task not found", 404));
  }

  task.status = task.status === "pending" ? "completed" : "pending";

  await task.save();

  return res.status(200).json({
    status: "success",
    message: "Task status toggled successfully",
    task,
  });
});

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  toggleTaskStatus,
};
