import "colors"
import { program } from "commander"
import { now } from "../../code"
import { ioSettings } from "../globals"
import { clearLogFiles, LogTarget, setLogTargets } from "../log"
import { Filename } from "../types"
import { CommandFlag } from "./types"

const parseCommands = (scriptGroup: Filename, defaultLogTargets?: LogTarget[]): void => {
    program
        .option(`-${CommandFlag.LOG_TARGETS}, --log-targets [logTargets]`, "log targets")
        .option(`-${CommandFlag.NO_COLOR}, --no-color`, "no color")
        .option(`-${CommandFlag.NO_WRITE}, --no-write`, "no write")
        .option(`-${CommandFlag.FOR_FORUM}, --for-forum`, "no write")
        .option(`-${CommandFlag.NO_TIME}, --no-time`, "no time")

    program.parse(process.argv)

    ioSettings.noWrite = !program.write || !!process.env.TEST_MODE
    if (!ioSettings.noWrite) {
        clearLogFiles(scriptGroup)
    }

    ioSettings.forForum = program.forForum

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(","))

    ioSettings.disableColors = !program.color || !!process.env.TEST_MODE

    if (program.time && !process.env.TEST_MODE) {
        ioSettings.time = now()
    }
}

export {
    parseCommands,
}
