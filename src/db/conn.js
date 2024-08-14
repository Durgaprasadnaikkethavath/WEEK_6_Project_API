const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/project-api-foodItems")
  .then(() => console.log("server was connected"))
  .catch(() => console.log("server was not connected"));
