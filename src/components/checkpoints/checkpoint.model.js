const mongoose = require("mongoose");

const checkPointSchema = new mongoose.Schema({
  id: String,
  title: String,
  createdAt: Date,
  username: String,
  isUploaded: Boolean,
});
const TimeCheckpointModel = mongoose.model("TimeCheckpoints", checkPointSchema);

module.exports = TimeCheckpointModel;
