import { Metric } from "../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/types"
import { Combination, Sum } from "../../../../../src/general"
import { presentBestMetrics } from "../../../../../src/scripts/unpopularityMetric/solver/present"

describe("presentBestMetrics", () => {
    it("sorts the best metrics by sum of squares", () => {
        const bestMetrics: Array<Record<string, Metric>> = [
            {
                "{sum}": {
                    sumOfSquares: 0.013 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.SUM ]: true,
                        },
                    ] as Combination<Submetric>,
                },
                "{count}": {
                    sumOfSquares: 0.012 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.COUNT ]: true,
                        },
                    ] as Combination<Submetric>,
                },
                "{max}": {
                    sumOfSquares: 0.014 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.MAX ]: true,
                        },
                    ] as Combination<Submetric>,
                },
            },
            {
                "{aAsBase}": {
                    sumOfSquares: 0.011 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.A_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{jAsBase}": {
                    sumOfSquares: 0.0123 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.J_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{kAsBase}": {
                    sumOfSquares: 0.0105 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.K_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
            },
        ]

        const result = presentBestMetrics(bestMetrics)

        expect(JSON.stringify(result)).toEqual(JSON.stringify([
            {
                "{max}": {
                    sumOfSquares: 0.014 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.MAX ]: true,
                        },
                    ] as Combination<Submetric>,
                },
                "{sum}": {
                    sumOfSquares: 0.013 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.SUM ]: true,
                        },
                    ] as Combination<Submetric>,
                },
                "{count}": {
                    sumOfSquares: 0.012 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.COUNT ]: true,
                        },
                    ] as Combination<Submetric>,
                },
            },
            {
                "{jAsBase}": {
                    sumOfSquares: 0.0123 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.J_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{aAsBase}": {
                    sumOfSquares: 0.011 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.A_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{kAsBase}": {
                    sumOfSquares: 0.0105 as Sum<"SquaredWeightedRankDifferences">,
                    submetrics: [
                        {
                            [ Parameter.K_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
            },
        ]))
    })
})
