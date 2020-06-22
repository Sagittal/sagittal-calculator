const cp = require("child_process")

require("colors")

const HEADER_LINES_COUNT = 4
const SKIP_THE_FINAL_EMPTY_LINE = 1

runCommandAndGetConsoleOutput = command => {
    const consoleOutput = cp.execSync(command).toString()
    const consoleOutputLines = consoleOutput.split('\n')

    return consoleOutputLines.slice(HEADER_LINES_COUNT, consoleOutputLines.length - SKIP_THE_FINAL_EMPTY_LINE)
}
