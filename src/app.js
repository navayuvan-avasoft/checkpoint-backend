const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

const TimeCheckpointRouter = require("./components/checkpoints/checkpoint.route");

dotenv.config();
app.use(express.json());

app.use("/api/checkpoints", TimeCheckpointRouter);

mongoose.connect(
  process.env.DB_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(" Mongoose is connected")
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
