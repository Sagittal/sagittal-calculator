import { sort } from "../../../../general"
import { Metric, MetricName } from "../../bestMetric"
import { bestMetrics } from "../../globals"

const computeSortedBestMetrics = (): Record<MetricName, Metric> => {
    const bestMetriesEntries = Array.from(bestMetrics.entries())
    const bestMetricsEntriesSortedBySumOfSquares = sort(
        bestMetriesEntries,
        { descending: true, by: [1, "sumOfSquares"] },
    )

    return bestMetricsEntriesSortedBySumOfSquares.reduce(
        (
            bestMetricsWithKeysSortedBySumOfSquares: Record<MetricName, Metric>,
            [metricName, metric]: [MetricName, Metric],
        ): Record<MetricName, Metric> => {
            return {
                ...bestMetricsWithKeysSortedBySumOfSquares,
                [ metricName ]: metric,
            }
        },
        {},
    )
}

export {
    computeSortedBestMetrics,
}
