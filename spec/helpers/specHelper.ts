import * as cp from "child_process"
import "colors"

const NPM_SCRIPT_HEADER_LINES_COUNT = 4
const SKIP_THE_FINAL_EMPTY_LINE = 1

const runCommandAndGetConsoleOutput: (command: string) => string[] =
    (command: string): string[] => {
        const consoleOutput: string = cp.execSync(command, { stdio: "pipe" }).toString()
        const consoleOutputLines: string[] = consoleOutput.split("\n")

        return consoleOutputLines.slice(NPM_SCRIPT_HEADER_LINES_COUNT, consoleOutputLines.length - SKIP_THE_FINAL_EMPTY_LINE)
    }

export {
    runCommandAndGetConsoleOutput,
}
