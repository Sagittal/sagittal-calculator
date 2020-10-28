import {program} from "commander"
import {CommandFlag, Filename, ioSettings, LogTarget, parseCommands, saveLog, time} from "../../../general"
import {ScriptGroup} from "../../types"
import {logUsefulnessParameterSetsForUsefulnessMetricMaximizingMatchCount} from "../maximize"
import {USEFULNESS_METRICS_WITH_PARAMETERS} from "../metrics"
import {logUsefulnessParameterSetsForUsefulnessMetricMinimizingSumOfSquares} from "../minimize"
import {UsefulnessMetric, UsefulnessMetricId, UsefulnessParameterId} from "../types"

ioSettings.scriptGroup = ScriptGroup.USEFULNESS_METRIC_LFC as Filename

program
    .option(`-${CommandFlag.BOOLEAN_MODE}, --boolean-mode`, "boolean mode (more simply maximize match count, rather than minimize sum-of-squared distances of non-matches)")

parseCommands(ScriptGroup.USEFULNESS_METRIC_LFC as Filename, [LogTarget.PROGRESS, LogTarget.FINAL])

const usefulnessMetricsWithParametersEntries = Object.entries(
    USEFULNESS_METRICS_WITH_PARAMETERS,
) as Array<[UsefulnessMetricId, { metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}]>

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
