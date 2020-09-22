import { count, Count, Io, LogTarget, saveLog, stringify } from "../../../general"
import { Metric } from "../bestMetric"
import { perfectMetric, perfectMetricSync } from "./metric"
import { MetricTag } from "./types"

const setupForPerfectMetrics = (
    bestMetricsValues: Metric[],
    index: number = 0,
    topLevelTotalToPerfect: Count<Metric> = 0 as Count<Metric>,
): { metricToPerfect: Metric, totalToPerfect: Count<Metric>, metricTag: MetricTag } => {
    const totalToPerfect = topLevelTotalToPerfect || count(bestMetricsValues)
    const metricToPerfect = bestMetricsValues[ index ]
    const metricTag = `${index + 1}/${totalToPerfect}` as MetricTag

    const { name, ...otherMetricToPerfectProperties } = metricToPerfect

    saveLog(`\n\nabout to perfect ${metricTag} ${stringify(otherMetricToPerfectProperties)}` as Io, LogTarget.PERFECT)

    return {
        metricToPerfect,
        totalToPerfect,
        metricTag,
    }
}

const perfectMetrics = async (
    bestMetricsValues: Metric[],
    index: number = 0,
    topLevelTotalToPerfect: Count<Metric> = 0 as Count<Metric>,
): Promise<void> => {
    const { metricToPerfect, totalToPerfect, metricTag } = 
        setupForPerfectMetrics(bestMetricsValues, index, topLevelTotalToPerfect)
    await perfectMetric(metricToPerfect, { metricTag })
    saveLog(`perfected ${metricTag}` as Io, LogTarget.PERFECT)

    if (index === totalToPerfect - 1) {
        return
    }

    await perfectMetrics(bestMetricsValues, index + 1, totalToPerfect)
}

const perfectMetricsSync = (
    bestMetricsValues: Metric[],
    index: number = 0,
    topLevelTotalToPerfect: Count<Metric> = 0 as Count<Metric>,
): void => {
    const { metricToPerfect, totalToPerfect, metricTag } =
        setupForPerfectMetrics(bestMetricsValues, index, topLevelTotalToPerfect)
    perfectMetricSync(metricToPerfect, { metricTag })
    saveLog(`perfected ${metricTag}` as Io, LogTarget.PERFECT)

    if (index === totalToPerfect - 1) {
        return
    }

    perfectMetricsSync(bestMetricsValues, index + 1, totalToPerfect)
}

export {
    perfectMetrics,
    perfectMetricsSync,
}
