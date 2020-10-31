import {program} from "commander"
import {CommandFlag, Filename, ioSettings, isUndefined, LogTarget, parseCommands, saveLog, time} from "../../../general"
import {ScriptGroup} from "../../types"
import {usefulnessMetricLfcScriptGroupSettings} from "../globals"
import {logUsefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount} from "../maximize"
import {USEFULNESS_METRICS_WITH_PARAMETERS} from "../metrics"
import {logUsefulnessParameterSetsForUsefulnessMetricMinimizingSumOfSquares} from "../minimize"
import {UsefulnessMetric, UsefulnessMetricId, UsefulnessParameterId} from "../types"

program
    .option(`-${CommandFlag.SOS_MODE}, --sos-mode`, "sum-of-squares mode (minimize sum-of-squared distances of non-matches, rather than the default behavior of more simply maximizing match count)")
    .option(`-${CommandFlag.EXTREME_CAPTURE_ZONES}, --extreme-capture-zones`, "use commas in each comma's capture zone for the Extreme precision level notation, rather than the default behavior of the comma's secondary comma zone")
    // Re: max error, see http://forum.sagittal.org/viewtopic.php?p=2575#p2575
    .option(`-${CommandFlag.MAX_ERROR}, --max-error <maxError>`, "exclude any squared distance in score from the most useful comma in a given zone's score which is greater than this value", parseFloat)

parseCommands(ScriptGroup.USEFULNESS_METRIC_LFC as Filename, [LogTarget.PROGRESS, LogTarget.FINAL])

if (!isUndefined(program.extremeCaptureZones)) {
    usefulnessMetricLfcScriptGroupSettings.extremeCaptureZones = program.extremeCaptureZones
}
if (!isUndefined(program.maxError)) usefulnessMetricLfcScriptGroupSettings.maxError = program.maxError

const usefulnessMetricsWithParametersEntries = Object.entries(
    USEFULNESS_METRICS_WITH_PARAMETERS,
) as Array<[UsefulnessMetricId, {metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}]>

if (program.booleanMode) {
    usefulnessMetricsWithParametersEntries.forEach(
        logUsefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount,
    )
} else {
    usefulnessMetricsWithParametersEntries.forEach(
        logUsefulnessParameterSetsForUsefulnessMetricMinimizingSumOfSquares,
    )
}

if (ioSettings.time) {
    saveLog(
        `\nFINDING USEFULNESS PARAMETER SETS FOR USEFULNESS METRICS MAXIMIZING COUNT MOST USEFUL TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
