import * as colors from "colors"
import { program } from "commander"
import { clearLogFiles, LogTarget, setLogTargets } from "../log"
import { ioSettings } from "../settings"
import { Filename } from "../types"
import { CommandFlag } from "./types"

const parseCommands = (
    scriptGroup: Filename,
    defaultLogTargets?: LogTarget[]
) => {
    program
        .option(`-${CommandFlag.LOG_TARGETS}, --log-targets [logTargets]`, "log targets")
        .option(`-${CommandFlag.NO_COLOR}, --no-color`, "no color")
        .option(`-${CommandFlag.NO_WRITE}, --no-write`, "no write")
        .option(`-${CommandFlag.FOR_FORUM}, --for-forum`, "no write")

    program.parse(process.argv)

    ioSettings.noWrite = !program.write || !!process.env.TEST_MODE
    if (!ioSettings.noWrite) {
        clearLogFiles(scriptGroup)
    }

    ioSettings.forForum = program.forForum

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(","))

    if (!program.color || !!process.env.TEST_MODE) {
        colors.disable()
    }
}

export {
    parseCommands,
}
