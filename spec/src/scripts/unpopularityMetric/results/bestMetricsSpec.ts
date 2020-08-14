import { Metric } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import * as bestMetrics from "../../../../../src/scripts/unpopularityMetric/results/bestMetrics"
import { computeSumOfSquaresForSubmetrics } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("best metrics", () => {
    fit("verifies all of the best metrics", () => {
        const bestMetricsEntries: Array<[string, Metric]> = Object.entries(bestMetrics) as Array<[string, Metric]>

        bestMetricsEntries.forEach(([bestMetricName, bestMetric]) => {
            const sumOfSquares = computeSumOfSquaresForSubmetrics(bestMetric.submetrics)
            // console.log(bestMetricName, sumOfSquares)
            expect(bestMetric.sumOfSquares).toBe(sumOfSquares,  `${bestMetricName} failed, has SoS ${bestMetric.sumOfSquares} but just computed ${sumOfSquares}`)
        })
    })
})
