import { Combination, stringify } from "../../../../../../src/general"
import { MetricName, SumOfSquares } from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { bestMetrics } from "../../../../../../src/scripts/popularityMetricLfc/globals"
import { computeSortedBestMetrics } from "../../../../../../src/scripts/popularityMetricLfc/solver"
import { Parameter, Submetric } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSortedBestMetrics", (): void => {
    it("sorts the best metrics by sum of squares", (): void => {
        bestMetrics.set(
            "{sum}" as MetricName,
            {
                sumOfSquares: 0.013 as SumOfSquares,
                name: "" as MetricName,
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
                name: "" as MetricName,
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
                name: "" as MetricName,
                submetrics: [
                    {
                        [ Parameter.MAX ]: true,
                    },
                ] as Combination<Submetric>,
            },
        )

        const actual = computeSortedBestMetrics()

        expect(stringify(actual)).toEqual(stringify({
            "{max}": {
                sumOfSquares: 0.014 as SumOfSquares,
                name: "",
                submetrics: [
                    {
                        [ Parameter.MAX ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{sum}": {
                sumOfSquares: 0.013 as SumOfSquares,
                name: "",
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                    },
                ] as Combination<Submetric>,
            },
            "{count}": {
                sumOfSquares: 0.012 as SumOfSquares,
                name: "",
                submetrics: [
                    {
                        [ Parameter.COUNT ]: true,
                    },
                ] as Combination<Submetric>,
            },
        }))
    })
})
