import {program} from "commander"
import {CommandFlag, Filename, ioSettings, isUndefined, LogTarget, parseCommands, saveLog, time} from "../../../general"
import {ScriptGroup} from "../../types"
import {usefulnessMetricLfcScriptGroupSettings} from "../globals"
import {USEFULNESS_METRIC_FAMILIES_WITH_PARAMETERS} from "../metrics"
import {logUsefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore} from "../minimize"
import {UsefulnessMetric, UsefulnessMetricFamilyId, UsefulnessParameterId} from "../types"

program
    .option(`-${CommandFlag.SOS_MODE}, --sos-mode`, "sum-of-squares mode (minimize the sum of squared distances between the actual comma's usefulness score and the best comma's usefulness score, rather than boolean mode which simply gives a 1 when the actual comma is not the best comma and a 0 when it is")
    .option(`-${CommandFlag.EXTREME_CAPTURE_ZONES}, --extreme-capture-zones`, "use commas in each comma's capture zone for the Extreme precision level notation, rather than the default behavior of the comma's secondary comma zone")

parseCommands(ScriptGroup.USEFULNESS_METRIC_LFC as Filename, [LogTarget.PROGRESS, LogTarget.FINAL])

if (!isUndefined(program.extremeCaptureZones)) {
    usefulnessMetricLfcScriptGroupSettings.extremeCaptureZones = program.extremeCaptureZones
}
if (!isUndefined(program.sosMode)) {
    usefulnessMetricLfcScriptGroupSettings.sosMode = program.sosMode
}

const usefulnessMetricFamiliesWithParametersEntries = Object.entries(
    USEFULNESS_METRIC_FAMILIES_WITH_PARAMETERS,
) as Array<[UsefulnessMetricFamilyId, {metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}]>

usefulnessMetricFamiliesWithParametersEntries.forEach(
    logUsefulnessParameterSetsForUsefulnessMetricFamilyWhichMinimizeItsScore,
)

if (ioSettings.time) {
    saveLog(
        `\nFINDING USEFULNESS PARAMETER SETS FOR USEFULNESS METRIC FAMILIES MINIMIZING EACH OF THEIR SCORES TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
