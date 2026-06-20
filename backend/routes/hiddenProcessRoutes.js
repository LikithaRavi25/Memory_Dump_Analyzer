const express = require("express");

const {
  detectHiddenProcesses
} = require("../controllers/hiddenProcessControllers");

const router = express.Router();

router.get(
  "/hidden/:fileName",
  detectHiddenProcesses
);

module.exports = router;