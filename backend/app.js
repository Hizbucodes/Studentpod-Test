require("dotenv").config({ path: `${process.cwd()}/.env` });

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "REST API's are working",
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
