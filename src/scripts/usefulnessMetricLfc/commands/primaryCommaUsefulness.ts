import {Filename, Io, ioSettings, LogTarget, parseCommands, saveLog, time} from "../../../general"
import {ScriptGroup} from "../../types"
import {computeUsefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful} from "../maximize"
import {USEFULNESS_METRICS_WITH_PARAMETERS} from "../metrics"
import {UsefulnessMetric, UsefulnessMetricId, UsefulnessParameterId} from "../types"

ioSettings.scriptGroup = ScriptGroup.USEFULNESS_METRIC_LFC as Filename

parseCommands(ScriptGroup.USEFULNESS_METRIC_LFC as Filename, [LogTarget.PROGRESS, LogTarget.FINAL])

const usefulnessMetricsWithParametersEntries = Object.entries(
    USEFULNESS_METRICS_WITH_PARAMETERS
) as Array<[UsefulnessMetricId, [UsefulnessMetric, UsefulnessParameterId[]]]>
usefulnessMetricsWithParametersEntries.forEach(
    computeUsefulnessParameterSetsForUsefulnessMetricMaximizingCountMostUseful
)

if (ioSettings.time) {
    saveLog(
        `\nFINDING USEFULNESS PARAMETER SETS FOR USEFULNESS METRICS MAXIMIZING COUNT MOST USEFUL TOOK ${time()}`,
        LogTarget.FINAL,
    )
}
