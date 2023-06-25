require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const eventsRouter = require("./routes/events");
const goalsRouter = require("./routes/goals");

const app = express();
const port = process.env.PORT || 5005;
const password = process.env.MONGO_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://BuHogeJI:${password}@cluster0.aref3en.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Enable All CORS Requests
app.use(cors());
app.use("/api/events", eventsRouter);
app.use("/api/goals", goalsRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/tasks", (req, res) => {
  res.json({ tasks: ["Task 1", "Task 2", "Task 3"] });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
