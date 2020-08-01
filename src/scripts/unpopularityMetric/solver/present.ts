import { Metric } from "../bestMetric"

const presentBestMetrics = (bestMetrics: Array<Record<string, Metric>>) => {
    return bestMetrics.map(bestMetricsForChunkCount => {
        const entriesSortedBySumOfSquares = Object.entries(bestMetricsForChunkCount).sort((a: [string, Metric], b: [string, Metric]): number => {
            return (b[ 1 ].sumOfSquares) as number - (a[ 1 ].sumOfSquares as number) as number
        })

        return entriesSortedBySumOfSquares.reduce(
            (bestMetricsForChunkCountWithKeysSortedBySumOfSquares, [metricName, metric]) => {
                return {
                    ...bestMetricsForChunkCountWithKeysSortedBySumOfSquares,
                    [ metricName ]: metric,
                }
            },
            {},
        )
    })
}

export {
    presentBestMetrics,
}
