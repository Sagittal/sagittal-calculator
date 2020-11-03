import "colors"
import {program} from "commander"
import {isUndefined, now} from "../../code"
import {COMMA} from "../constants"
import {ioSettings} from "../globals"
import {clearLogFiles, LogTarget, setLogTargets} from "../log"
import {Filename} from "../types"
import {CommandFlag} from "./types"

const setupCommandAndIo = (scriptGroup: Filename, defaultLogTargets?: LogTarget[]): void => {
    ioSettings.scriptGroup = scriptGroup

    program
        .option(`-${CommandFlag.LOG_TARGETS}, --log-targets [logTargets]`, "log targets")
        .option(`-${CommandFlag.NO_COLOR}, --no-color`, "no color")
        .option(`-${CommandFlag.NO_WRITE}, --no-write`, "no write")
        .option(`-${CommandFlag.TABLE_FORMAT}, --table-format <tableFormat>`, "table format")
        .option(`-${CommandFlag.NO_TIME}, --no-time`, "no time")

    program.parse(process.argv)

    ioSettings.noWrite = !program.write || !!process.env.TEST_MODE
    if (!ioSettings.noWrite) {
        clearLogFiles(scriptGroup)
    }

    if (!isUndefined(program.tableFormat)) ioSettings.tableFormat = program.tableFormat

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(COMMA))

    ioSettings.disableColors = !program.color || !!process.env.TEST_MODE

    if (program.time && !process.env.TEST_MODE) {
        ioSettings.time = now()
    }
}

export {
    setupCommandAndIo,
}
