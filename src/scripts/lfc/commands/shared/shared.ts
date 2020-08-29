import "colors"
import { program } from "commander"
import { LogTarget, parseCommands } from "../../../../general"
import { LFC } from "../../constants"
import { lfcSettings } from "../../globals"

const applySharedLfcCommandSetup = ({ defaultLogTargets }: { defaultLogTargets?: LogTarget[] } = {}) => {
    program
        .option("-u, --no-useless", "eliminate probably useless parameters or parameter value scopes")
        .option("-z, --z <z>", "z", parseFloat)
        .option("-o, --only-top <onlyTop>", "only top", parseInt)
        .option("-m, --max-unit <maxUnit>", "max unit", parseFloat)

    parseCommands(LFC, defaultLogTargets)

    if (program.z) lfcSettings.z = program.z
    if (program.onlyTop) lfcSettings.onlyTop = program.onlyTop
    if (program.maxUnit) lfcSettings.maxUnit = program.maxUnit
    if (!program.useless) lfcSettings.noUseless = true
}

export {
    applySharedLfcCommandSetup,
}

