import { Metric } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { perfectMetric } from "./metric"

const perfectMetrics = async (bestMetricsValues: Metric[], index = 0, topLevelTotalToPerfect: number = 0) => {
    const totalToPerfect = topLevelTotalToPerfect || bestMetricsValues.length
    const metricToPerfect = bestMetricsValues[ index ]
    const metricId = `${index + 1}/${totalToPerfect}`

    saveDebugMessage(`\n\nabout to perfect id ${metricId} ${JSON.stringify(metricToPerfect)}`, DebugTarget.PERFECT)
    await perfectMetric(metricToPerfect, { metricId })
    saveDebugMessage(`perfected id ${metricId}`, DebugTarget.PERFECT)

    if (index === totalToPerfect - 1) {
        return
    }

    await perfectMetrics(bestMetricsValues, index + 1, totalToPerfect)
}

export {
    perfectMetrics,
}