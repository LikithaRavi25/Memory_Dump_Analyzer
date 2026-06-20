function extractProcesses(output) {

    const processes = [];

    const lines = output.split("\n");

    for (const line of lines) {

        if (
            line.includes(".exe") ||
            line.includes("System")
        ) {

            const columns =
                line.trim().split(/\s+/);

            if (columns.length > 2) {

                processes.push({
                    pid: columns[0],
                    name: columns[2]
                });

            }
        }
    }

    return processes;
}

module.exports = {
    extractProcesses
};