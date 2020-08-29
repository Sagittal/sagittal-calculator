import { Combination } from "../../../../../../src/general"
import { MetricName, SumOfSquares } from "../../../../../../src/scripts/lfc/bestMetric"
import { bestMetrics } from "../../../../../../src/scripts/lfc/globals"
import { computeSortedBestMetrics } from "../../../../../../src/scripts/lfc/solver"
import { Parameter, Submetric } from "../../../../../../src/scripts/lfc/sumOfSquares"

describe("computeSortedBestMetrics", () => {
    it("sorts the best metrics by sum of squares", () => {
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

        expect(JSON.stringify(actual)).toEqual(JSON.stringify({
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
