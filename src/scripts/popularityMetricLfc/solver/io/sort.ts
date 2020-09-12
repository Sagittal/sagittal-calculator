import { sort } from "../../../../general"
import { Metric } from "../../bestMetric"
import { bestMetrics } from "../../globals"

const computeSortedBestMetrics = (): Record<string, Metric> => {
    const bestMetriesEntries = Array.from(bestMetrics.entries())
    const bestMetricsEntriesSortedBySumOfSquares = sort(
        bestMetriesEntries,
        { descending: true, by: [1, "sumOfSquares"] },
    )

    return bestMetricsEntriesSortedBySumOfSquares.reduce(
        (bestMetricsWithKeysSortedBySumOfSquares, [metricName, metric]) => {
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
