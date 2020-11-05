import {program} from "commander"
import {ScriptFlag, Filename, LogTarget, setupScriptAndIo} from "../../../../general"
import {ScriptGroup} from "../../../types"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"

const applySharedPopularityMetricLfcScriptSetup = (
    {defaultLogTargets}: {defaultLogTargets?: LogTarget[]} = {},
): void => {
    program
        .option(`-${ScriptFlag.NO_USELESS}, --no-useless`, "eliminate probably useless parameters or parameter value scopes")
        .option(`-${ScriptFlag.Z}, --z <z>`, "z", parseFloat)
        .option(`-${ScriptFlag.ONLY_TOP}, --only-top <onlyTop>`, "only top", parseInt)
        .option(`-${ScriptFlag.MAX_UNIT}, --max-unit <maxUnit>`, "max unit", parseFloat)
        .option(`-${ScriptFlag.SYNC}, --sync`, "sync")

    setupScriptAndIo(ScriptGroup.POPULARITY_METRIC_LFC as Filename, defaultLogTargets)

    if (program.z) popularityMetricLfcScriptGroupSettings.z = program.z
    if (program.onlyTop) popularityMetricLfcScriptGroupSettings.onlyTop = program.onlyTop
    if (program.maxUnit) popularityMetricLfcScriptGroupSettings.maxUnit = program.maxUnit
    if (!program.useless) popularityMetricLfcScriptGroupSettings.noUseless = true
    if (program.sync) popularityMetricLfcScriptGroupSettings.sync = true
}

export {
    applySharedPopularityMetricLfcScriptSetup,
}

