const path = require("path");

exports.uploadMemoryDump =
(req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });

        }

        res.json({

            success: true,

            filename:
                req.file.filename

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            error:
                error.message

        });

    }

};