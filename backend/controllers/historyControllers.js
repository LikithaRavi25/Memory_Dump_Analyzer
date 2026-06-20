const Analysis =
require("../models/Analysis");

exports.getHistory =
async (req, res) => {

    try {

        const history =
            await Analysis.find()
            .sort({
                createdAt: -1
            });

        res.json({
            success: true,
            data: history
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};