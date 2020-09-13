import { Metric } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import * as bestMetrics from "../../../../../src/scripts/popularityMetricLfc/results/bestMetrics"
import { computeSumOfSquaresForSubmetrics } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("best metrics", (): void => {
    it("verifies all of the best metrics", (): void => {
        const bestMetricsEntries: Array<[string, Metric]> = Object.entries(bestMetrics) as Array<[string, Metric]>

        bestMetricsEntries.forEach(([bestMetricName, bestMetric]: [string, Metric]): void => {
            const sumOfSquares = computeSumOfSquaresForSubmetrics(bestMetric.submetrics)
            expect(bestMetric.sumOfSquares).toBe(sumOfSquares, `${bestMetricName} failed, has SoS ${bestMetric.sumOfSquares} but just computed ${sumOfSquares}`)
        })
    })
})
