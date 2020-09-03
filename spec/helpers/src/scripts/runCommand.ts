import * as cp from "child_process"
import { count, Io } from "../../../../src/general"
import { NPM_SCRIPT_HEADER_LINES_COUNT, SKIP_THE_FINAL_EMPTY_LINE } from "./constants"

// TODO: might be cool if this thing only read stuff from the saveLog command,
//  so that you could still console.log things while under development without disrupting tests expecting certain output

const runCommandAndGetConsoleOutput = (command: Io): Io[] => {
    const consoleOutput: Io = cp.execSync(command, { stdio: ["pipe", "pipe", "inherit"] }).toString() as Io
    const consoleOutputLines: Io[] = consoleOutput.split("\n") as Io[]

    return consoleOutputLines.slice(
        NPM_SCRIPT_HEADER_LINES_COUNT,
        count(consoleOutputLines) - SKIP_THE_FINAL_EMPTY_LINE,
    )
}

export {
    runCommandAndGetConsoleOutput,
}
