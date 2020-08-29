import { program } from "commander"
import { CommandFlag, LogTarget, parseCommands } from "../../../../general"
import { LFC } from "../../constants"
import { lfcSettings } from "../../globals"

const applySharedLfcCommandSetup = ({ defaultLogTargets }: { defaultLogTargets?: LogTarget[] } = {}) => {
    program
        .option(`-${CommandFlag.NO_USELESS}, --no-useless`, "eliminate probably useless parameters or parameter value scopes")
        .option(`-${CommandFlag.Z}, --z <z>`, "z", parseFloat)
        .option(`-${CommandFlag.ONLY_TOP}, --only-top <onlyTop>`, "only top", parseInt)
        .option(`-${CommandFlag.MAX_UNIT}, --max-unit <maxUnit>`, "max unit", parseFloat)

    parseCommands(LFC, defaultLogTargets)

    if (program.z) lfcSettings.z = program.z
    if (program.onlyTop) lfcSettings.onlyTop = program.onlyTop
    if (program.maxUnit) lfcSettings.maxUnit = program.maxUnit
    if (!program.useless) lfcSettings.noUseless = true
}

export {
    applySharedLfcCommandSetup,
}

