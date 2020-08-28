import { IO } from "../../../general"
import { Metric } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { perfectMetric } from "./metric"
import { MetricTag } from "./types"

const perfectMetrics = async (bestMetricsValues: Metric[], index = 0, topLevelTotalToPerfect: number = 0) => {
    const totalToPerfect = topLevelTotalToPerfect || bestMetricsValues.length
    const metricToPerfect = bestMetricsValues[ index ]
    const metricTag = `${index + 1}/${totalToPerfect}` as MetricTag

    saveDebugMessage(
        `\n\nabout to perfect id ${metricTag} ${JSON.stringify(metricToPerfect)}` as IO,
        DebugTarget.PERFECT
    )
    await perfectMetric(metricToPerfect, { metricTag })
    saveDebugMessage(`perfected id ${metricTag}` as IO, DebugTarget.PERFECT)

    if (index === totalToPerfect - 1) {
        return
    }

    await perfectMetrics(bestMetricsValues, index + 1, totalToPerfect)
}

export {
    perfectMetrics,
}
