const router = require("express").Router();
const {
  bulkInsertCheckpoints,
  getCheckpoints,
} = require("./checkpoint.controller");

router.post("/bulk-insert", bulkInsertCheckpoints);

router.get("/", getCheckpoints);

module.exports = router;
