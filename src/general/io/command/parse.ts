import * as colors from "colors"
import { program } from "commander"
import { clearLogFiles, logSettings, LogTarget, setLogTargets } from "../log"
import { Filename } from "../types"

// TODO: you'll want to refactor so that you can curry/chain these setups with a callback so you can compose them
//  or maybe you won't have to deal with that if you're able to consolidate notating-symbols and analyze-comma

// TODO: (hey or we could just do it based on CI env var?!) --no-write --no-color in each test

const parseCommands = (
    scriptGroup: Filename,
    defaultLogTargets?: LogTarget[]
) => {
    program
        .option("-t, --log-targets [logTargets]", "log targets")
        .option("-c, --no-color", "no color")
        .option("-w, --no-write", "no write")

    program.parse(process.argv)

    logSettings.noWrite = !program.write
    if (!logSettings.noWrite) {
        clearLogFiles(scriptGroup)
    }

    setLogTargets(program.logTargets || defaultLogTargets && defaultLogTargets.join(","))

    if (!program.color) {
        colors.disable()
    }
}

export {
    parseCommands,
}
