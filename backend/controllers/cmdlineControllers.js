const path = require("path");

const {
  runVolatility
} = require("../services/volatilityServices");

exports.getCommandLines = async (req, res) => {

  try {

    const fileName = req.params.fileName;

    const filePath = path.join(
      __dirname,
      "..",
      "uploads",
      fileName
    );

    const result = await runVolatility(
      filePath,
      "windows.cmdline"
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