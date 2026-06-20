const path = require("path");

const {
    runVolatility
} = require("../services/volatilityServices");
const {
    analyzeMemoryDump,
    getNetworkConnections
} = require("../controllers/analysisController");

exports.analyzeMemoryDump = async (req, res) => {

    try {

        const fileName = req.params.fileName;

        const filePath = path.join(
            __dirname,
            "..",
            "uploads",
            fileName
        );

        console.log("Analyzing:");
        console.log(filePath);



        const result =
            await runVolatility(
                filePath,
                "windows.pslist"
            );

        res.json({
            success: true,
            file: fileName,
            data: result
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};

exports.getNetworkConnections = async (req, res) => {

    try {

        const fileName = req.params.fileName;

        const filePath = path.join(
            __dirname,
            "..",
            "uploads",
            fileName
        );

        const result =
            await runVolatility(
                filePath,
                "windows.netscan"
            );

        res.json({
            success: true,
            data: result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};