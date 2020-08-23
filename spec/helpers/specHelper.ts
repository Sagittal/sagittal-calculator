import * as cp from "child_process"
import "colors"

const NPM_SCRIPT_HEADER_LINES_COUNT = 4
const SKIP_THE_FINAL_EMPTY_LINE = 1

// TODO: can we find a way to annotate some tests as super slow and thus don't run them if a certain flag is passed
//  which it would be passed when running tests locally just not on CI?

// TODO: oh dang do I need to back over all of my tests and make sure I use expect(result).toEqual(expectedResult)?
//  that seems more aesthetically consistent with the verbose style I'm using in tests

// TODO: I need to bring in that tool for identifying specs that aren't running because they aren't named *Spec.ts

const runCommandAndGetConsoleOutput: (command: string) => string[] =
    (command: string): string[] => {
        const consoleOutput: string = cp.execSync(command, { stdio: ["pipe", "pipe", "inherit"] }).toString()
        const consoleOutputLines: string[] = consoleOutput.split("\n")

        return consoleOutputLines.slice(NPM_SCRIPT_HEADER_LINES_COUNT, consoleOutputLines.length - SKIP_THE_FINAL_EMPTY_LINE)
    }

export {
    runCommandAndGetConsoleOutput,
}
