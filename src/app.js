const express = require("express");
const app = express();
// const port = 4000;

app.use(express.json());

require("./db/conn");
const foodItems = require("./model/schema");

app.get("/", (req, res) => {
  res.send("<h1>Welcome to project creation</h1>");
});

app.get("/allfoodItems", async (req, res) => {
  try {
    const allFoodItems = await foodItems.find({});
    res.status(201).json(allFoodItems);
  } catch (e) {
    console.log(e);
  }
});

app.post("/allItems", async (req, res) => {
  const foodItemDetails = await foodItems.create(req.body);
  res.status(200).json({ foodItemDetails });
});

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
