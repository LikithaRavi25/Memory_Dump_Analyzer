const path = require("path");
const Analysis = require("../models/Analysis");

const {
    runVolatilityText
} = require("../services/volatilityServices");
const {
    extractProcesses
} = require("../utils/processParser");

const {
    calculateRisk
} = require("../utils/riskAnalyzer");

exports.detectHiddenProcesses =
    async (req, res) => {

        try {

            const fileName =
                req.params.fileName;

            const filePath =
                path.join(
                    __dirname,
                    "..",
                    "uploads",
                    fileName
                );

            const pslist =
                await runVolatilityText(
                    filePath,
                    "windows.pslist"
                );

            const psscan =
                await runVolatilityText(
                    filePath,
                    "windows.psscan"
                );

            const pslistProcesses =
                extractProcesses(pslist);

            const psscanProcesses =
                extractProcesses(psscan);

            const hiddenProcesses =
                psscanProcesses.filter(
                    scanProcess =>
                        !pslistProcesses.some(
                            listProcess =>
                                listProcess.pid === scanProcess.pid
                        )
                );

            const riskAnalysis =
                calculateRisk(
                    hiddenProcesses
                );

            await Analysis.create({

                filename: fileName,

                activeProcesses:
                    pslistProcesses.length,

                scannedProcesses:
                    psscanProcesses.length,

                hiddenProcesses,

                riskScore:
                    riskAnalysis.riskScore,

                suspiciousProcesses:
                    riskAnalysis.suspiciousFound

            });

            res.json({
                success: true,

                activeProcesses:
                    pslistProcesses.length,

                scannedProcesses:
                    psscanProcesses.length,

                hiddenProcesses,

                riskScore:
                    riskAnalysis.riskScore,

                suspiciousProcesses:
                    riskAnalysis.suspiciousFound
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                error: error.message
            });

        }

    };