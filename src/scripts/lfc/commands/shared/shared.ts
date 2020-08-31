import { program } from "commander"
import { CommandFlag, LogTarget, parseCommands } from "../../../../general"
import { LFC_SCRIPT_GROUP } from "../../constants"
import { lfcScriptGroupSettings } from "../../globals"

const applySharedLfcCommandSetup = ({ defaultLogTargets }: { defaultLogTargets?: LogTarget[] } = {}) => {
    program
        .option(`-${CommandFlag.NO_USELESS}, --no-useless`, "eliminate probably useless parameters or parameter value scopes")
        .option(`-${CommandFlag.Z}, --z <z>`, "z", parseFloat)
        .option(`-${CommandFlag.ONLY_TOP}, --only-top <onlyTop>`, "only top", parseInt)
        .option(`-${CommandFlag.MAX_UNIT}, --max-unit <maxUnit>`, "max unit", parseFloat)

    parseCommands(LFC_SCRIPT_GROUP, defaultLogTargets)

    if (program.z) lfcScriptGroupSettings.z = program.z
    if (program.onlyTop) lfcScriptGroupSettings.onlyTop = program.onlyTop
    if (program.maxUnit) lfcScriptGroupSettings.maxUnit = program.maxUnit
    if (!program.useless) lfcScriptGroupSettings.noUseless = true
}

export {
    applySharedLfcCommandSetup,
}

