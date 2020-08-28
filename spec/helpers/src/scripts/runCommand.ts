import * as cp from "child_process"
import { count } from "../../../../src/general"
import { NPM_SCRIPT_HEADER_LINES_COUNT, SKIP_THE_FINAL_EMPTY_LINE } from "./constants"

const runCommandAndGetConsoleOutput: (command: string) => string[] =
    (command: string): string[] => {
        const consoleOutput: string = cp.execSync(command, { stdio: ["pipe", "pipe", "inherit"] }).toString()
        const consoleOutputLines: string[] = consoleOutput.split("\n")

        return consoleOutputLines.slice(
            NPM_SCRIPT_HEADER_LINES_COUNT,
            count(consoleOutputLines) - SKIP_THE_FINAL_EMPTY_LINE,
        )
    }

export {
    runCommandAndGetConsoleOutput,
}
