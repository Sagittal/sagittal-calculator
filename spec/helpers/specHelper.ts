import "colors"
import * as cp from "child_process"

const NPM_SCRIPT_HEADER_LINES_COUNT = 4
const SKIP_THE_FINAL_EMPTY_LINE = 1

const runCommandAndGetConsoleOutput = command => {
    const consoleOutput = cp.execSync(command, { stdio: "pipe" }).toString()
    const consoleOutputLines = consoleOutput.split("\n")

    return consoleOutputLines.slice(NPM_SCRIPT_HEADER_LINES_COUNT, consoleOutputLines.length - SKIP_THE_FINAL_EMPTY_LINE)
}

export {
    runCommandAndGetConsoleOutput,
}
