import { Combination, Name } from "../../../../../src/general"
import { Metric, SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { SamplePoint } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/sumsOfSquares"
import { bestMetrics } from "../../../../../src/scripts/popularityMetricLfc/globals"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSumsOfSquaresAndMaybeUpdateBestMetric", (): void => {
    const metricName = "{aAsCoefficient,sum,w}" as Name<Metric>
    const samples = [
        {
            samplePoint: [0, 0] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.W ]: 0.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [0, 1] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 0.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [1, 0] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [1, 1] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
    ]

    it("finds the sums of squares for each sample", async (): Promise<void> => {
        const actual = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        const expected = [
            [
                0.013989 as SumOfSquares,
                0.014131 as SumOfSquares,
            ],
            [
                0.031710 as SumOfSquares,
                0.013983 as SumOfSquares, // Best!
            ],
        ] as SumsOfSquares
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })

    it("sets the best metric when it beats it", async (): Promise<void> => {
        bestMetrics.set(
            metricName,
            {
                sumOfSquares: 0.014000 as SumOfSquares,
                name: "" as Name<Metric>,
                submetrics: [{
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.W ]: 1.5 as ParameterValue,
                }] as Combination<Submetric>,
            },
        )

        await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        const expected = {
            sumOfSquares: 0.013983 as SumOfSquares,
            name: "{aAsCoefficient,sum,w}" as Name<Metric>,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        }
        expect(bestMetrics.get(metricName)).toBeCloseToObject(expected)
    })

    it("does not set the best metric when it does not beat it", async (): Promise<void> => {
        const bestMetric = {
            sumOfSquares: 0.012000 as SumOfSquares,
            name: "" as Name<Metric>,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        }
        bestMetrics.set(metricName, bestMetric)

        await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        expect(bestMetrics.get(metricName)).toEqual(bestMetric)
    })

    it("does not set the best metric when it gets an invalid parameter combination (and doesn't fail either)             ", async (): Promise<void> => {
        const bestMetric = {
            sumOfSquares: 0.012000 as SumOfSquares,
            name: "" as Name<Metric>,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        }
        bestMetrics.set(metricName, bestMetric)

        const samples = [
            {
                samplePoint: [0, 0] as SamplePoint,
                submetrics: [{
                    [ Parameter.SUM ]: true,
                    // Invalid because it doesn't make sense to use weight on a metric with only a single submetric
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: 1 as ParameterValue,
                    [ Parameter.W ]: 0.5 as ParameterValue,
                }] as Combination<Submetric>,
            },
            {
                samplePoint: [0, 1] as SamplePoint,
                submetrics: [{
                    [ Parameter.SUM ]: true,
                    [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0 as ParameterValue,
                    [ Parameter.W ]: 0.5 as ParameterValue,
                }] as Combination<Submetric>,
            },
        ]

        await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        expect(bestMetrics.get(metricName)).toEqual(bestMetric)
    })
})
