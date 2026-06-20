const express = require("express");

const {
    analyzeMemoryDump,
    getNetworkConnections
} = require("../controllers/analysisController");

const router = express.Router();

router.get(
    "/analyze/:fileName",
    analyzeMemoryDump
);

router.get(
    "/network/:fileName",
    getNetworkConnections
);

module.exports = router;