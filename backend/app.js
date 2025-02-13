require("dotenv").config({ path: `${process.cwd()}/.env` });

const express = require("express");
const catchAsync = require("./utils/catchAsync.js");
const globalErrorHanlder = require("./controller/error.controller.js");
const taskRoute = require("./routes/task.routes.js");
const AppError = require("./utils/AppError.js");

const app = express();
app.use(express.json());

app.use("/api/v1/task", taskRoute);

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "REST API's are working",
  });
});

app.use(
  "*",
  catchAsync(async (req, res, next) => {
    return next(
      new AppError(`Can't find ${req.originalUrl} on this server`, 404)
    );
  })
);

app.use(globalErrorHanlder);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
