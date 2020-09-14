import { Name, sort } from "../../../../general"
import { Metric } from "../../bestMetric"
import { bestMetrics } from "../../globals"

const computeSortedBestMetrics = (): Record<Name<Metric>, Metric> => {
    const bestMetriesEntries = Array.from(bestMetrics.entries())
    const bestMetricsEntriesSortedBySumOfSquares = sort(
        bestMetriesEntries,
        { descending: true, by: [1, "sumOfSquares"] },
    )

    return bestMetricsEntriesSortedBySumOfSquares.reduce(
        (
            bestMetricsWithKeysSortedBySumOfSquares: Record<Name<Metric>, Metric>,
            [metricName, metric]: [Name<Metric>, Metric],
        ): Record<Name<Metric>, Metric> => {
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
