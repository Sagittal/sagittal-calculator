import { Metric } from "../bestMetric"
import { populatedsForChunkCount, scopesForChunkCount, searchedsForChunkCount } from "../globals"

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

const presentNums = (thing: number[]) =>
    JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v}`))

const presentLens = (thing: unknown[][]) =>
    JSON.stringify(Object.entries(thing).map(([k, v]) => `${k}: ${v.length}`))

const presentSearchedAndPopulated = () =>
    `| populated ${presentNums(populatedsForChunkCount)} | searched ${presentNums(searchedsForChunkCount)} | in the queue ${presentLens(scopesForChunkCount)}`

const presentPercentage = (a: number, b: number) =>
    `${a}/${b} (${(100 * a / b).toPrecision(3)}%)`

export {
    presentBestMetrics,
    presentSearchedAndPopulated,
    presentPercentage,
}
