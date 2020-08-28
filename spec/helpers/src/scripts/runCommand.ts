import * as cp from "child_process"
import { count, IO } from "../../../../src/general"
import { NPM_SCRIPT_HEADER_LINES_COUNT, SKIP_THE_FINAL_EMPTY_LINE } from "./constants"

const runCommandAndGetConsoleOutput = (command: IO): IO[] => {
        const consoleOutput: IO = cp.execSync(command, { stdio: ["pipe", "pipe", "inherit"] }).toString() as IO
        const consoleOutputLines: IO[] = consoleOutput.split("\n") as IO[]

        return consoleOutputLines.slice(
            NPM_SCRIPT_HEADER_LINES_COUNT,
            count(consoleOutputLines) - SKIP_THE_FINAL_EMPTY_LINE,
        )
    }

export {
    runCommandAndGetConsoleOutput,
}
