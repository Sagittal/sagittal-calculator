import { Metric } from "../bestMetric"
import { bestMetrics, scopesToSearch, solverStatus } from "../globals"

const presentBestMetrics = (): Record<string, Metric> => {
    const entriesSortedBySumOfSquares = Object.entries(bestMetrics).sort((a: [string, Metric], b: [string, Metric]): number => {
        return (b[ 1 ].sumOfSquares) as number - (a[ 1 ].sumOfSquares as number) as number
    })

    return entriesSortedBySumOfSquares.reduce(
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
