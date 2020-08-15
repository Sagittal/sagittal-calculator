import { Combination } from "../../../../../src/general"
import { SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { MetricName } from "../../../../../src/scripts/unpopularityMetric/bestMetric/types"
import { bestMetrics } from "../../../../../src/scripts/unpopularityMetric/globals"
import { presentBestMetrics } from "../../../../../src/scripts/unpopularityMetric/solver"
import { Parameter, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("presentBestMetrics", () => {
    it("sorts the best metrics by sum of squares", () => {
        bestMetrics.set(
            "{sum}" as MetricName,
            {
                sumOfSquares: 0.013 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                    },
                ] as Combination<Submetric>,
            },
        )
        bestMetrics.set(
            "{count}" as MetricName,
            {
                sumOfSquares: 0.012 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                    },
                ] as Combination<Submetric>,
            },
        )
        bestMetrics.set(
            "{max}" as MetricName,
            {
                sumOfSquares: 0.014 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.MAX ]: true,
                    },
                ] as Combination<Submetric>,
            },
        )

        const result = presentBestMetrics()

        expect(JSON.stringify(result)).toEqual(JSON.stringify({
            "{max}": {
                sumOfSquares: 0.014 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.MAX ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{sum}": {
                sumOfSquares: 0.013 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{count}": {
                sumOfSquares: 0.012 as SumOfSquares,
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                    },
                ] as Combination<Submetric>,
            },
        }))
    })
})
