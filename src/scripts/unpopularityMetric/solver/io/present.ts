import { sort } from "../../../../general"
import { Metric } from "../../bestMetric"
import { bestMetrics, scopesToSearch, solverStatus } from "../../globals"

const presentBestMetrics = (): Record<string, Metric> => {
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

const presentSearchedAndPopulated = () =>
    `| populated ${solverStatus.populatedScopeCount} | searched ${solverStatus.searchedScopeCount} | in the queue ${scopesToSearch.length}`

const presentPercentage = (a: number, b: number) =>
    `${a}/${b} (${(100 * a / b).toPrecision(3)}%)`

export {
    presentBestMetrics,
    presentSearchedAndPopulated,
    presentPercentage,
}
