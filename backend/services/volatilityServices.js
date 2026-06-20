const { execFile } = require("child_process");

/*
========================================
JSON OUTPUT PLUGINS
(pslist, cmdline, info, netscan)
========================================
*/

const runVolatility = (filePath, plugin) => {

    return new Promise((resolve, reject) => {

        console.log("================================");
        console.log("Running Volatility JSON");
        console.log("File:", filePath);
        console.log("Plugin:", plugin);
        console.log("================================");

        execFile(
            "vol",
            [
                "-r",
                "json",
                "-f",
                filePath,
                plugin
            ],
            {
                maxBuffer: 1024 * 1024 * 200
            },
            (error, stdout, stderr) => {

                if (error) {

                    console.error(stderr);

                    return reject(error);
                }

                try {

                    const parsedOutput =
                        JSON.parse(stdout);

                    resolve(parsedOutput);

                } catch {

                    resolve(stdout);

                }

            }
        );

    });

};

/*
========================================
TEXT OUTPUT PLUGINS
(psscan)
========================================
*/

const runVolatilityText = (filePath, plugin) => {

    return new Promise((resolve, reject) => {

        console.log("================================");
        console.log("Running Volatility TEXT");
        console.log("File:", filePath);
        console.log("Plugin:", plugin);
        console.log("================================");

        execFile(
            "vol",
            [
                "-f",
                filePath,
                plugin
            ],
            {
                maxBuffer: 1024 * 1024 * 200
            },
            (error, stdout, stderr) => {

                if (error) {

                    console.error(stderr);

                    return reject(error);
                }

                resolve(stdout);

            }
        );

    });

};

module.exports = {
    runVolatility,
    runVolatilityText
};