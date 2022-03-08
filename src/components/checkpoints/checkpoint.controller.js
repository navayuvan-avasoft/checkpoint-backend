const TimeCheckpointModel = require("./checkpoint.model");

const bulkInsertCheckpoints = async (req, res) => {
  try {
    const { body } = req;
    if (body.length <= 0) {
      return res.status(400).json({
        message: "Invalid Body",
      });
    }

    if (!req.header("username")) {
      return res.status(400).json({
        message: "Must pass username on header",
      });
    }

    body.map((checkpoint) => {
      checkpoint["username"] = req.header("username");
      return checkpoint;
    });

    const result = await TimeCheckpointModel.insertMany(body);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getCheckpoints = async (req, res) => {
  try {
    if (!req.header("username")) {
      return res.status(400).json({
        message: "Must pass username on header",
      });
    }

    const queryParams = {
      ...req.params,
      username: req.header("username"),
    };

    const result = await TimeCheckpointModel.find(queryParams);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  bulkInsertCheckpoints,
  getCheckpoints,
};
