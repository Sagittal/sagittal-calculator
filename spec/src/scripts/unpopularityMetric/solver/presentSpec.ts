import { Combination } from "../../../../../src/general"
import { Metric } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { presentBestMetrics } from "../../../../../src/scripts/unpopularityMetric/solver/present"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric/types"

describe("presentBestMetrics", () => {
    it("sorts the best metrics by sum of squares", () => {
        const bestMetrics: Array<Record<string, Metric>> = [
            {
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
                "{max}": {
                    sumOfSquares: 0.014 as SumOfSquares,
                    submetrics: [
                        {
                            [ Parameter.MAX ]: true,
                        },
                    ] as Combination<Submetric>,
                },
            },
            {
                "{aAsBase}": {
                    sumOfSquares: 0.011 as SumOfSquares,
                    submetrics: [
                        {
                            [ Parameter.A_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{jAsBase}": {
                    sumOfSquares: 0.0123 as SumOfSquares,
                    submetrics: [
                        {
                            [ Parameter.J_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{kAsBase}": {
                    sumOfSquares: 0.0105 as SumOfSquares,
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
            },
            {
                "{jAsBase}": {
                    sumOfSquares: 0.0123 as SumOfSquares,
                    submetrics: [
                        {
                            [ Parameter.J_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{aAsBase}": {
                    sumOfSquares: 0.011 as SumOfSquares,
                    submetrics: [
                        {
                            [ Parameter.A_AS_BASE ]: 2 as ParameterValue,
                        },
                    ] as Combination<Submetric>,
                },
                "{kAsBase}": {
                    sumOfSquares: 0.0105 as SumOfSquares,
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
