const mongoose = require("mongoose");

const analysisSchema =
new mongoose.Schema({

    filename: String,

    activeProcesses: Number,

    scannedProcesses: Number,

    hiddenProcesses: Array,

    riskScore: Number,

    suspiciousProcesses: Array,

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports =
mongoose.model(
    "Analysis",
    analysisSchema
);