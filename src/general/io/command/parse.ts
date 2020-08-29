import * as colors from "colors"
import { program } from "commander"
import { clearLogFiles, LogTarget, setLogTargets } from "../log"
import { ioSettings } from "../settings"
import { Filename } from "../types"
import { CommandFlag } from "./types"

// TODO: you'll want to refactor so that you can curry/chain these setups with a callback so you can compose them
//  or maybe you won't have to deal with that if you're able to consolidate notating-symbols and analyze-comma

// TODO: (hey or we could just do it based on CI env var?!) --no-write --no-color in each test

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

    ioSettings.noWrite = !program.write
    if (!ioSettings.noWrite) {
        clearLogFiles(scriptGroup)
    }

    ioSettings.forForum = program.forForum

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(","))

    if (!program.color) {
        colors.disable()
    }
}

export {
    parseCommands,
}
