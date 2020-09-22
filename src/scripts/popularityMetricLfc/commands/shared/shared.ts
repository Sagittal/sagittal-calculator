import { program } from "commander"
import { CommandFlag, Filename, ioSettings, LogTarget, parseCommands } from "../../../../general"
import { ScriptGroup } from "../../../types"
import { popularityMetricLfcScriptGroupSettings } from "../../globals"

const applySharedPopularityMetricLfcCommandSetup = (
    { defaultLogTargets }: { defaultLogTargets?: LogTarget[] } = {},
): void => {
    ioSettings.scriptGroup = ScriptGroup.POPULARITY_METRIC_LFC as Filename

    program
        .option(`-${CommandFlag.NO_USELESS}, --no-useless`, "eliminate probably useless parameters or parameter value scopes")
        .option(`-${CommandFlag.Z}, --z <z>`, "z", parseFloat)
        .option(`-${CommandFlag.ONLY_TOP}, --only-top <onlyTop>`, "only top", parseInt)
        .option(`-${CommandFlag.MAX_UNIT}, --max-unit <maxUnit>`, "max unit", parseFloat)
        .option(`-${CommandFlag.SYNC}, --sync`, "sync")

    parseCommands(ScriptGroup.POPULARITY_METRIC_LFC as Filename, defaultLogTargets)

    if (program.z) popularityMetricLfcScriptGroupSettings.z = program.z
    if (program.onlyTop) popularityMetricLfcScriptGroupSettings.onlyTop = program.onlyTop
    if (program.maxUnit) popularityMetricLfcScriptGroupSettings.maxUnit = program.maxUnit
    if (!program.useless) popularityMetricLfcScriptGroupSettings.noUseless = true
    if (program.sync) popularityMetricLfcScriptGroupSettings.sync = true
}

export {
    applySharedPopularityMetricLfcCommandSetup,
}

