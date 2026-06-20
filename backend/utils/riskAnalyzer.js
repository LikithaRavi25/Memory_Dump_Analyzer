const suspiciousProcesses = [
    "powershell.exe",
    "cmd.exe",
    "wmic.exe",
    "rundll32.exe",
    "regsvr32.exe",
    "mshta.exe",
    "certutil.exe"
];

function calculateRisk(hiddenProcesses) {

    let riskScore = 0;

    const suspiciousFound = [];

    hiddenProcesses.forEach(process => {

        if (
            suspiciousProcesses.includes(
                process.name.toLowerCase()
            )
        ) {

            riskScore += 10;

            suspiciousFound.push(
                process
            );
        }

    });

    return {
        riskScore,
        suspiciousFound
    };
}

module.exports = {
    calculateRisk
};