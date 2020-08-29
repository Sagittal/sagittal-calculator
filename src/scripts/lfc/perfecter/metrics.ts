import { IO, LogTarget, saveLog } from "../../../general"
import { Metric } from "../bestMetric"
import { LFC } from "../constants"
import { perfectMetric } from "./metric"
import { MetricTag } from "./types"

const perfectMetrics = async (bestMetricsValues: Metric[], index = 0, topLevelTotalToPerfect: number = 0) => {
    const totalToPerfect = topLevelTotalToPerfect || bestMetricsValues.length
    const metricToPerfect = bestMetricsValues[ index ]
    const metricTag = `${index + 1}/${totalToPerfect}` as MetricTag

    saveLog(
        `\n\nabout to perfect id ${metricTag} ${JSON.stringify(metricToPerfect)}` as IO,
        LogTarget.PERFECT,
        LFC,
    )
    await perfectMetric(metricToPerfect, { metricTag })
    saveLog(`perfected id ${metricTag}` as IO, LogTarget.PERFECT, LFC)

    if (index === totalToPerfect - 1) {
        return
    }

    await perfectMetrics(bestMetricsValues, index + 1, totalToPerfect)
}

export {
    perfectMetrics,
}
