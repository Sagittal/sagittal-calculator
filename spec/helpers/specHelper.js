const cp = require("child_process")

require("colors")

const NPM_SCRIPT_HEADER_LINES_COUNT = 4
const SKIP_THE_FINAL_EMPTY_LINE = 1

runCommandAndGetConsoleOutput = (command, options = {}) => {
    const {headerLinesCount = NPM_SCRIPT_HEADER_LINES_COUNT} = options

    const consoleOutput = cp.execSync(command).toString()
    const consoleOutputLines = consoleOutput.split("\n")

    return consoleOutputLines.slice(headerLinesCount, consoleOutputLines.length - SKIP_THE_FINAL_EMPTY_LINE)
}
